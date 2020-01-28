# Potenzreihen

$$
 \sum_{n=0}^{\infty} a_nx^n = a_0 + a_1 + a_2x^2 + ...
$$

Definitionsbereich besteht aus allen $x \in \R$, für die die Reihe konvergiert

## Konvergenzradius $\rho$ der Potenzreihe

$$
 \rho = \lim_{n \to \infty} \mid \frac{a_n}{a_{n+1}} \mid
$$

- eindeutig bestimmbar für jede Potenzreihe
- Reihe konvergiert für $|x| < \rho$
- Reihe divergiert für $|x| > \rho$

## Taylorreihen

Funktionen können als Potenzreihen ausgedrückt werden
Taylor-Reihe der Funktion $f$ mit Entwicklungsstelle $x_0$:

$$
 T(x) = \sum_{n=0}^{\infty} \: \frac{1}{n!} \: f^{(n)}(x_0)(x-x_0)^n
$$

### Taylor-Polynom

Polynom $T_n$

- $f(x_0) = T(x_0)$
- $f^n(x_0) = T^n(x_0)$

Taylor-Polynom der Ordnung n:

$$
 T_n(x) = f(x_0) + \frac{f'(x_0)}{1!}(x-x_0) + ... + \frac{f^{(n)}(x_0)}{n!}(x-x_0)^n
$$

### Taylor-Restglied

$$
 R_n = f(x) - T_n(x)
$$

mit

$$
 R_n(x) = \frac {f^{(n+1)}(\xi)} {(n+1)!} \: (x-x_0)^{n+1}
$$

$\xi$ ist eine Stelle zwischen $x$ und $x_0$
