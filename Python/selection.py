import random
x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.,' "
s = "Life's but a walking shadow, a poor player, that struts and frets his hour upon the stage, and then is heard no more. \
It is a tale told by an idiot, full of sound and fury, signifying nothing."
l = []
for z in s:
    l.append("@")
i = 1
while i:
    a = 0
    s2 = ""
    while a < len(s):
        if l[a] != s[a]:
            l[a] = random.choice(x)
        s2 += l[a]
        a += 1
    print(s2)
    if s2 == s:
        break
    i += 1
print(i)
