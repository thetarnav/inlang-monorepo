import { s as x, n as _, e as T } from "../chunks/scheduler.03df403d.js"
import {
	S as y,
	i as L,
	g as p,
	m as b,
	s as C,
	h as f,
	j as P,
	n as S,
	f as u,
	c as j,
	y as k,
	a as g,
	x as w,
	z as N,
	o as z,
} from "../chunks/index.7b3c1d9a.js"
import { d as l, w as h } from "../chunks/index.1c50704a.js"
const B = "en",
	v = h(B)
l(v, (t) => () => t)
const H = async (t) => {
		v.set(t)
	},
	O = "en",
	q = h(O),
	$ = l(q, (t) => t)
l($, (t) => () => ({ en: "Only text", de: "Nur Text" }[t]))
const D = l(
	$,
	(t) => (e) =>
		({
			en: `Hello ${e.name}! You have ${e.count} Messages.`,
			de: `Hallo ${e.name}! Du hast ${e.count} Nachrichten.`,
			fr: `Bonjour ${e.name}! Vous avez ${e.count} messages.`,
		}[t]),
)
function E(t) {
	let e,
		s = t[0]({ name: "Samuel", count: 5 }) + "",
		r,
		c,
		n,
		m = "change language tag",
		i,
		d
	return {
		c() {
			;(e = p("p")), (r = b(s)), (c = C()), (n = p("button")), (n.textContent = m)
		},
		l(a) {
			e = f(a, "P", {})
			var o = P(e)
			;(r = S(o, s)),
				o.forEach(u),
				(c = j(a)),
				(n = f(a, "BUTTON", { "data-svelte-h": !0 })),
				k(n) !== "svelte-trjca9" && (n.textContent = m)
		},
		m(a, o) {
			g(a, e, o), w(e, r), g(a, c, o), g(a, n, o), i || ((d = N(n, "click", t[1])), (i = !0))
		},
		p(a, [o]) {
			o & 1 && s !== (s = a[0]({ name: "Samuel", count: 5 }) + "") && z(r, s)
		},
		i: _,
		o: _,
		d(a) {
			a && (u(e), u(c), u(n)), (i = !1), d()
		},
	}
}
function M(t, e, s) {
	let r
	return (
		T(t, D, (n) => s(0, (r = n))),
		[
			r,
			async () => {
				await H("de")
			},
		]
	)
}
class A extends y {
	constructor(e) {
		super(), L(this, e, M, E, x, {})
	}
}
export { A as component }
