# Komplexe Zahlen

$$
 i^2 = -1
$$

Menge der komplexen Zahlen

$$
 \Complex = \{ c = a + ib;\: a, b \in \R;\: i^2 = -1 \}
$$

$a$: Realteil von $c$ ($Re(c)$)

$b$: Imaginärteil von $c$ ($Im(c)$)

$i$: Imaginäre Einheit

![Gaußsche Zahlenebene](https://upload.wikimedia.org/wikipedia/commons/9/95/Gau%C3%9Fsche_Zahlenebene.svg)

## Kartesische Form

$$
 c = a + ib
$$

| Rechenoperation     | Formel                                                              |
| ------------------- | ------------------------------------------------------------------- |
| Gleichheit          | $a + ib = c + id$, wenn $a=c$ und $b=d$                             |
| Summe/Differenz     | $(a+ib) \pm (c+id) = (a\pm c) + (b\pm d) \cdot i$                   |
| Multiplikation      | $(a+bi) \cdot (c+di) = (ac-bd) + (ad + bc)i$                        |
| Komplex-Konjugierte | entsteht durch Spiegelung an reeller Achse $c = a+ib$, $c^*=a-ib$   |
| Betrag              | $\mid c \mid = \sqrt{a^2 + b^2} \quad c \cdot c^* = \mid c \mid ^2$ |

#### Division

$$
    \frac{z}{w} = \frac{z}{w} \cdot \frac{w^*}{w^*} = \frac{z \cdot w^*}{\mid w \mid ^2}
$$

## Polarform

$$
 c = r \cdot (cos(\varphi) + isin(\varphi))
$$

- $a = Re(c) = r \cdot cos(\varphi)$
- $b = Im(c) = r \cdot sin(\varphi)$
- $r = \mid c \mid$
- $\varphi =$Winkelargument, nicht eindeutig

| Rechenoperation               | Formel                                                                                               |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| Multiplikation                | $c_1 \cdot c_2 = r_1 r_2 \cdot (cos(\varphi_1 + \varphi_2) + isin(\varphi_1 + \varphi_2))$           |
| Division                      | $\frac{c_1}{c_2} = \frac{r_1}{r_2} \cdot (cos(\varphi_1 - \varphi_2) + isin(\varphi_1 - \varphi_2))$ |
| Potenzieren (Satz von Moivre) | $c^n = r^n(cos(n\varphi) + isin(n\varphi)), \quad n\in \N$                                           |

#### Wurzeln

$$
 w_k = r^{\frac{1}{n}} \cdot (cos(\frac{\varphi + k \cdot 2\pi}{n}) + isin(\frac{\varphi + k \cdot 2\pi}{n}))
$$

mit $k = 0, 1, 2, ..., n - 1$

- Wurzeln liegen auf Kreis mit Radius $r^{\frac{1}{n}}$
- Winkelabstand $\frac{2\pi}{n}$ zueinander

### PQ-Formel

$$
 x_{1/2} = -\frac{p}{2} \pm \sqrt{\frac{p^2}{4} - q}
$$

$$
 \frac{p^2}{4} - q := D, \textnormal{Diskriminante}
$$

$D > 0$: 2 reelle Lösungen
$D = 0$: 1 reelle Lösung (doppelte Nullstelle)
$D < 0$: 2 komplexe Lösungen, zueinander komplex konjugiert

## Exponentialform

$$
 z = r \cdot e^{i\varphi}
$$

|                                                          |
| -------------------------------------------------------- |
| $z^* = r * e^{-i\varphi}$                                |
| $cos(\varphi) = \frac{e^{i\varphi} - e^{-i\varphi}}{2i}$ |
| $sin(\varphi) = \frac{e^{i\varphi} - e^{i\varphi}}{2i}$  |

| Rechenoperation | Formel                                                                 |
| --------------- | ---------------------------------------------------------------------- |
| Multiplikation  | $z_1 \cdot z_2 = r_1 \cdot r_2 \cdot e^{i(\varphi_1 + \varphi_2)}$     |
| Division        | $\frac{z_1}{z_1} = \frac{r_1}{r_2} \cdot e^{i(\varphi_1 + \varphi_2)}$ |
| Potenzen        | $z^n = r^n \cdot e^{n \cdot i\varphi}$                                 |

#### Wurzeln

$$
 w^k = \sqrt[n]{r} \cdot e^{i(\frac{\varphi + 2 \pi k}{n})} , \quad k = 0, 1, 2, ..., n-1
$$
