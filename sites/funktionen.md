# Funktionen

## Symmetrie

| y-Achse (gerade) | Punktsymetrie (ungerade) |
| ---------------- | ------------------------ |
| $f(-x) = f(x)$   | $f(-x) = -f(x)$          |

## Umkehrung

1. $f(x)$ durch $y$ ersetzen
2. Nach $x$ umformen

## Reelle Zahlenfolgen & Grenzwert

$$
  (a_n)_n = 1, 2, 3, 4, ... \quad,  a_n = n
$$

## Ableitung elementarer Funktionen

|  Funktion   |         Ableitung         |
| :---------: | :-----------------------: |
|    $x^n$    |        $nx^{n-1}$         |
|  $sin(x)$   |         $cos(x)$          |
|  $cos(x)$   |         $-sin(x)$         |
|  $tan(x)$   |   $\frac{1}{cos^2(x)}$    |
|  $cot(x)$   |   $-\frac{1}{sin^2(x)}$   |
| $arcsin(x)$ | $\frac{1}{\sqrt{1-x^2}}$  |
| $arccos(x)$ | $-\frac{1}{\sqrt{1-x^2}}$ |
| $arctan(x)$ |     $\frac{1}{1+x^2}$     |
| $arccot(x)$ |    $-\frac{1}{1+x^2}$     |
|    $e^x$    |           $e^x$           |
|   $ln(x)$   |       $\frac{1}{x}$       |
| $log_a(x)$  | $\frac{1}{ln(a) \cdot x}$ |

## Ableitungsregeln

#### Faktorregel

$$
  y = c \cdot f(x) \quad \Rightarrow \quad y' = c \cdot f'(x)
$$

#### Summenregel

$$
  y = f_1(x) + f_2(x) \quad \Rightarrow \quad y' = f'_1(x) + f'_2(x)
$$

#### Produktregel

$$
  y = u(x) \cdot v(x) \quad \Rightarrow \quad y' = u'(x) \cdot v(x) + u(x) \cdot v'(x)
$$

#### Potenzregel

$$
  y = x^n \quad \Rightarrow \quad y' = nx^{n-1}
$$

#### Quotientenregel

$$
  y = \frac{u(x)}{v(x)} \quad \Rightarrow \quad y' = \frac{u'(x) \cdot v(x) + u(x) \cdot v'(x)}{v^2(x)}
$$

#### Kettenregel

$$
  y = f(g(x)) \quad \Rightarrow \quad y' = g'(x) \cdot f'(g(x))
$$

## Krümmungsverhalten von Funktionen

$f''(x) > 0 \, \hat{=}$ Linkskrümmung

$f''(x) < 0 \, \hat{=}$ Rechtskrümmung

## Hinreichende Bedingung für relative Maxima

$f'(x_0) = 0, f''(x_0) < 0 \quad \Rightarrow$ relatives Maximum

$f'(x_0) = 0, f''(x_0) > 0 \quad \Rightarrow$ relatives Minimum

## Wendepunkte und Sattelpunkte

$f''(x_0) = 0, f'''(x_0) \neq 0 \quad \Rightarrow$ Wendepunkt

$f''(x_0) = 0, f'''(x_0) = 0 \quad \Rightarrow$ Sattelpunkt

## Newton-Verfahren zur Näherung einer Nullstelle

$$
  x_{neu} = x_{start} - \frac{f(x_{start})}{f(x_{start})}
$$

1. $x_{start}$ nahe Nullpunkt heraussuchen
2. Verfahren wiederholen, bis $x_{start}$ sich stabilisiert

## Integration

$$
  \int f(x) \, dx = F(x) + C
$$

### Eigenschaften des Integrals

- $\int c \cdot f(x) \, dx = c \cdot \int f(x) \, dx$
- $\int f(x) \pm g(x) \, dx = \int f(x) \, dx \pm \int g(x) \, dx$
- $\int_{a}^{b} f(x) \, dx = -\int_{b}^{a} f(x) \, dx$
- $\int_{a}^{b} f(x) \, dx = \int_{a}^{c} f(x) \, dx + \int_{c}^{b} f(x) \, dx$

### Integrationstechniken

#### Substitution

1. Teil von abzuleitender Funktion durch u substituieren
2. Ableitung $\frac{du}{dx}$ bestimmen
3. Nach $dx$ auflösen & einsetzen

#### Partielle Integration

$g(x)$ wird als abgeleitet betrachtet

$$
 \int f(x) \cdot g'(x) \, dx = f(x) \cdot g(x) - \int f'(x) \cdot g(x) \, dx
$$

### Uneigentliche Integrale

1. Variable für einen der Grenzwerte einbauen
2. $\lim_{t \to \infty}$ oder $\lim_{t \to 0}$ berechnen

### Mittelwert

Mittelwert für $f(x)$ im Intervall $[a;b]$

$$
  f(x) = \frac{1}{b-a} \int_{a}^b f(x) \, dx
$$

### Flächenberechnung

$$
  A = \int_a^b (f(x) - g(x)) \, dx
$$

, wenn $f(x) \geq g(x) \quad \forall \quad x \in [a;b]$
