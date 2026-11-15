# Helper bersama generator batch (b13-b19)
import random

POST_MIN = lambda i: 25 + 30 * (i - 1)
OFF = {
 12: ([15,33,54,71,95,114,140,165,194,227,259], 775),
 17: ([13,27,41,56,72,87,102,118,134,152,170,188,206,224,243,262], 705),
 11: ([17,34,49,66,84,103,125,147,166,186], 855),
 19: ([14,29,43,58,73,89,104,120,136,152,168,185,202,219,236,254,272,290], 1025),
 14: ([15,33,50,68,86,105,124,143,162,181,200,218,237], 855),
 20: ([15,31,47,64,80,96,113,129,145,162,178,194,211,227,243,258,273,287,300], 995),
 13: ([16,32,49,67,84,101,118,135,152,169,186,203], 845),
 16: ([17,34,51,69,86,104,121,138,155,172,189,206,223,240,257], 735),
 18: ([15,31,48,64,80,97,114,131,148,165,182,199,216,233,251,268,285], 715),
 15: ([14,29,44,58,73,87,102,117,132,147,162,177,192,207], 835),
}
PAT = [12,17,11,19,14,20,13,16,11,18,15,12,20,11,17,13,19,14,16,11,18,12,15,20,13]

def roster(pid, n, seed):
    rng = random.Random(seed * 10007 + pid)
    pool = [a for a in range(1, 501) if a != pid]
    rng.shuffle(pool)
    return pool[:n]

def esc(s):
    return s.replace("\\", "\\\\").replace('"', '\\"')

def build(T, base_id, fname, part, batch_no, first_author, seed, note):
    assert len(T) == 25, len(T)
    hdr = (
        'import type { ThreadzThread } from "../types"\n\n'
        "// PART %d: BATCH %d (14 Nov 2026) — cuitan %d-%d, PENGGANDAAN PENULIS:\n"
        "// 25 penulis BARU (authorId %d-%d). minutesAgo = 25 + 30*(id-1).\n"
        "// Pola komentar hukum 7 Nov (377 komentar/file), satu telat 600-1000 mnt,\n"
        "// hitungan dicek dua kali, tanpa self-reply/dobel, authorId 1-500.\n"
        "// ISI: 100%% forum matematika; topik bentuk baru tanpa mengulang batch 1-%d.\n"
        "// %s\n"
        "export const THREADS_PART%d: ThreadzThread[] = [\n"
    ) % (part, batch_no, base_id, base_id + 24, first_author, first_author + 24,
         batch_no - 1, note, part)
    out = [hdr]
    delta = base_id - 150
    for pid, content, kom, telat in T:
        n = PAT[(pid - base_id) % 25]
        assert len(kom) == n - 1, (pid, len(kom), n)
        offs, late = OFF[n]
        mins = POST_MIN(pid)
        times = [mins - o for o in offs] + [mins - late]
        ids = roster(pid - delta, n, seed)
        out.append('  {\n    id: %d,\n    authorId: %d,\n    minutesAgo: %d,\n    shares: %d,\n    content:\n      "%s",\n'
                   % (pid, pid - delta, mins, 5 + pid % 15, esc(content)))
        out.append("    comments: [\n")
        for i, (txt, t) in enumerate(zip(kom + [telat], times)):
            out.append('      { authorId: %d, minutesAgo: %d, content: "%s" },\n' % (ids[i], t, esc(txt)))
        out.append("    ],\n  },\n")
    out.append("]\n")
    p = "/home/z/my-project/src/lib/threadz/data/%s" % fname
    open(p, "w").write("".join(out))
    print(fname, "ditulis:", len(T), "post,", sum(PAT), "komentar")
    for (pid, c, _, _) in T:
        print(pid, len(c))
