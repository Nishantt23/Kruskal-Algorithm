
// Pseudocode - Kruskal's Algorithm

KRUSKAL(graph G)
 
MST = {}
 
for each vertex v belonging G.V:
    MAKE-SET(v)
 
for each (u, v) in G.E ordered by weight(u, v), increasing:
    if FIND-SET(u) != FIND-SET(v):
        add {(u, v)} to set MST
        UNION(u, v)
 
return MST