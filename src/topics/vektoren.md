# Vektoren

<dl>
    <dt>Ortsvektor</dt>
    <dd>Vektor von Ursprung zu Punkt</dd>
    <dt>Verbindungsvektor</dt>
    <dd>Vektor zwischen zwei Punkten</dd>
</dl>

## Rechenoperationen

| Rechenoperation           | Formel                                                                                  |
| ------------------------- | --------------------------------------------------------------------------------------- |
| Addition                  | $\vec{a} + \vec{b}=\begin{pmatrix}a_1 + b_1\\b_1 + b_2\end{pmatrix}$                    |
| Multiplikation mit Skalar | $\lambda\times\vec{a}=\begin{pmatrix}\lambda\times a_1\\\lambda\times a_2\end{pmatrix}$ |
| Länge / Betrag            | $\mid\vec{a}\mid = \sqrt{a^2+b^2}$                                                      |
| Abstand zweier Punkte     | $\mid\vec{BA}\mid=\sqrt{(a_1-b_1)^2+(a_2-b_2)^2}$                                       |

## Einheitsvektoren

Vektor der Länge 1 in beliebiger Richtung

$$
 \vec{a_E} = \frac{1}{\mid \vec{a} \mid} \cdot \vec{a}
$$

$$
 \vec{e_1}=\begin{pmatrix}1\\0\end{pmatrix} \vec{e_2}=\begin{pmatrix}0\\1\end{pmatrix}
$$

- maximale Menge linear unabhängiger Vektoren im $\R^n$
- Basis (Standardbasis für $\vec{e}$) des $\R^n$ / Erzeugendensystem
- Anzahl der Basisvektoren ist $dim(V)$

## Lineare Abhängigkeit

Linearkombination:

$$
 \sum_{k=1}^n \lambda_k \cdot \vec{a_k}
$$

Linear unabhängig:

$$
 \lambda_1 \vec{a_1} + \lambda_2 \vec{a_2} + ... + \lambda_n \vec{a_n} = \vec{0} \textnormal{ nur triviale Lösung}
$$

## Untervektorräume

Nichtleere Teilmenge $U \leq \R^n$

1. $\lambda \cdot \vec{v} \in U$, für $\lambda \in \R, \vec{v} \in U$
2. $\vec{v_1} + \vec{v_2} \in U$, für $\vec{v_1}, \vec{v_2} \in U$

## Lineare Hülle

Menge aller Linearkombinationen einer Gruppe von Vektoren

## Basis von Vektoren

Vektor wird erzeugt durch Linearkombination von Basisvektoren

$$
 \vec{v} = k_1 \vec{b_1} + ... + k_n \vec{b_n} = \begin{pmatrix}k_1 \\ \vdots \\ k_n \end{pmatrix}
$$

## Skalarprodukt

$$
 \vec{a} \cdot \vec{b} := | \vec{a} | \cdot | \vec{b} | \cdot cos (\alpha)
$$

$$
 \vec{a} \cdot \vec{b} = 0 \Leftrightarrow \vec{a} \perp \vec{b}
$$

## Projektion

$\vec{b}$ auf $\vec{a}$ projezieren, ohne $|\vec{b}|$ zu erhalten:

$$
 \vec{b}_{\vec{a}} = |\vec{b}| \cdot cos(\alpha)
$$

### Skalare Projektion

$$
 comp_a(\vec{b}) = \frac{\vec{b} \cdot \vec{a}}{|\vec{a}|}
$$

### Vektorielle Projektion

$$
 \vec{b}_{\vec{a}} = \frac{\vec{b} \cdot \vec{a}}{|\vec{a}|} \cdot \frac{\vec{a}}{|\vec{a}|}
$$

## Vektor-/Kreuzprodukt im $\R^3$

$$
 \vec{c} = \vec{a} \times \vec{b} \Leftrightarrow \vec{c} \perp \vec{a}, \vec{c} \perp \vec{b}
$$

$$
 \vec{a} \times \vec{b} = \begin{pmatrix} a_yb_z - a_zb_y \\ a_zb_x - a_xb_z \\ a_xb_y - a_yb_x \end{pmatrix}
$$

## Spatprodukt

$$
 S = (\vec{a} \times \vec{b}) \cdot \vec{c}
$$

Betrag ist Volumen des durch die 3 Vektoren aufgespannten Spates (Raum)
$S = 0 \Rightarrow$ Vektoren liegen in einer Ebene

## Geraden im $\R^3$

$$
 g: \vec{x} = \vec{x_0} + \lambda \cdot \vec{a}, \lambda \in \R
$$

### Punktrichtungsform

$$
 g: \vec{x} = \vec{x_0} + \lambda \cdot (\vec{x_1} - \vec{x_0}), \lambda \in \R
$$

## Ebenen im $\R^3$

### Punktrichtungsform

$$
 E: \vec{x} = \vec{x_0} + \lambda \cdot \vec{e} + \mu \cdot \vec{b}; \lambda, \mu \in \R
$$

### Parameterfreie Darstellung

$$
 E: (\vec{x} - \vec{x_0}) \cdot \vec{n} = 0
$$

Ausmultipliziert:

$$
 E: Ax + By + Cz = D
$$

## Schnittgerade zweier Ebenen

1. Parameterform gleichsetzen und LGS aufstellen
2. Eine Variable festlegen und LGS lösen

## Schnitt Gerade-Ebene

1. Gerade in Parameterform einsetzen
2. $\lambda$ in $g$ einsetzen

## Abstand Punkt-Ebene:

$$
 d_p = |\frac{(\vec{x} - \vec{x_0}) \cdot \vec{n}}{|\vec{n}|}|
$$
