# Matrizen

$(m \times n)$ - Matrix (m Zeilen, n Spalten)

$$
    \begin{pmatrix}
    a_{11} & \cdots & a_{1n}\\
    \vdots & \ddots & \vdots\\
    a_{m1} & \cdots & a_{mn}
    \end{pmatrix}
$$

## Transponieren einer Matrix

$$
 B = A^T
$$

Vertauschen der Zeilen und Spalten

## Rechenoperationen

### Addition

$$
 A = (a_{ij})
$$

$$
 A + B = ( a_{ij} + b_{ij} )
$$

### Multiplikation mit Skalaren

$$
 \lambda \cdot A = (\lambda \cdot a_{ij})
$$

### Multiplikation

|                                                                    |                                                                    |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ |
|                                                                    | $\begin{pmatrix} b_{11} & b_{12} \\ b_{21} & b_{22} \end{pmatrix}$ |
| $\begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix}$ |                                                                    |

## Abbildungen

M & N nichtleere Menge

<dl>
    <dt>surjektiv</dt>
    <dd>Jeder Eintrag von M hat einen Eintrag in N, aber mehrere können den gleichen haben</dd>
    <dt>injektiv</dt>
    <dd>Jeder Eintrag von M hat einen Eintrag in N, aber N kann unbesetzte Einträge haben</dd>
    <dt>bijektiv</dt>
    <dd>surjektiv + injektiv</dd>
</dl>

## Lineare Abbildungen

$V$, $W$ sind reelle Vektorräume, $F: V \leftrightarrow W$ heißt lineare
Abbildung, wenn

- $F(\vec{a} + \vec{b}) = F(\vec{a}) + F(\vec{b})$
- $F(R \cdot \vec{a}) = R \cdot F(\vec{a})$

## Besondere Matrizen

### Drehmatrix

$$
    R =
    \begin{pmatrix}
    cos(\alpha) & -sin(\alpha) \\
    sin(\alpha) & cos(\alpha)
    \end{pmatrix}
$$

### Streckungsmatrix

$$
    B =
    \begin{pmatrix}
    S_x & 0 \\
    0 & S_y
    \end{pmatrix}
$$

## Bild einer Matrix

Lineare Hülle der Spaltenvektoren / Menge der linear unabhängigen
Spaltenvektoren

## Kern einer Matrix

LGS aufstellen für $A \vec{x} = \vec{0}$

- $lL = Kern(A)$
- $dim(Kern(A)) =$ Anzahl der Vektoren in LH ( $lL$ )

## Rang einer Matrix

1. Matrix als Rechenschema aufschreiben
2. Zeilenstufennormalform durch Gauß-Algorithmus Anzahl der Zeilen
   $\neq \vec{0} \hat{=} rang(A)$

### Eigenschaften

- $rang(A) = rang(A^T)$
- Anzahl l.u. Zeilen/Spalten
- $dim(Bild(A)) = rang(A)$

### Rangsatz

$$
 dim(Kern(A)) + rang(A) = n
$$

## Matrizen und LGS

$$A \vec{x} = \vec{b}$$

- $A$: Koeffizientenmatrix
- $\vec{x}$: Spaltenvektor der Unbekannten
- $(A \mid \vec{b})$: Erweiterte Koeffizientenmatrix

LGS ist lösbar, wenn:

- $rang(A) = rang(A \mid \vec{b})$
- $\vec{b} \in Bild(A)$

## Inverse Matrix

_Rückgängig machen_ einer Matrix ($A^{-1}$)

Matrix ist invertierbar, wenn

- $rang(A) = n$ (voller Rang)
- $A \cdot A^{-1} = E_n$ (Einheitsmatrix)

## Lösung von LGS mithilfe Koeffizientenmatrix

- $Kern(A) = \vec{0} \Rightarrow (A \mid \vec{b})$ hat eindeutige Lösung
- Ist $A$ invertierbar, ist $A \vec{x} = \vec{b}$ eindeutig lösbar
  $\Rightarrow \vec{x} = A^{-1} \cdot \vec{b}$

## Determinante

$$
    D:=
    \begin{pmatrix}
    a_{11} & a_{12} \\
    a_{21} & a_{22}
    \end{pmatrix}
    = a_{11} a_{22} - a_{12} a_{21}
$$

### Regel des Sarrus

$$
    det(A) =
    a_{11} a_{22} a_{33}
    + a_{12} a_{23} a_{31}
    + a_{13} a_{21} a_{32}
    - a_{13} a_{22} a_{31}
    - a_{11} a_{23} a_{32}
    - a_{12} a_{21} a_{33}
$$

### Entwicklungssatz nach LaPlace

$A$ ist $(m \times n)$-Matrix

$$
 det(A) = \sum_{j=1}^{n}{(-1)^{i+j} \cdot a_{ij} \cdot det(A'_{ij})}
$$

1. Eine Zeile / Spalte mit möglichst vielen 0 heraussuchen
2. Matrix wie ein Schacheld mit negativen/positiven Vorzeichen bestücken
3. Jeden Eintrag der Spalte/Zeile mit Unterdeterminante multiplizieren

### Eigenschaften der Determinante

- $det(A) \neq 0 \Leftrightarrow A$ invertierbar
- wechselt bei vertauschen der Zeilen/Spalten Vorzeichen
- $det(A \cdot B) = det(A) \cdot det(B)$
- Determinante einer Dreiecksmatrix $\hat{=}$ Produkt der Hauptdiagonalelemente
