(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
	[0],
	{
		118: function (t, e, n) {},
		120: function (t, e, n) {},
		121: function (t, e, n) {
			'use strict';
			n.r(e);
			var r,
				a,
				s,
				i,
				c,
				o,
				A,
				u,
				l,
				g,
				j,
				d,
				h,
				O,
				b,
				m,
				C,
				p,
				E,
				f,
				w = n(3),
				x = n.n(w),
				B = n(63),
				Q = n.n(B),
				I = (n(67), n(93), n(16)),
				v = n(11),
				D = n(12),
				S = n(84),
				k = n(35),
				y = n(36),
				M = n(39),
				Y = n(38),
				N = n(6),
				G = n(1),
				U = (function (t) {
					Object(M.a)(n, t);
					var e = Object(Y.a)(n);
					function n() {
						return Object(k.a)(this, n), e.apply(this, arguments);
					}
					return (
						Object(y.a)(n, [
							{
								key: 'handleLogout',
								value: function (t, e) {
									localStorage.setItem('token', ''), t.resetStore(), e.push('/');
								},
							},
							{
								key: 'render',
								value: function () {
									var t = this;
									return Object(G.jsx)(N.ApolloConsumer, {
										children: function (e) {
											return Object(G.jsx)('a', {
												href: '/',
												onClick: function () {
													return t.handleLogout(e, t.props.history);
												},
												style: { cursor: 'pointer' },
												children: 'Logout',
											});
										},
									});
								},
							},
						]),
						n
					);
				})(w.Component),
				F = Object(D.g)(U),
				q = function () {
					return Object(G.jsx)('address', {
						children: Object(G.jsxs)('ul', {
							className: 'topnav',
							children: [
								Object(G.jsx)('li', {
									children: Object(G.jsx)(v.c, { to: '/', exact: !0, children: 'Home' }),
								}),
								Object(G.jsx)('li', {
									className: 'right',
									children: Object(G.jsx)(v.c, { to: '/signin', children: 'Login' }),
								}),
								Object(G.jsx)('li', {
									className: 'right',
									children: Object(G.jsx)(v.c, { to: '/signup', children: 'Register' }),
								}),
								Object(G.jsx)('li', {
									className: 'right',
									children: Object(G.jsx)(v.c, { to: '/about', children: 'About' }),
								}),
							],
						}),
					});
				},
				K = function () {
					return Object(G.jsx)('address', {
						children: Object(G.jsxs)('ul', {
							className: 'topnav',
							children: [
								Object(G.jsx)('li', {
									children: Object(G.jsx)(v.c, { to: '/', exact: !0, children: 'Home' }),
								}),
								Object(G.jsx)('li', { className: 'right', children: Object(G.jsx)(F, {}) }),
								Object(G.jsx)('li', {
									className: 'right',
									children: Object(G.jsx)(v.c, { to: '/about', children: 'About' }),
								}),
								Object(G.jsx)('li', {
									className: 'right',
									children: Object(G.jsx)(v.c, { to: '/add-entry', children: 'Add Entry' }),
								}),
							],
						}),
					});
				},
				J = function (t) {
					var e = t.session;
					return e && e.getCurrentUser ? Object(G.jsx)(K, {}) : Object(G.jsx)(q, {});
				},
				L = n(13),
				H = Object(N.gql)(
					r ||
						(r = Object(L.a)([
							'\n\tmutation signupUser($username: String!, $email: String!, $password: String!) {\n\t\tsignupUser(username: $username, email: $email, password: $password) {\n\t\t\ttoken\n\t\t}\n\t}\n',
						])),
				),
				R = Object(N.gql)(
					a ||
						(a = Object(L.a)([
							'\n\tmutation signinUser($username: String!, $password: String!) {\n\t\tsigninUser(username: $username, password: $password) {\n\t\t\ttoken\n\t\t}\n\t}\n',
						])),
				),
				T = Object(N.gql)(
					s ||
						(s = Object(L.a)([
							'\n\tquery getCoins {\n\t\tgetCoins {\n\t\t\tasset_id\n\t\t\tname\n\t\t\tprice_usd\n\t\t}\n\t}\n',
						])),
				),
				W =
					(Object(N.gql)(
						i ||
							(i = Object(L.a)([
								'\n\tquery getProfitOfEntry($date: String, $coin: String, $slug: String, $amount: Float) {\n\t\tgetProfitOfEntry(date: $date, coin: $coin, slug: $slug, amount: $amount)\n\t}\n',
							])),
					),
					Object(N.gql)(
						c || (c = Object(L.a)(['\n\tquery getTotalProfitOfUser {\n\t\tgetTotalProfitOfUser\n\t}\n'])),
					),
					Object(N.gql)(
						o ||
							(o = Object(L.a)([
								'\n\tquery getCurrentUser {\n\t\tgetCurrentUser {\n\t\t\temail\n\t\t\tusername\n\t\t\tentries {\n\t\t\t\tid\n\t\t\t\tdate\n\t\t\t\tslug\n\t\t\t\tcoin\n\t\t\t\tamount\n\t\t\t\tprofit\n\t\t\t}\n\t\t\ttotal\n\t\t}\n\t}\n',
							])),
					)),
				z =
					(Object(N.gql)(
						A ||
							(A = Object(L.a)([
								'\n\tquery getFeedQuery($cursor: String) {\n\t\tgetFeed(cursor: $cursor) {\n\t\t\tcursor\n\t\t\tstories {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\timageUrl\n\t\t\t\tcategory\n\t\t\t\tlikes\n\t\t\t\tauthor\n\t\t\t}\n\t\t}\n\t}\n',
							])),
					),
					Object(N.gql)(
						u ||
							(u = Object(L.a)([
								'\n\tquery getStoryQuery($id: ID!) {\n\t\tgetStory(id: $id) {\n\t\t\tid\n\t\t\ttitle\n\t\t\timageUrl\n\t\t\tdescription\n\t\t\tcategory\n\t\t\ttext\n\t\t\tcreatedAt\n\t\t\tlikes\n\t\t}\n\t}\n',
							])),
					),
					Object(N.gql)(
						l ||
							(l = Object(L.a)([
								'\n\tquery getUserStories($username: String!) {\n\t\tgetUserStories(username: $username) {\n\t\t\tid\n\t\t\ttitle\n\t\t\timageUrl\n\t\t\tdescription\n\t\t\tcategory\n\t\t\ttext\n\t\t\tcreatedAt\n\t\t\tlikes\n\t\t\tauthor\n\t\t}\n\t}\n',
							])),
					),
					Object(N.gql)(
						g ||
							(g = Object(L.a)([
								'\n\tquery getUserEntries($username: String!) {\n\t\tgetUserEntries(username: $username) {\n\t\t\tid\n\t\t\tdate\n\t\t\tcoin\n\t\t\tamount\n\t\t}\n\t}\n',
							])),
					),
					Object(N.gql)(
						j ||
							(j = Object(L.a)([
								'\n\tquery getStoriesByCategoryQuery($category: String!) {\n\t\tgetStoriesByCategory(category: $category) {\n\t\t\tid\n\t\t\ttitle\n\t\t\timageUrl\n\t\t\tdescription\n\t\t\tcategory\n\t\t\ttext\n\t\t\tcreatedAt\n\t\t\tlikes\n\t\t\tauthor\n\t\t}\n\t}\n',
							])),
					),
					Object(N.gql)(
						d ||
							(d = Object(L.a)([
								'\n\tquery searchStoriesQuery($searchText: String) {\n\t\tsearchStories(searchText: $searchText) {\n\t\t\tid\n\t\t\ttitle\n\t\t\timageUrl\n\t\t\tdescription\n\t\t\tcategory\n\t\t\ttext\n\t\t\tcreatedAt\n\t\t\tlikes\n\t\t\tauthor\n\t\t}\n\t}\n',
							])),
					),
					Object(N.gql)(
						h ||
							(h = Object(L.a)([
								'\n\tmutation setProfitOfUser($profits: [Float]) {\n\t\tsetProfitOfUser(profits: $profits)\n\t}\n',
							])),
					),
					Object(N.gql)(
						O ||
							(O = Object(L.a)([
								'\n\tmutation addEntryMutation($date: String!, $coin: String!, $slug: String!, $amount: Float!) {\n\t\taddEntry(date: $date, coin: $coin, slug: $slug, amount: $amount) {\n\t\t\tid\n\t\t\tdate\n\t\t\tcoin\n\t\t\tslug\n\t\t\tamount\n\t\t}\n\t}\n',
							])),
					)),
				P = Object(N.gql)(
					b ||
						(b = Object(L.a)([
							'\n\tmutation editEntryMutation($id: ID!, $date: String!, $coin: String!, $slug: String!, $amount: Float!) {\n\t\teditEntry(id: $id, date: $date, coin: $coin, slug: $slug, amount: $amount) {\n\t\t\tid\n\t\t\tdate\n\t\t\tcoin\n\t\t\tslug\n\t\t\tamount\n\t\t}\n\t}\n',
						])),
				),
				Z = Object(N.gql)(
					m ||
						(m = Object(L.a)([
							'\n\tmutation deleteEntryMutation($id: ID!) {\n\t\tdeleteEntry(id: $id) {\n\t\t\tid\n\t\t\tdate\n\t\t\tcoin\n\t\t\tslug\n\t\t\tamount\n\t\t}\n\t}\n',
						])),
				),
				V =
					(Object(N.gql)(
						C ||
							(C = Object(L.a)([
								'\n\tmutation addStoryMutation(\n\t\t$title: String!\n\t\t$category: String!\n\t\t$description: String!\n\t\t$text: String!\n\t\t$imageUrl: String!\n\t) {\n\t\taddStory(title: $title, description: $description, text: $text, imageUrl: $imageUrl, category: $category) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdescription\n\t\t\timageUrl\n\t\t\tcategory\n\t\t\ttext\n\t\t\tauthor\n\t\t\tcreatedAt\n\t\t}\n\t}\n',
							])),
					),
					Object(N.gql)(
						p ||
							(p = Object(L.a)([
								'\n\tmutation deleteStoryMutation($id: ID!) {\n\t\tdeleteStory(id: $id) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdescription\n\t\t\timageUrl\n\t\t\tcategory\n\t\t\ttext\n\t\t\tauthor\n\t\t\tcreatedAt\n\t\t}\n\t}\n',
							])),
					),
					Object(N.gql)(
						E ||
							(E = Object(L.a)([
								'\n\tmutation likeStoryMutation($id: ID!) {\n\t\tlikeStory(id: $id) {\n\t\t\tid\n\t\t\ttitle\n\t\t\timageUrl\n\t\t\tdescription\n\t\t\tcategory\n\t\t\ttext\n\t\t\tcreatedAt\n\t\t\tlikes\n\t\t}\n\t}\n',
							])),
					),
					Object(N.gql)(
						f ||
							(f = Object(L.a)([
								'\n\tmutation unlikeStoryMutation($id: ID!) {\n\t\tunlikeStory(id: $id) {\n\t\t\tid\n\t\t\ttitle\n\t\t\timageUrl\n\t\t\tdescription\n\t\t\tcategory\n\t\t\ttext\n\t\t\tcreatedAt\n\t\t\tlikes\n\t\t}\n\t}\n',
							])),
					),
					n(18)),
				X = n(27),
				$ = n.n(X),
				_ = n(15),
				tt =
					(n(117),
					n(118),
					function (t) {
						var e = t.id,
							n = Object(N.useMutation)(Z, { variables: { id: e }, refetchQueries: [{ query: W }] }),
							r = Object(V.a)(n, 1)[0];
						return Object(G.jsx)('span', { onClick: r, children: 'Delete' });
					});
			var et = function (t) {
					var e = t.entries,
						n = t.total;
					return Object(G.jsxs)(_.Table, {
						className: 'main-table',
						children: [
							Object(G.jsx)(_.Thead, {
								children: Object(G.jsxs)(_.Tr, {
									children: [
										Object(G.jsx)(_.Th, { children: 'Date' }),
										Object(G.jsx)(_.Th, { children: 'Coin' }),
										Object(G.jsx)(_.Th, { children: 'Amount' }),
										Object(G.jsx)(_.Th, { children: 'Profit' }),
										Object(G.jsx)(_.Th, {}),
									],
								}),
							}),
							Object(G.jsx)(_.Tbody, {
								children: e.map(function (t) {
									var e = t.id,
										n = t.date,
										r = t.coin,
										a = t.amount,
										s = t.profit,
										i = $()(+n).format('YYYY-MM-DD HH:mm:ss');
									return Object(G.jsxs)(
										_.Tr,
										{
											children: [
												Object(G.jsx)(_.Td, { children: i }),
												Object(G.jsx)(_.Td, { children: r }),
												Object(G.jsx)(_.Td, { children: a }),
												Object(G.jsx)(_.Td, { children: s }),
												Object(G.jsxs)(_.Td, {
													className: 'edit-delete-buttons',
													children: [
														Object(G.jsx)(v.b, {
															to: '/edit-entry/'.concat(e),
															children: 'Edit',
														}),
														' ',
														Object(G.jsx)(tt, { id: e }),
													],
												}),
											],
										},
										e,
									);
								}),
							}),
							Object(G.jsx)('tfoot', {
								children: Object(G.jsxs)('tr', {
									children: [
										Object(G.jsx)(_.Th, { children: 'Total' }),
										Object(G.jsx)('th', { children: n ? n + '$' : '' }),
									],
								}),
							}),
						],
					});
				},
				nt = function () {
					return Object(G.jsx)('div', {
						className: 'hp-loader-container',
						children: Object(G.jsx)('img', {
							src:
								'data:image/gif;base64,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',
							className: 'hp-loader',
						}),
					});
				},
				rt = function (t) {
					var e = t.status;
					return Object(G.jsxs)('div', {
						className: 'welcome',
						children: [
							Object(G.jsx)('h1', { children: 'Welcome to Profit Calculator' }),
							'LOGGED_OUT' === e &&
								Object(G.jsxs)(w.Fragment, {
									children: [
										Object(G.jsx)('p', {
											className: 'welcome-login-text',
											children: 'Please Login or Register',
										}),
										Object(G.jsxs)('p', {
											className: 'welcome-buttons',
											children: [
												Object(G.jsx)(v.b, { to: '/signin', children: 'Login' }),
												' ',
												Object(G.jsx)(v.b, { to: '/signup', children: 'Register' }),
											],
										}),
									],
								}),
							'NO_ENTRIES' === e &&
								Object(G.jsxs)(w.Fragment, {
									children: [
										Object(G.jsx)('p', {
											className: 'welcome-login-text',
											children: 'You do not have any entries yet',
										}),
										Object(G.jsx)('p', {
											className: 'welcome-login-text',
											children: 'Please add new entry',
										}),
										Object(G.jsx)('p', {
											className: 'welcome-buttons',
											children: Object(G.jsx)(v.b, {
												to: '/add-entry',
												className: 'add-entry',
												children: 'Add Entry',
											}),
										}),
									],
								}),
						],
					});
				},
				at = function (t) {
					var e = t.message,
						n = void 0 === e ? 'something went wrong...' : e;
					return Object(G.jsx)('p', { style: { color: 'red' }, children: n });
				},
				st = function (t) {
					t.session;
					var e = Object(N.useQuery)(W),
						n = e.loading,
						r = e.error,
						a = e.data;
					e.fetchMore, e.updateQuery, e.client;
					if (r) return Object(G.jsx)(at, { message: r.message });
					if (n) return Object(G.jsx)(nt, {});
					if (!a || !a.getCurrentUser) return Object(G.jsx)(rt, { status: 'LOGGED_OUT' });
					var s = a.getCurrentUser,
						i = s.entries,
						c = s.total;
					return 0 === i.length
						? Object(G.jsx)(rt, { status: 'NO_ENTRIES' })
						: Object(G.jsx)('div', {
								className: 'Home',
								children: Object(G.jsx)(et, { entries: i, total: c }),
						  });
				},
				it = n(28),
				ct = n.n(it),
				ot = n(37),
				At = n(40),
				ut = n(41),
				lt = n(42),
				gt = (function (t) {
					Object(M.a)(n, t);
					var e = Object(Y.a)(n);
					function n(t) {
						var r;
						return (
							Object(k.a)(this, n),
							((r = e.call(this, t)).state = { username: '', password: '', err: '' }),
							(r.handleChange = r.handleChange.bind(Object(ut.a)(r))),
							(r.validateForm = r.validateForm.bind(Object(ut.a)(r))),
							r
						);
					}
					return (
						Object(y.a)(n, [
							{
								key: 'handleChange',
								value: function (t) {
									var e;
									this.setState(
										((e = {}),
										Object(At.a)(e, t.target.name, t.target.value),
										Object(At.a)(e, 'err', ''),
										e),
									);
								},
							},
							{
								key: 'validateForm',
								value: function () {
									var t = this.state,
										e = t.username,
										n = t.password;
									return !e || !n;
								},
							},
							{
								key: 'render',
								value: function () {
									var t = this,
										e = this.state,
										n = e.username,
										r = e.password;
									return Object(G.jsx)('div', {
										className: 'App',
										children: Object(G.jsx)(lt.Mutation, {
											mutation: R,
											children: function (e, a) {
												a.data;
												var s = a.loading,
													i = a.error;
												return Object(G.jsxs)('form', {
													className: 'form',
													onSubmit: (function () {
														var a = Object(ot.a)(
															ct.a.mark(function a(s) {
																var i, c, o, A, u;
																return ct.a.wrap(function (a) {
																	for (;;)
																		switch ((a.prev = a.next)) {
																			case 0:
																				return (
																					s.preventDefault(),
																					(a.next = 3),
																					e({
																						variables: {
																							username: n,
																							password: r,
																						},
																					}).catch(function (e) {
																						t.setState({ err: e.message });
																					})
																				);
																			case 3:
																				if (
																					!(null === (o = a.sent) ||
																					void 0 === o ||
																					null === (i = o.data) ||
																					void 0 === i ||
																					null === (c = i.signinUser) ||
																					void 0 === c
																						? void 0
																						: c.token)
																				) {
																					a.next = 10;
																					break;
																				}
																				return (
																					localStorage.setItem(
																						'token',
																						null === o ||
																							void 0 === o ||
																							null === (A = o.data) ||
																							void 0 === A ||
																							null ===
																								(u = A.signinUser) ||
																							void 0 === u
																							? void 0
																							: u.token,
																					),
																					(a.next = 8),
																					t.props.refetch()
																				);
																			case 8:
																				t.setState({
																					username: '',
																					password: '',
																				}),
																					t.props.history.push('/');
																			case 10:
																			case 'end':
																				return a.stop();
																		}
																}, a);
															}),
														);
														return function (t) {
															return a.apply(this, arguments);
														};
													})(),
													children: [
														Object(G.jsx)('h2', { children: 'Sign In' }),
														Object(G.jsx)('input', {
															type: 'text',
															name: 'username',
															placeholder: 'Username',
															value: n,
															onChange: t.handleChange,
														}),
														Object(G.jsx)('input', {
															type: 'password',
															name: 'password',
															placeholder: 'Password',
															value: r,
															onChange: t.handleChange,
														}),
														Object(G.jsx)('button', {
															type: 'submit',
															disabled: s || t.validateForm(),
															children: 'Submit',
														}),
														i ? Object(G.jsx)(at, { message: t.state.err }) : '',
													],
												});
											},
										}),
									});
								},
							},
						]),
						n
					);
				})(w.Component),
				jt = Object(D.g)(gt),
				dt = (function (t) {
					Object(M.a)(n, t);
					var e = Object(Y.a)(n);
					function n(t) {
						var r;
						return (
							Object(k.a)(this, n),
							((r = e.call(this, t)).state = {
								username: '',
								email: '',
								password: '',
								password2: '',
								err: '',
							}),
							(r.handleChange = r.handleChange.bind(Object(ut.a)(r))),
							(r.validateForm = r.validateForm.bind(Object(ut.a)(r))),
							r
						);
					}
					return (
						Object(y.a)(n, [
							{
								key: 'handleChange',
								value: function (t) {
									var e;
									this.setState(
										((e = {}),
										Object(At.a)(e, t.target.name, t.target.value),
										Object(At.a)(e, 'err', ''),
										e),
									);
								},
							},
							{
								key: 'validateForm',
								value: function () {
									var t = this.state,
										e = t.username,
										n = t.email,
										r = t.password,
										a = t.password2;
									return !e || !n || !r || !a || a !== r;
								},
							},
							{
								key: 'render',
								value: function () {
									var t = this,
										e = this.state,
										n = e.username,
										r = e.email,
										a = e.password,
										s = e.password2;
									return Object(G.jsxs)('div', {
										className: 'content',
										children: [
											Object(G.jsx)('h2', { children: 'Register' }),
											Object(G.jsx)(lt.Mutation, {
												mutation: H,
												children: function (e, i) {
													var c = i.data,
														o = i.loading,
														A = i.error;
													return Object(G.jsxs)('form', {
														className: 'form',
														onSubmit: (function () {
															var s = Object(ot.a)(
																ct.a.mark(function s(i) {
																	return ct.a.wrap(
																		function (s) {
																			for (;;)
																				switch ((s.prev = s.next)) {
																					case 0:
																						return (
																							i.preventDefault(),
																							(s.prev = 1),
																							(s.next = 4),
																							e({
																								variables: {
																									username: n,
																									password: a,
																									email: r,
																								},
																							})
																						);
																					case 4:
																						s.sent, (s.next = 10);
																						break;
																					case 7:
																						(s.prev = 7),
																							(s.t0 = s.catch(1)),
																							t.setState({
																								err: s.t0.message,
																							});
																					case 10:
																						if (!c) {
																							s.next = 16;
																							break;
																						}
																						return (
																							localStorage.setItem(
																								'token',
																								c.signupUser.token,
																							),
																							(s.next = 14),
																							t.props.refetch()
																						);
																					case 14:
																						t.setState({
																							email: '',
																							password: '',
																							password2: '',
																							username: '',
																						}),
																							t.props.history.push('/');
																					case 16:
																					case 'end':
																						return s.stop();
																				}
																		},
																		s,
																		null,
																		[[1, 7]],
																	);
																}),
															);
															return function (t) {
																return s.apply(this, arguments);
															};
														})(),
														children: [
															Object(G.jsx)('input', {
																type: 'text',
																value: n,
																onChange: t.handleChange,
																placeholder: 'Username',
																name: 'username',
															}),
															Object(G.jsx)('input', {
																type: 'text',
																value: r,
																onChange: t.handleChange,
																placeholder: 'Email',
																name: 'email',
															}),
															Object(G.jsx)('input', {
																type: 'password',
																value: a,
																onChange: t.handleChange,
																placeholder: 'Password',
																name: 'password',
															}),
															Object(G.jsx)('input', {
																type: 'password',
																value: s,
																onChange: t.handleChange,
																placeholder: 'Repeat password',
																name: 'password2',
															}),
															Object(G.jsx)('button', {
																type: 'submit',
																disabled: o || t.validateForm(),
																children: 'Submit',
															}),
															A ? Object(G.jsx)(at, { message: t.state.err }) : '',
														],
													});
												},
											}),
										],
									});
								},
							},
						]),
						n
					);
				})(w.Component),
				ht = Object(D.g)(dt),
				Ot = n(57),
				bt = n.n(Ot),
				mt =
					(n(82),
					function (t) {
						return function (e) {
							return function (n) {
								var r = Object(N.useQuery)(W),
									a = r.data;
								return r.loading
									? Object(G.jsx)('div', { children: 'Loading...' })
									: t(a)
									? Object(G.jsx)(e, Object(I.a)({}, n))
									: Object(G.jsx)(D.a, { to: '/' });
							};
						};
					}),
				Ct =
					(n(120),
					(function (t) {
						Object(M.a)(n, t);
						var e = Object(Y.a)(n);
						function n(t) {
							var r;
							if (
								(Object(k.a)(this, n),
								((r = e.call(this, t)).updateParentWithSelectedCoin = function (t, e) {
									r.props.onClick && r.props.onClick(t, e);
								}),
								(r.onChange = function (t) {
									var e = r.props.suggestions,
										n = t.currentTarget.value,
										a = e
											.filter(function (t) {
												return t.asset_id && t.name;
											})
											.filter(function (t) {
												var e = t.asset_id;
												return (t.name + e).toLowerCase().indexOf(n.toLowerCase()) > -1;
											});
									r.setState({
										activeSuggestion: 0,
										filteredSuggestions: a,
										showSuggestions: !0,
										userInput: t.currentTarget.value,
									});
								}),
								(r.onFocus = function (t) {
									r.setState({ showSuggestions: !0 });
								}),
								(r.onBlur = function (t) {
									r.setState({ showSuggestions: !1 });
								}),
								(r.onClick = function (t, e, n) {
									r.setState(
										{
											activeSuggestion: 0,
											filteredSuggestions: [],
											showSuggestions: !1,
											userInput: t,
											name: t,
											asset_id: e,
										},
										r.updateParentWithSelectedCoin(t, e),
									);
								}),
								(r.onKeyDown = function (t) {
									var e = r.state,
										n = e.activeSuggestion,
										a = e.filteredSuggestions,
										s = e.name,
										i = void 0 === s ? '' : s;
									e.asset_id;
									if (13 === t.keyCode) {
										t.preventDefault(), t.stopPropagation();
										var c = a[n].split(','),
											o = Object(V.a)(c, 2),
											A = o[0],
											u = o[1];
										r.setState(
											{
												activeSuggestion: 0,
												showSuggestions: !1,
												userInput: A,
												name: A,
												asset_id: u,
											},
											r.updateParentWithSelectedCoin(A, u),
										);
									} else if (38 === t.keyCode) {
										if (0 === n) return;
										r.setState({ activeSuggestion: n - 1 });
									} else if (40 === t.keyCode) {
										if (n - 1 === a.length) return;
										r.setState({ activeSuggestion: n + 1 });
									} else
										27 === t.keyCode &&
											r.setState({ activeSuggestion: 0, showSuggestions: !1, userInput: i });
								}),
								(r.state = {
									activeSuggestion: 0,
									filteredSuggestions: [],
									showSuggestions: !1,
									userInput: t.defaultCoin || '',
								}),
								t.defaultCoin)
							) {
								var a = n.getCoinBySelectedText(t.suggestions, t.defaultCoin),
									s = a.name,
									i = a.asset_id;
								r.updateParentWithSelectedCoin(s, i);
							}
							return r;
						}
						return (
							Object(y.a)(n, [
								{
									key: 'render',
									value: function () {
										var t,
											e = this,
											n = this.onChange,
											r = this.onClick,
											a = this.onKeyDown,
											s = this.state,
											i = s.activeSuggestion,
											c = s.filteredSuggestions,
											o = s.showSuggestions,
											A = s.userInput;
										return (
											o &&
												A &&
												(t = c.length
													? Object(G.jsx)('ul', {
															className: 'suggestions',
															children: c.map(function (t, n) {
																var a = null,
																	s = t.name,
																	c = t.asset_id;
																return (
																	n === i && (a = 'marked'),
																	Object(G.jsxs)(
																		'li',
																		{
																			asset_id: c,
																			name: s,
																			className: a,
																			onClick: r.bind(e, s, c),
																			children: [s, ' - (', c, ')'],
																		},
																		c,
																	)
																);
															}),
													  })
													: Object(G.jsx)('div', {
															className: 'no-suggestions',
															children: Object(G.jsx)('em', {
																children: 'No suggestions',
															}),
													  })),
											Object(G.jsxs)(x.a.Fragment, {
												children: [
													Object(G.jsx)('input', {
														placeholder: 'Coin',
														className: 'search',
														onChange: n,
														onKeyDown: a,
														value: A,
														required: !0,
													}),
													t,
												],
											})
										);
									},
								},
							]),
							n
						);
					})(w.Component));
			Ct.getCoinBySelectedText = function () {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
					e = arguments.length > 1 ? arguments[1] : void 0,
					n = t.map(function (t) {
						var e;
						return null === t || void 0 === t || null === (e = t.name) || void 0 === e
							? void 0
							: e.toLowerCase();
					}),
					r = n.indexOf(e.toLowerCase());
				return t[r];
			};
			var pt = function (t) {
				var e = Object(N.useQuery)(T),
					n = e.loading,
					r = (e.error, e.data);
				e.fetchMore;
				return n || !r
					? Object(G.jsx)('div', { children: 'Loading...' })
					: Object(G.jsx)('div', {
							className: 'autocomplete-wrapper',
							children: Object(G.jsx)(Ct, Object(I.a)({ suggestions: r.getCoins }, t)),
					  });
			};
			var Et = mt(function (t) {
				return t && t.getCurrentUser;
			})(
				Object(D.g)(function (t) {
					t.session;
					var e = t.history,
						n = t.refetch,
						r = Object(w.useState)(''),
						a = Object(V.a)(r, 2),
						s = a[0],
						i = a[1],
						c = Object(w.useState)(''),
						o = Object(V.a)(c, 2),
						A = o[0],
						u = o[1],
						l = Object(w.useState)(''),
						g = Object(V.a)(l, 2),
						j = g[0],
						d = g[1],
						h = Object(w.useState)(''),
						O = Object(V.a)(h, 2),
						b = O[0],
						m = O[1],
						C = { date: s, coin: A, slug: j, amount: b },
						p = (function () {
							var t = Object(ot.a)(
								ct.a.mark(function t(r, a) {
									return ct.a.wrap(function (t) {
										for (;;)
											switch ((t.prev = t.next)) {
												case 0:
													return r.preventDefault(), (t.next = 3), a();
												case 3:
													return t.sent, (t.next = 6), n();
												case 6:
													e.push('/');
												case 7:
												case 'end':
													return t.stop();
											}
									}, t);
								}),
							);
							return function (e, n) {
								return t.apply(this, arguments);
							};
						})(),
						E = function (t, e) {
							var n = null,
								r = !1;
							switch (t) {
								case 'date':
									(n = i), (r = !0);
									break;
								case 'amount':
									n = m;
							}
							if (r) {
								if (!e.isValid() || !e.isBefore($.a.now())) return !1;
								e = e.format('YYYY-MM-DD HH:mm:ss');
							}
							return n && n(e);
						},
						f = Object(N.useMutation)(z, {
							variables: Object(I.a)(Object(I.a)({}, C), {}, { amount: parseFloat(b) }),
							refetchQueries: [{ query: W }],
						}),
						x = Object(V.a)(f, 2),
						B = x[0],
						Q = x[1],
						v = (Q.data, Q.loading, Q.error);
					return Object(G.jsx)('div', {
						className: 'App',
						children: Object(G.jsxs)('form', {
							className: 'form',
							onSubmit: function (t) {
								return p(t, B);
							},
							children: [
								Object(G.jsx)('h2', { children: 'Add Entry' }),
								Object(G.jsxs)('div', {
									className: 'date-wrapper',
									children: [
										Object(G.jsx)(bt.a, {
											dateFormat: 'YYYY-MM-DD',
											timeFormat: 'HH:mm:ss',
											defaultValue: s || '',
											value: s,
											inputProps: {
												className: 'form-control',
												placeholder: 'Date',
												required: !0,
											},
											isValidDate: function (t) {
												return t.isBefore($.a.now());
											},
											onChange: function (t) {
												return E('date', t);
											},
										}),
										Object(G.jsx)('button', {
											className: 'now-btn',
											onClick: function (t) {
												return t.preventDefault(), i($()().format('YYYY-MM-DD HH:mm:ss')), !1;
											},
											children: 'Now',
										}),
									],
								}),
								Object(G.jsx)(pt, {
									onClick: function (t, e) {
										u(t), d(e);
									},
								}),
								Object(G.jsx)('input', {
									type: 'text',
									placeholder: 'Amount',
									name: 'amount',
									value: b,
									required: !0,
									className: 'add-entry-amount',
									onChange: function (t) {
										return E('amount', t.target.value);
									},
								}),
								Object(G.jsx)('button', { type: 'submit', disabled: !1, children: 'Submit' }),
								v ? Object(G.jsx)(at, { message: v.message }) : '',
							],
						}),
					});
				}),
			);
			var ft = mt(function (t) {
					return t && t.getCurrentUser;
				})(
					Object(D.g)(function (t) {
						var e = t.session,
							n = t.history,
							r = t.match.params.id,
							a = e.getCurrentUser.entries.find(function (t) {
								return t.id === r;
							}),
							s = Object(w.useState)($()(+a.date).format('YYYY-MM-DD HH:mm:ss')),
							i = Object(V.a)(s, 2),
							c = i[0],
							o = i[1],
							A = Object(w.useState)(a.coin),
							u = Object(V.a)(A, 2),
							l = u[0],
							g = u[1],
							j = Object(w.useState)(a.slug),
							d = Object(V.a)(j, 2),
							h = d[0],
							O = d[1],
							b = Object(w.useState)(a.amount),
							m = Object(V.a)(b, 2),
							C = m[0],
							p = m[1],
							E = { id: r, date: c, coin: l, slug: h, amount: C },
							f = (function () {
								var t = Object(ot.a)(
									ct.a.mark(function t(e, r) {
										return ct.a.wrap(
											function (t) {
												for (;;)
													switch ((t.prev = t.next)) {
														case 0:
															return e.preventDefault(), (t.prev = 1), (t.next = 4), r();
														case 4:
															t.sent, (t.next = 9);
															break;
														case 7:
															(t.prev = 7), (t.t0 = t.catch(1));
														case 9:
															n.push('/');
														case 10:
														case 'end':
															return t.stop();
													}
											},
											t,
											null,
											[[1, 7]],
										);
									}),
								);
								return function (e, n) {
									return t.apply(this, arguments);
								};
							})(),
							x = function (t, e) {
								var n = null,
									r = !1;
								switch (t) {
									case 'date':
										(n = o), (r = !0);
										break;
									case 'amount':
										n = p;
								}
								if (r) {
									if (!e.isValid() || !e.isBefore($.a.now())) return !1;
									e = e.format('YYYY-MM-DD HH:mm:ss');
								}
								return n && n(e);
							},
							B = Object(N.useMutation)(P, {
								variables: Object(I.a)(Object(I.a)({}, E), {}, { amount: parseFloat(C) }),
								refetchQueries: [{ query: W }],
							}),
							Q = Object(V.a)(B, 2),
							v = Q[0],
							D = Q[1],
							S = (D.data, D.loading, D.error);
						return (
							D.client,
							Object(G.jsx)('div', {
								className: 'App',
								children: Object(G.jsxs)('form', {
									className: 'form',
									onSubmit: function (t) {
										return f(t, v);
									},
									children: [
										Object(G.jsx)('h2', { children: 'Edit Entry' }),
										Object(G.jsxs)('div', {
											className: 'date-wrapper',
											children: [
												Object(G.jsx)(bt.a, {
													dateFormat: 'YYYY-MM-DD',
													timeFormat: 'HH:mm:ss',
													defaultValue: c || '',
													value: c,
													inputProps: {
														className: 'form-control',
														placeholder: 'Date',
														required: !0,
													},
													isValidDate: function (t) {
														return t.isBefore($.a.now());
													},
													onChange: function (t) {
														return x('date', t);
													},
												}),
												Object(G.jsx)('button', {
													className: 'now-btn',
													onClick: function (t) {
														return (
															t.preventDefault(),
															o($()().format('YYYY-MM-DD HH:mm:ss')),
															!1
														);
													},
													children: 'Now',
												}),
											],
										}),
										Object(G.jsx)(pt, {
											defaultCoin: l,
											onClick: function (t, e) {
												g(t), O(e);
											},
										}),
										Object(G.jsx)('input', {
											type: 'text',
											placeholder: 'Amount',
											name: 'amount',
											value: C,
											required: !0,
											className: 'add-entry-amount',
											onChange: function (t) {
												return x('amount', t.target.value);
											},
										}),
										Object(G.jsx)('button', { type: 'submit', disabled: !1, children: 'Submit' }),
										S ? Object(G.jsx)(at, { message: S.message }) : '',
									],
								}),
							})
						);
					}),
				),
				wt = function () {
					return Object(G.jsxs)('div', {
						className: 'about',
						children: [
							Object(G.jsx)('h1', { children: 'Profit Calculator' }),
							Object(G.jsx)('p', { children: 'Checks the current profit (or lost)' }),
							Object(G.jsx)('p', { children: 'of your crypto coins transactions, in USD' }),
							Object(G.jsx)('p', {}),
							Object(G.jsx)('p', { children: 'Written by Niv Zilberman' }),
							Object(G.jsx)('p', {
								children: Object(G.jsx)('a', {
									href: 'mailto:niv.zilberman@gmail.com',
									target: '_top',
									children: 'niv.zilberman@gmail.com',
								}),
							}),
						],
					});
				},
				xt = function (t) {
					return function (e) {
						var n = Object(N.useQuery)(W),
							r = n.data,
							a = n.loading,
							s = n.refetch;
						return a
							? Object(G.jsx)(nt, {})
							: Object(G.jsx)(t, Object(I.a)(Object(I.a)({}, e), {}, { refetch: s, session: r }));
					};
				},
				Bt = n(88);
			localStorage.getItem('token') &&
				Date.now() / 1e3 > Object(S.a)(localStorage.getItem('token')).exp &&
				localStorage.removeItem('token');
			var Qt = Object(N.createHttpLink)({ uri: '/graphql' }),
				It = Object(Bt.a)(function (t, e) {
					var n = e.headers,
						r = localStorage.getItem('token');
					return {
						headers: Object(I.a)(Object(I.a)({}, n), {}, { authorization: r ? 'Bearer '.concat(r) : '' }),
					};
				}),
				vt = new N.ApolloClient({
					link: It.concat(Qt),
					uri: window.location.origin,
					cache: new N.InMemoryCache(),
				}),
				Dt = xt(function (t) {
					var e = t.session,
						n = t.refetch;
					return Object(G.jsx)(v.a, {
						children: Object(G.jsxs)(w.Fragment, {
							children: [
								Object(G.jsx)(J, { session: e }),
								Object(G.jsxs)(D.d, {
									children: [
										Object(G.jsx)(D.b, {
											exact: !0,
											path: '/',
											render: function () {
												return Object(G.jsx)(st, { session: e });
											},
										}),
										Object(G.jsx)(D.b, {
											path: '/signin',
											render: function () {
												return Object(G.jsx)(jt, { refetch: n });
											},
										}),
										Object(G.jsx)(D.b, {
											path: '/signup',
											render: function () {
												return Object(G.jsx)(ht, { refetch: n });
											},
										}),
										Object(G.jsx)(D.b, { path: '/about', component: wt }),
										Object(G.jsx)(D.b, {
											path: '/add-entry',
											render: function () {
												return Object(G.jsx)(Et, { session: e, refetch: n });
											},
										}),
										Object(G.jsx)(D.b, {
											path: '/edit-entry/:id',
											render: function () {
												return Object(G.jsx)(ft, { session: e });
											},
										}),
									],
								}),
							],
						}),
					});
				});
			console.log('production');
			var St = function () {
				return Object(G.jsx)(N.ApolloProvider, { client: vt, children: Object(G.jsx)(Dt, {}) });
			};
			var kt = function () {
				return Object(G.jsxs)('div', {
					className: 'App',
					children: [
						Object(G.jsx)('header', {
							className: 'App-header',
							children: Object(G.jsx)('p', { children: 'Profit Calculator' }),
						}),
						Object(G.jsx)(St, {}),
					],
				});
			};
			Q.a.render(Object(G.jsx)(kt, {}), document.getElementById('root'));
		},
		67: function (t, e, n) {},
		82: function (t, e, n) {},
		93: function (t, e, n) {},
	},
	[[121, 1, 2]],
]);
//# sourceMappingURL=main.da1e76a3.chunk.js.map
