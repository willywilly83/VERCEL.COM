(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [54252, 30569], {
        54252: function(e, t, s) {
            "use strict";
            s.d(t, {
                i: function() {
                    return m
                }
            });
            var a = s(397458),
                l = s(14517),
                c = s(652983),
                n = s(509877),
                r = s(477234),
                i = s(508785),
                o = s(830369),
                d = s(953527),
                h = s.n(d),
                u = s(725843),
                b = s(582526),
                x = s(649485),
                _ = s.n(x);

            function v(e) {
                let {
                    switcher: t
                } = e, {
                    options: s,
                    value: l,
                    onChange: c
                } = t;
                return (0, a.jsx)("div", {
                    className: _().container,
                    children: (0, a.jsxs)(u.fC, {
                        onValueChange: c,
                        value: l,
                        children: [(0, a.jsxs)(u.xz, {
                            className: _().langSwitcherTrigger,
                            children: [(0, a.jsx)(u.B4, {
                                placeholder: "Value"
                            }), (0, a.jsx)(u.JO, {
                                asChild: !0,
                                children: (0, a.jsx)(b._, {
                                    size: 16
                                })
                            })]
                        }), (0, a.jsx)(u.h_, {
                            children: (0, a.jsxs)(u.VY, {
                                className: _().langSwitcherContent,
                                children: [(0, a.jsx)(u.u_, {}), (0, a.jsx)(u.l_, {
                                    className: _().langSwitcherViewport,
                                    children: s.map(e => (0, a.jsxs)(u.ck, {
                                        className: _().langSwitcherItem,
                                        value: e.value,
                                        children: [(0, a.jsx)(u.wU, {
                                            className: _().langSwitcherIndicator,
                                            children: (0, a.jsx)(r.J, {
                                                size: 16
                                            })
                                        }), (0, a.jsx)(u.eT, {
                                            children: e.label
                                        })]
                                    }, e.value))
                                })]
                            })
                        })]
                    })
                })
            }
            var p = s(30569),
                C = s(225563),
                j = s.n(C);

            function w(e) {
                let {
                    tabs: t,
                    children: s,
                    hideBorder: c
                } = e, {
                    onChange: n,
                    value: r,
                    options: i
                } = t, o = i.map(e => ({
                    title: e.label,
                    value: e.value
                }));
                return (0, a.jsxs)("div", {
                    className: (0, l.W)(j().tabsWrapper, {
                        [String(j().hideBorder)]: c
                    }),
                    children: [(0, a.jsx)(p.m, {
                        selected: r,
                        setSelected: n,
                        tabs: o,
                        type: "secondary"
                    }), s]
                })
            }

            function g(e) {
                let {
                    lang: t
                } = e;
                if (!t) return (0, a.jsx)(i.$, {
                    size: 16
                });
                if ("tailwind" === t) return (0, a.jsx)(L, {});
                switch (t.toLowerCase()) {
                    case "tsx":
                    case "ts":
                    case "typescript":
                        return (0, a.jsx)(k, {});
                    case "javascript":
                    case "js":
                    case "mjs":
                        return (0, a.jsx)(S, {});
                    case "svelte":
                        return (0, a.jsx)(z, {});
                    case "bash":
                    case "terminal":
                        return (0, a.jsx)(o.o, {
                            size: 16
                        });
                    case "jsx":
                        return (0, a.jsx)(f, {});
                    case "json":
                        return (0, a.jsx)(y, {});
                    case "vue":
                        return (0, a.jsx)(B, {});
                    case "astro":
                        return (0, a.jsx)(N, {});
                    default:
                        return (0, a.jsx)(i.$, {
                            size: 16
                        })
                }
            }

            function m(e) {
                let {
                    filename: t,
                    fileType: s,
                    textToCopy: i,
                    className: o,
                    children: d,
                    switcher: u,
                    tabs: b,
                    custom: x,
                    hideLineNumbers: _
                } = e, p = (null == t ? void 0 : t.includes("tailwind")) ? "tailwind" : s || (null == t ? void 0 : t.split(".").pop()), [C, j] = (0, c.useState)(0), m = (0, c.useMemo)(() => (function e(t) {
                    let s = "";
                    return c.Children.forEach(t, t => {
                        (0, c.isValidElement)(t) ? s += e(t.props.code || t.props.children): s += t
                    }), s
                })(i || d), [i, d]), f = (0, c.useCallback)(() => {
                    j(e => e + 1), navigator.clipboard.writeText(m), setTimeout(() => {
                        j(e => e - 1)
                    }, 1400)
                }, [m]);
                return (0, a.jsxs)("div", {
                    className: (0, l.W)(h().wrapper, {
                        [h().hasFileName]: t,
                        [h().custom]: x,
                        [h().hideLineNumbers]: _
                    }, o),
                    children: [b && b.options.length <= 4 ? (0, a.jsx)(w, {
                        hideBorder: !!t,
                        tabs: b,
                        children: t ? null : (0, a.jsxs)("button", {
                            className: (0, l.W)(h().copyButton, {
                                [h().copyButtonCopied || ""]: C
                            }),
                            onClick: f,
                            type: "button",
                            children: [(0, a.jsx)(n.C, {
                                size: 20
                            }), " ", (0, a.jsx)(r.J, {
                                size: 20
                            })]
                        })
                    }) : null, t ? (0, a.jsxs)("div", {
                        className: h().header,
                        children: [(0, a.jsxs)("div", {
                            className: h().fileName,
                            children: [(0, a.jsx)("div", {
                                className: h().iconWrapper,
                                children: (0, a.jsx)(g, {
                                    lang: p || ""
                                })
                            }), (0, a.jsx)("span", {
                                className: h().filenameP,
                                children: t
                            })]
                        }), (0, a.jsxs)("div", {
                            className: h().actions,
                            children: [b && b.options.length > 4 ? (0, a.jsx)(v, {
                                switcher: b
                            }) : null, u ? (0, a.jsx)(v, {
                                switcher: u
                            }) : null, t || b ? (0, a.jsxs)("button", {
                                className: (0, l.W)(h().copyButton, {
                                    [h().copyButtonCopied || ""]: C
                                }),
                                onClick: f,
                                type: "button",
                                children: [(0, a.jsx)(n.C, {
                                    size: 20
                                }), " ", (0, a.jsx)(r.J, {
                                    size: 20
                                })]
                            }) : null]
                        })]
                    }) : null, t || b ? null : (0, a.jsxs)("button", {
                        className: (0, l.W)(h().copyButton, h().copyFloatingButton, {
                            [h().copyButtonCopied || ""]: C
                        }),
                        onClick: f,
                        type: "button",
                        children: [(0, a.jsx)(n.C, {
                            size: 20
                        }), " ", (0, a.jsx)(r.J, {
                            size: 20
                        })]
                    }), d]
                })
            }

            function f() {
                return (0, a.jsxs)("svg", {
                    height: "16",
                    style: {
                        shapeRendering: "auto"
                    },
                    viewBox: "-11.5 -10.23174 23 20.46348",
                    width: "16",
                    children: [(0, a.jsx)("circle", {
                        cx: "0",
                        cy: "0",
                        fill: "currentColor",
                        r: "2.05"
                    }), (0, a.jsxs)("g", {
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1",
                        children: [(0, a.jsx)("ellipse", {
                            rx: "11",
                            ry: "4.2"
                        }), (0, a.jsx)("ellipse", {
                            rx: "11",
                            ry: "4.2",
                            transform: "rotate(60)"
                        }), (0, a.jsx)("ellipse", {
                            rx: "11",
                            ry: "4.2",
                            transform: "rotate(120)"
                        })]
                    })]
                })
            }

            function y() {
                return (0, a.jsx)("svg", {
                    clipRule: "evenodd",
                    fillRule: "evenodd",
                    height: "16",
                    viewBox: "0 0 1321.45 1333.33",
                    width: "16",
                    children: (0, a.jsx)("path", {
                        d: "M221.37 618.44h757.94V405.15H755.14c-23.5 0-56.32-12.74-71.82-28.24-15.5-15.5-25-43.47-25-66.97V82.89H88.39c-1.99 0-3.49 1-4.49 2-1.5 1-2 2.5-2 4.5v1155.04c0 1.5 1 3.5 2 4.5 1 1.49 3 1.99 4.49 1.99H972.8c2 0 1.89-.99 2.89-1.99 1.5-1 3.61-3 3.61-4.5v-121.09H221.36c-44.96 0-82-36.9-82-81.99V700.44c0-45.1 36.9-82 82-82zm126.51 117.47h75.24v146.61c0 30.79-2.44 54.23-7.33 70.31-4.92 16.03-14.8 29.67-29.65 40.85-14.86 11.12-33.91 16.72-57.05 16.72-24.53 0-43.51-3.71-56.94-11.06-13.5-7.36-23.89-18.1-31.23-32.3-7.35-14.14-11.69-31.67-12.99-52.53l71.5-10.81c.11 11.81 1.07 20.61 2.81 26.33 1.76 5.78 4.75 10.37 9 13.95 2.87 2.33 6.94 3.46 12.25 3.46 8.4 0 14.58-3.46 18.53-10.37 3.9-6.92 5.87-18.6 5.87-35V735.92zm112.77 180.67l71.17-4.97c1.54 12.81 4.69 22.62 9.44 29.28 7.74 10.88 18.74 16.34 33.09 16.34 10.68 0 18.93-2.76 24.68-8.36 5.81-5.58 8.7-12.07 8.7-19.41 0-6.97-2.71-13.26-8.2-18.79-5.47-5.53-18.23-10.68-38.28-15.65-32.89-8.17-56.27-19.1-70.26-32.74-14.12-13.57-21.18-30.92-21.18-52.03 0-13.83 3.61-26.89 10.85-39.21 7.22-12.38 18.07-22.06 32.59-29.09 14.52-7.04 34.4-10.56 59.65-10.56 31 0 54.62 6.41 70.88 19.29 16.28 12.81 25.92 33.24 29.04 61.27l-70.5 4.65c-1.87-12.25-5.81-21.17-11.81-26.7-6.05-5.6-14.35-8.36-24.9-8.36-8.71 0-15.31 2.07-19.73 6.16-4.4 4.09-6.59 9.12-6.59 15.02 0 4.27 1.81 8.11 5.37 11.57 3.45 3.59 11.8 6.85 25.02 9.93 32.75 7.86 56.2 15.84 70.31 23.87 14.18 8.05 24.52 17.98 30.96 29.92 6.44 11.88 9.66 25.2 9.66 39.96 0 17.29-4.3 33.24-12.88 47.89-8.63 14.58-20.61 25.7-36.08 33.24-15.41 7.54-34.85 11.31-58.33 11.31-41.24 0-69.81-8.86-85.68-26.52-15.88-17.65-24.85-40.09-26.96-67.3zm248.74-45.5c0-44.05 11.02-78.36 33.09-102.87 22.09-24.57 52.82-36.82 92.24-36.82 40.38 0 71.5 12.07 93.34 36.13 21.86 24.13 32.77 57.94 32.77 101.37 0 31.54-4.75 57.36-14.3 77.54-9.54 20.18-23.37 35.89-41.4 47.13-18.07 11.24-40.55 16.84-67.48 16.84-27.33 0-49.99-4.83-67.94-14.52-17.92-9.74-32.49-25.07-43.62-46.06-11.13-20.92-16.72-47.19-16.72-78.74zm74.89.19c0 27.21 4.57 46.81 13.68 58.68 9.13 11.88 21.57 17.85 37.26 17.85 16.1 0 28.65-5.84 37.45-17.47 8.87-11.68 13.28-32.54 13.28-62.77 0-25.39-4.63-43.92-13.84-55.61-9.26-11.76-21.75-17.6-37.56-17.6-15.13 0-27.34 5.97-36.49 17.85-9.21 11.88-13.78 31.61-13.78 59.07zm209.08-135.36h69.99l90.98 149.05V735.91h70.83v269.96h-70.83l-90.48-148.24v148.24h-70.49V735.91zm67.71-117.47h178.37c45.1 0 82 37.04 82 82v340.91c0 44.96-37.03 81.99-82 81.99h-178.37v147c0 17.5-6.99 32.99-18.5 44.5-11.5 11.49-27 18.5-44.5 18.5H62.97c-17.5 0-32.99-7-44.5-18.5-11.49-11.5-18.5-27-18.5-44.5V63.49c0-17.5 7-33 18.5-44.5S45.97.49 62.97.49H700.1c1.5-.5 3-.5 4.5-.5 7 0 14 3 19 7.49h1c1 .5 1.5 1 2.5 2l325.46 329.47c5.5 5.5 9.5 13 9.5 21.5 0 2.5-.5 4.5-1 7v250.98zM732.61 303.47V96.99l232.48 235.47H761.6c-7.99 0-14.99-3.5-20.5-8.49-4.99-5-8.49-12.5-8.49-20.5z",
                        fill: "currentColor"
                    })
                })
            }

            function S() {
                return (0, a.jsx)("svg", {
                    height: "17",
                    style: {
                        marginLeft: -1.5
                    },
                    viewBox: "0 0 50 50",
                    width: "17",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, a.jsx)("path", {
                        d: "M 43.335938 4 L 6.667969 4 C 5.195313 4 4 5.195313 4 6.667969 L 4 43.332031 C 4 44.804688 5.195313 46 6.667969 46 L 43.332031 46 C 44.804688 46 46 44.804688 46 43.335938 L 46 6.667969 C 46 5.195313 44.804688 4 43.335938 4 Z M 27 36.183594 C 27 40.179688 24.65625 42 21.234375 42 C 18.140625 42 15.910156 39.925781 15 38 L 18.144531 36.097656 C 18.75 37.171875 19.671875 38 21 38 C 22.269531 38 23 37.503906 23 35.574219 L 23 23 L 27 23 Z M 35.675781 42 C 32.132813 42 30.121094 40.214844 29 38 L 32 36 C 32.816406 37.335938 33.707031 38.613281 35.589844 38.613281 C 37.171875 38.613281 38 37.824219 38 36.730469 C 38 35.425781 37.140625 34.960938 35.402344 34.199219 L 34.449219 33.789063 C 31.695313 32.617188 29.863281 31.148438 29.863281 28.039063 C 29.863281 25.179688 32.046875 23 35.453125 23 C 37.878906 23 39.621094 23.84375 40.878906 26.054688 L 37.910156 27.964844 C 37.253906 26.789063 36.550781 26.328125 35.453125 26.328125 C 34.335938 26.328125 33.628906 27.039063 33.628906 27.964844 C 33.628906 29.109375 34.335938 29.570313 35.972656 30.28125 L 36.925781 30.691406 C 40.171875 32.078125 42 33.496094 42 36.683594 C 42 40.117188 39.300781 42 35.675781 42 Z",
                        fill: "currentColor"
                    })
                })
            }

            function k() {
                return (0, a.jsxs)("svg", {
                    fill: "none",
                    height: "14",
                    viewBox: "0 0 512 512",
                    width: "14",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, a.jsx)("rect", {
                        fill: "currentColor",
                        height: "512",
                        rx: "50",
                        width: "512"
                    }), (0, a.jsx)("rect", {
                        fill: "currentColor",
                        height: "512",
                        rx: "50",
                        width: "512"
                    }), (0, a.jsx)("path", {
                        clipRule: "evenodd",
                        d: "m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z",
                        fill: "var(--ds-background-100)",
                        fillRule: "evenodd"
                    })]
                })
            }

            function B() {
                return (0, a.jsx)("svg", {
                    version: "1.1",
                    viewBox: "0 0 261.76 226.69",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, a.jsxs)("g", {
                        transform: "matrix(1.3333 0 0 -1.3333 -76.311 313.34)",
                        children: [(0, a.jsx)("g", {
                            transform: "translate(178.06 235.01)",
                            children: (0, a.jsx)("path", {
                                d: "m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z",
                                fill: "var(--ds-gray-800)"
                            })
                        }), (0, a.jsx)("g", {
                            transform: "translate(178.06 235.01)",
                            children: (0, a.jsx)("path", {
                                d: "m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z",
                                fill: "var(--ds-gray-500)"
                            })
                        })]
                    })
                })
            }

            function N() {
                return (0, a.jsxs)("svg", {
                    fill: "none",
                    viewBox: "0 0 63 79",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, a.jsx)("path", {
                        d: "M19.4924 65.9282C15.6165 62.432 14.4851 55.0859 16.0999 49.7638C18.8998 53.1193 22.7793 54.1822 26.7977 54.7822C33.0013 55.7081 39.0937 55.3618 44.8565 52.5637C45.5158 52.2434 46.125 51.8174 46.8454 51.386C47.3861 52.9341 47.5268 54.497 47.338 56.0877C46.8787 59.9617 44.9251 62.9542 41.8177 65.2227C40.5752 66.13 39.2604 66.9411 37.9771 67.7967C34.0346 70.4262 32.9679 73.5095 34.4494 77.9946C34.4846 78.1038 34.5161 78.2131 34.5957 78.4797C32.5828 77.5909 31.1124 76.2965 29.9921 74.5946C28.8088 72.7984 28.2458 70.8114 28.2162 68.6615C28.2014 67.6152 28.2014 66.5597 28.0588 65.5282C27.7107 63.0135 26.5144 61.8876 24.2608 61.8227C21.9479 61.7561 20.1183 63.1672 19.6331 65.3893C19.5961 65.5597 19.5424 65.7282 19.4887 65.9263L19.4924 65.9282Z",
                        fill: "var(--ds-gray-700)"
                    }), (0, a.jsx)("path", {
                        d: "M0 51.3932C0 51.3932 10.5979 46.2433 21.2254 46.2433L29.2382 21.5069C29.5381 20.3106 30.4141 19.4977 31.4029 19.4977C32.3918 19.4977 33.2677 20.3106 33.5677 21.5069L41.5804 46.2433C54.1672 46.2433 62.8058 51.3932 62.8058 51.3932C62.8058 51.3932 44.8044 2.47586 44.7692 2.37772C44.2526 0.931458 43.3804 0 42.2045 0H20.6032C19.4273 0 18.5903 0.931458 18.0384 2.37772C17.9995 2.47401 0 51.3932 0 51.3932Z",
                        fill: "var(--ds-gray-700)"
                    })]
                })
            }

            function z() {
                return (0, a.jsxs)("svg", {
                    height: "16",
                    viewBox: "-23.04085003 -23.7 545.4320132 647",
                    width: "16",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, a.jsx)("path", {
                        d: "m466.95 79.52c-55.66-79.62-165.6-103.22-245.08-52.6l-139.58 88.93c-9.39 5.9-18.15 12.76-26.12 20.47-7.98 7.71-15.13 16.23-21.34 25.42s-11.45 19-15.64 29.27a160.478 160.478 0 0 0 -9.26 31.87c-1.65 9.15-2.55 18.43-2.67 27.73-.13 9.31.52 18.61 1.93 27.8 1.41 9.2 3.58 18.27 6.48 27.11s6.53 17.42 10.85 25.66a161.68 161.68 0 0 0 -8.22 13.97c-2.51 4.79-4.77 9.71-6.78 14.73s-3.76 10.14-5.25 15.34-2.71 10.47-3.67 15.79a170.365 170.365 0 0 0 1.55 67.48c2.5 11.05 6.09 21.83 10.73 32.17s10.29 20.2 16.89 29.42c55.66 79.62 165.59 103.22 245.07 52.6l139.58-88.56c9.39-5.91 18.13-12.78 26.1-20.5a160.58 160.58 0 0 0 21.33-25.42c6.21-9.18 11.45-18.99 15.64-29.26 4.19-10.26 7.3-20.94 9.29-31.85 1.65-9.15 2.54-18.42 2.66-27.72s-.53-18.6-1.95-27.79c-1.41-9.19-3.58-18.25-6.49-27.09-2.91-8.83-6.54-17.41-10.86-25.65 2.97-4.51 5.72-9.18 8.23-13.97 2.5-4.79 4.77-9.71 6.78-14.73s3.77-10.14 5.27-15.34c1.49-5.19 2.73-10.46 3.7-15.78 1.98-11.16 2.84-22.49 2.58-33.82s-1.65-22.6-4.15-33.66c-2.5-11.05-6.09-21.83-10.73-32.17a170.906 170.906 0 0 0 -16.87-29.42",
                        fill: "currentColor"
                    }), (0, a.jsx)("path", {
                        d: "m208.23 527.78a110.876 110.876 0 0 1 -33.49 3.42c-11.27-.58-22.39-2.86-32.97-6.79a111.06 111.06 0 0 1 -29.42-16.35 111.108 111.108 0 0 1 -23.15-24.42c-3.97-5.55-7.37-11.47-10.15-17.69a102.38 102.38 0 0 1 -6.45-19.34c-1.49-6.65-2.33-13.43-2.48-20.24s.38-13.62 1.58-20.33c.19-1.09.41-2.18.65-3.26.23-1.09.49-2.17.77-3.24.27-1.08.57-2.15.89-3.22.31-1.06.65-2.12 1-3.17l2.63-8.03 7.17 5.35c4.11 3 8.35 5.83 12.7 8.47 4.35 2.65 8.81 5.11 13.37 7.37 4.55 2.27 9.21 4.35 13.94 6.22 4.73 1.88 9.54 3.55 14.42 5.02l5.35 1.55-.48 5.35a31.395 31.395 0 0 0 1.12 10.81c.49 1.76 1.14 3.46 1.93 5.1s1.72 3.21 2.78 4.69a33.4 33.4 0 0 0 6.99 7.35c2.68 2.08 5.67 3.74 8.86 4.92s6.53 1.86 9.93 2.03c3.39.18 6.79-.17 10.08-1.03.76-.2 1.5-.43 2.24-.69s1.47-.54 2.18-.86c.72-.31 1.42-.65 2.12-1.02.69-.36 1.36-.75 2.02-1.17l139.37-88.94a28.96 28.96 0 0 0 4.75-3.72c1.45-1.41 2.74-2.96 3.87-4.63s2.07-3.46 2.83-5.33c.75-1.87 1.31-3.81 1.67-5.79.35-2.03.5-4.08.45-6.14-.05-2.05-.31-4.09-.77-6.1-.45-2-1.11-3.95-1.96-5.83-.84-1.87-1.88-3.65-3.08-5.32-1.94-2.79-4.29-5.26-6.98-7.34s-5.68-3.74-8.86-4.92a33.464 33.464 0 0 0 -9.93-2.04c-3.4-.17-6.8.18-10.09 1.03-.75.2-1.5.43-2.24.69s-1.46.54-2.18.85c-.72.32-1.42.66-2.11 1.03-.69.36-1.37.76-2.03 1.18l-53.52 33.98c-2.18 1.38-4.42 2.68-6.7 3.9-2.29 1.21-4.61 2.34-6.98 3.38s-4.78 1.99-7.22 2.84c-2.44.86-4.91 1.62-7.41 2.29-10.91 2.82-22.18 3.96-33.43 3.38s-22.34-2.87-32.9-6.78c-10.56-3.92-20.46-9.43-29.36-16.33s-16.7-15.11-23.13-24.36c-3.95-5.55-7.34-11.48-10.11-17.7-2.78-6.22-4.93-12.7-6.42-19.34-1.49-6.65-2.31-13.43-2.45-20.24-.15-6.8.38-13.61 1.59-20.31a96.419 96.419 0 0 1 14.94-36.86 96.283 96.283 0 0 1 28.57-27.68l139.8-88.93c2.17-1.38 4.39-2.68 6.66-3.9 2.27-1.21 4.59-2.34 6.94-3.38a98.21 98.21 0 0 1 7.18-2.84c2.42-.86 4.88-1.63 7.37-2.3 10.92-2.83 22.21-3.99 33.47-3.42 11.27.58 22.38 2.86 32.96 6.79 10.58 3.92 20.49 9.44 29.41 16.35a111.11 111.11 0 0 1 23.14 24.43c3.96 5.54 7.37 11.46 10.16 17.68s4.95 12.69 6.46 19.34c1.5 6.65 2.34 13.43 2.49 20.24.16 6.81-.36 13.62-1.56 20.33-.21 1.1-.43 2.2-.68 3.29-.24 1.09-.5 2.18-.78 3.26-.27 1.09-.57 2.17-.88 3.24-.31 1.08-.63 2.15-.98 3.21l-2.67 8.03-7.12-5.35c-4.12-3.03-8.37-5.87-12.73-8.54-4.36-2.66-8.84-5.14-13.41-7.43a182.39 182.39 0 0 0 -28.45-11.32l-5.36-1.55.49-5.35c.15-1.83.14-3.67-.03-5.49-.16-1.82-.49-3.63-.97-5.4-.49-1.76-1.12-3.49-1.91-5.14-.78-1.66-1.71-3.24-2.77-4.74a33.153 33.153 0 0 0 -6.99-7.2 32.991 32.991 0 0 0 -8.82-4.8 33.244 33.244 0 0 0 -19.83-.89c-.76.2-1.51.43-2.24.68-.74.26-1.47.55-2.19.86-.71.31-1.42.66-2.11 1.02-.69.37-1.37.76-2.03 1.18l-139.63 88.78c-1.7 1.07-3.29 2.32-4.73 3.72s-2.74 2.95-3.87 4.61a29.724 29.724 0 0 0 -2.83 5.31c-.76 1.87-1.32 3.8-1.68 5.78-.35 2.03-.5 4.09-.45 6.15a31.547 31.547 0 0 0 2.73 11.95 31.84 31.84 0 0 0 3.07 5.34c1.93 2.76 4.27 5.22 6.94 7.28a33.26 33.26 0 0 0 8.79 4.9 33.533 33.533 0 0 0 19.86 1.09c.75-.21 1.5-.44 2.24-.7.73-.26 1.46-.55 2.18-.86a29.2 29.2 0 0 0 2.11-1.02c.69-.36 1.37-.75 2.03-1.17l53.52-33.92c2.19-1.4 4.42-2.72 6.71-3.94 2.28-1.23 4.61-2.36 6.99-3.41a99.39 99.39 0 0 1 7.23-2.84c2.45-.86 4.93-1.62 7.44-2.28 10.92-2.84 22.2-4 33.47-3.44 11.27.57 22.38 2.85 32.96 6.77 10.57 3.92 20.49 9.43 29.4 16.35 8.92 6.91 16.72 15.14 23.15 24.41 3.96 5.55 7.36 11.47 10.15 17.69a102.65 102.65 0 0 1 6.46 19.34c1.5 6.64 2.34 13.42 2.5 20.23.16 6.82-.37 13.63-1.56 20.33a96.419 96.419 0 0 1 -5.55 19.21 95.753 95.753 0 0 1 -9.4 17.65c-3.73 5.54-8.03 10.68-12.83 15.33s-10.07 8.79-15.73 12.35l-139.64 88.93c-2.19 1.39-4.43 2.7-6.71 3.92-2.29 1.22-4.62 2.35-7 3.39-2.37 1.05-4.78 2-7.23 2.86-2.44.86-4.92 1.63-7.42 2.3",
                        fill: "var(--geist-background)"
                    })]
                })
            }

            function L() {
                return (0, a.jsx)("svg", {
                    fill: "none",
                    viewBox: "0 0 54 33",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, a.jsx)("g", {
                        clipPath: "url(#prefix__clip0)",
                        children: (0, a.jsx)("path", {
                            clipRule: "evenodd",
                            d: "M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z",
                            fill: "currentColor",
                            fillRule: "evenodd"
                        })
                    })
                })
            }
        },
        30569: function(e, t, s) {
            "use strict";
            s.d(t, {
                m: function() {
                    return i
                }
            });
            var a = s(397458),
                l = s(14517),
                c = s(121446),
                n = s(815598),
                r = s.n(n);

            function i(e) {
                return "secondary" === e.type ? (0, a.jsx)("div", {
                    className: (0, l.W)("geist-no-scrollbar", r().tabsSecondary, {
                        [r().disabled || ""]: e.disabled,
                        [r().centered || ""]: e.centered,
                        [r().bold || ""]: e.bold,
                        [r().noBorder || ""]: e.noBorder
                    }),
                    "data-geist-tabs": "",
                    "data-version": "v1",
                    ref: e.ref,
                    style: e.style,
                    children: e.tabs.map(t => (0, a.jsx)("div", {
                        "aria-disabled": e.disabled,
                        className: (0, l.W)(r().tabSecondaryContainer, {
                            [r().activeSecondaryTabContainer || ""]: e.selected === t.value,
                            [r().disabledSecondaryTabContainer || ""]: e.disabled
                        }),
                        "data-geist-tab": "",
                        "data-testid": t["data-testid"],
                        onClick: () => {
                            if (!e.disabled) {
                                var s;
                                null === (s = e.setSelected) || void 0 === s || s.call(e, t.value)
                            }
                        },
                        onKeyDown: s => {
                            var a, l;
                            e.disabled || " " !== s.key || (s.preventDefault(), null === (a = e.setSelected) || void 0 === a || a.call(e, t.value)), e.disabled || "Enter" !== s.key || (s.preventDefault(), null === (l = e.setSelected) || void 0 === l || l.call(e, t.value))
                        },
                        role: "button",
                        tabIndex: e.tabIndex ? e.tabIndex : 0,
                        children: (0, a.jsxs)("div", {
                            className: (0, l.W)(r().tabsSecondary, {
                                [r().activeSecondaryTab || ""]: e.selected === t.value
                            }),
                            children: [t.icon ? (0, a.jsx)("div", {
                                className: r().tabSecondaryIcon,
                                children: t.icon
                            }) : null, (0, a.jsx)(c.x, {
                                as: "div",
                                color: e.textColor || "gray-1000",
                                size: 13,
                                children: t.title
                            })]
                        })
                    }, t.value))
                }) : (0, a.jsx)("div", {
                    className: (0, l.W)("geist-no-scrollbar", r().tabs, {
                        [r().disabled || ""]: e.disabled,
                        [r().centered || ""]: e.centered,
                        [r().bold || ""]: e.bold,
                        [r().noBorder || ""]: e.noBorder
                    }),
                    "data-geist-tabs": "",
                    "data-version": "v1",
                    ref: e.ref,
                    style: e.style,
                    children: e.tabs.map(t => (0, a.jsx)("div", {
                        "aria-disabled": e.disabled,
                        className: r().tabContainer,
                        "data-geist-tab": "",
                        "data-testid": t["data-testid"],
                        onClick: () => {
                            if (!e.disabled) {
                                var s;
                                null === (s = e.setSelected) || void 0 === s || s.call(e, t.value)
                            }
                        },
                        onKeyDown: s => {
                            var a, l;
                            e.disabled || " " !== s.key || (s.preventDefault(), null === (a = e.setSelected) || void 0 === a || a.call(e, t.value)), e.disabled || "Enter" !== s.key || (s.preventDefault(), null === (l = e.setSelected) || void 0 === l || l.call(e, t.value))
                        },
                        role: "button",
                        tabIndex: e.tabIndex ? e.tabIndex : 0,
                        children: (0, a.jsxs)("div", {
                            className: (0, l.W)(r().tab, {
                                [r().activeTab || ""]: e.selected === t.value
                            }),
                            children: [t.icon ? (0, a.jsx)("div", {
                                className: r().tabIcon,
                                children: t.icon
                            }) : null, (0, a.jsx)(c.x, {
                                as: "div",
                                color: e.textColor || "gray-900",
                                size: 14,
                                children: t.title
                            })]
                        })
                    }, t.value))
                })
            }
        },
        953527: function(e) {
            e.exports = {
                wrapper: "code-block_wrapper__t6FCO",
                code: "code-block_code__isn_V",
                hasFileName: "code-block_hasFileName__ezlBD",
                pre: "code-block_pre___OLfy",
                header: "code-block_header__t3NRd",
                iconWrapper: "code-block_iconWrapper__TuHFk",
                copyButton: "code-block_copyButton__uo5Yu",
                copyButtonCopied: "code-block_copyButtonCopied__fMOZ5",
                hide: "code-block_hide__enoxr",
                show: "code-block_show__KnRqc",
                copyFloatingButton: "code-block_copyFloatingButton__PsMvB",
                fileName: "code-block_fileName__HmSv1",
                filenameP: "code-block_filenameP__02nok",
                actions: "code-block_actions__yphRf",
                hideLineNumbers: "code-block_hideLineNumbers__52YKH",
                custom: "code-block_custom__RWaXi"
            }
        },
        649485: function(e) {
            e.exports = {
                langSwitcherTrigger: "switcher_langSwitcherTrigger__3z75V",
                langSwitcherViewport: "switcher_langSwitcherViewport__e6ztt",
                langSwitcherContent: "switcher_langSwitcherContent__YAs5d",
                langSwitcherItem: "switcher_langSwitcherItem__Y7X6Z",
                langSwitcherIndicator: "switcher_langSwitcherIndicator__6F8B4"
            }
        },
        225563: function(e) {
            e.exports = {
                tabsWrapper: "tabs_tabsWrapper__szdGn",
                hideBorder: "tabs_hideBorder__KB0di"
            }
        },
        815598: function(e) {
            e.exports = {
                tabs: "tabs_tabs__rJYVD",
                centered: "tabs_centered__Zh6B_",
                bold: "tabs_bold__CVov9",
                noBorder: "tabs_noBorder__SZUg4",
                tabContainer: "tabs_tabContainer___bdiV",
                disabled: "tabs_disabled__iApRF",
                tab: "tabs_tab__MRwiF",
                activeTab: "tabs_activeTab__L_G3G",
                tabIcon: "tabs_tabIcon__Oh2re",
                tabsSecondary: "tabs_tabsSecondary__b5gGt",
                tabSecondaryContainer: "tabs_tabSecondaryContainer__3weL8",
                activeSecondaryTabContainer: "tabs_activeSecondaryTabContainer__c75La",
                disabledSecondaryTabContainer: "tabs_disabledSecondaryTabContainer__xtlL1"
            }
        }
    }
]);