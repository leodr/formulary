# Reihen

## Zahlenfolge

$$
 S_k = a_1 + a_2 + ... + a_k = \sum_{k=1}^n a_k
$$

## Partialsumme / Reihe

Folge der Partialsummen einer Zahlenfolge heißt Reihe

$$
 (S_n)_{n \in \N} = (\sum_{k=1}^{n} a_k)_{n \in \N}
$$

## Konvergenz

$$
 lim_{n \to \infty} S_n = \sum_{k=0}^{\infty} a_k
$$

hat einen endlichen Wert? ("Summe der unendlichen Reihe")

## Geometrische Reihe

$$
 \sum_{k=0}^{\infty} q^k = 1 + q + q^2 + q^3 + ...
$$

$\Rightarrow$ konvergent für $|q| < 1$

## Harmonische Reihe

$$
 \sum_{n=1}^{\infty} \frac{1}{n} = 1 + \frac{1}{2} + \frac{1}{3} + ...
$$

$\Rightarrow$ divergent

## Minorantenkriterium

Ist $0 < a_i \leq b_i$ ab einem $m \in \N$, dann gilt

$$
 \sum_{i=1}^{\infty} a_i \: divergent \quad \Rightarrow \quad \sum_{i=1}^{\infty} b_i \: divergent
$$

## Leibniz-Kriterium

$$
 \sum_{n=1}^{\infty} \: (-1)^{n+1} a_n = a_1 - a_2 + a_3 - a_4 \pm ...
$$

Alternierende Reihe ist konvergent, falls $a_1 > a_2 > a_3 > ... > 0$ und $lim_{n \to \infty} a_n = 0$

## Quotientenkriterium

Gegeben ist die Reihe $\sum_{n=1}^{\infty} a_n$

$$
 \lim_{n \to \infty} \mid \frac{a_{n+1}}{a_n} \mid < 1 \quad \Rightarrow \sum_{n=1}^{\infty} a_n \: \textnormal{ist konvergent}
$$

$$
 \lim_{n \to \infty} \mid \frac{a_{n+1}}{a_n} \mid > 1 \quad \Rightarrow \sum_{n=1}^{\infty} a_n \: \textnormal{ist divergent}
$$
