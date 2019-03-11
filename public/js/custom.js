function labnolThumb(n) {
    return '<img src="https://ckj-main-ai.azureedge.net/media/Default/Cekaja/img-loader.png" data-srcset="https://ckj-main-ai.azureedge.net/media/Default/Cekaja/img-loader.png" srcset="https://ckj-main-ai.azureedge.net/media/Default/Cekaja/img-loader.png" class="lazyload youtube-preview">'.replace('srcset="https://ckj-main-ai.azureedge.net/media/Default/Cekaja/img-loader.png"', 'srcset="https://i.ytimg.com/vi/' + n + '/hqdefault.jpg"') + '<div class="play"><\/div>'
}

function labnolIframe() {
    var n = document.createElement("iframe");
    n.setAttribute("src", "https://www.youtube.com/embed/ID?autoplay=1".replace("ID", this.dataset.id));
    n.setAttribute("frameborder", "0");
    n.setAttribute("allowfullscreen", "1");
    this.parentNode.replaceChild(n, this)
}

function shuffleLogos(n) {
    for (var t = n.length, r, i; 0 !== t;) i = Math.floor(Math.random() * t), t -= 1, r = n[t], n[t] = n[i], n[i] = r;
    return n
}

function buildTemplate(n) {
    var t = document.createElement("li");
    return $(t).html("<a><\/a>").attr("href", n.url || "#").html('<img src="https://ckjorchardmedia.blob.core.windows.net/media/Default/Cekaja/img-loader.png"            class="lazyload"            data-srcset="https://ckjorchardmedia.blob.core.windows.net/media/Default/Cekaja/' + n.filename + ".png 1x,            https://ckjorchardmedia.blob.core.windows.net/media/Default/Cekaja/" + n.filename + '.png 2x"            width=""            height="134"            alt="' + n.name + '"/>'), t
}

function CampaignModel(n, t, i, r, u) {
    var f = {};
    return f.utm_source = n != null ? n : null, f.utm_medium = t != null ? t : null, f.utm_term = i != null ? i : null, f.utm_content = r != null ? r : null, f.utm_campaign = u != null ? u : null, f
}
var calendar, contactmodal, contactmerequest, ga_tracker, gallery, isotope, carousel, populateCarousel, PartnerCarousel, portal, quiz, range, URL_AffiliateServiceApi, requestorder, result, scrollcheck, tvinternet, wizard;
(function() {
    function u(n, t) {
        var i;
        return window.isNaN(n) ? null : n < 1e3 ? n : (n < 1e4 && (t = 1), i = Math.floor(Math.log(n) / Math.log(1e3)), (n / Math.pow(1e3, i)).toFixed(t) + ["k", "M", "G", "T", "P", "E"][i - 1])
    }

    function t(n, t) {
        for (var i = 0; i < n.length; i++) t(n[i], i)
    }

    function c(r, f) {
        var o = new XMLHttpRequest;
        o.open("GET", e + r, !0);
        o.onreadystatechange = function() {
            if (this.readyState === 4)
                if (this.status >= 200 && this.status < 400) {
                    var r = JSON.parse(this.responseText);
                    r.share && r.share.share_count && t(f, function(t) {
                        n(t, u(r.share.share_count, 0))
                    })
                } else t(f, function(t) {
                    n(t, i)
                })
        };
        o.send();
        o = null
    }

    function l(f, e) {
        var o = new XMLHttpRequest;
        o.open("GET", s + f, !0);
        o.onreadystatechange = function() {
            if (this.readyState === 4)
                if (this.status >= 200 && this.status < 400) {
                    var o = JSON.parse(this.responseText);
                    r[f].gplus = o.count;
                    t(e, function(t) {
                        n(t, u(o.count == "" ? "0" : o.count, 0))
                    })
                } else t(e, function(t) {
                    n(t, i)
                })
        };
        o.send();
        o = null
    }

    function a(i, f) {
        function h() {
            for (var n = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", i = 0; i < 5; i++) n += t.charAt(Math.floor(Math.random() * t.length));
            return n
        }
        var e = document.createElement("script"),
            s = "liupdate" + h();
        e.src = o + i + "&callback=" + s;
        document.body.appendChild(e);
        window[s] = function(o) {
            r[i].linkedin = o.count;
            t(f, function(t) {
                n(t, u(o.count, 0))
            });
            e.remove();
            window[s] = undefined
        }
    }

    function n(n, t) {
        n.textContent !== undefined ? n.textContent = t : n.innerText = t
    }
    var e = "https://graph.facebook.com/?id=",
        o = "https://www.linkedin.com/countserv/count/share?format=jsonp&url=",
        s = "/extern/gplus-count?url=",
        h = "/extern/sharecount?url=",
        i = "-",
        f = document.querySelectorAll(".widget.share-widget"),
        r = {};
    f.length < 1 || (t(f, function(n) {
        var t = n.getAttribute("data-url");
        typeof r[t] == "undefined" && (r[t] = {}, c(t, document.querySelectorAll(".widget.share-widget[data-url='" + t + "'] .share-facebook span")), l(t, document.querySelectorAll(".widget.share-widget[data-url='" + t + "'] .share-google span")), a(t, document.querySelectorAll(".widget.share-widget[data-url='" + t + "'] .share-linkedin span")))
    }), "remove" in Element.prototype || (Element.prototype.remove = function() {
        this.parentNode && this.parentNode.removeChild(this)
    }))
})(),
function(n, t, i, r) {
    function u(t, i) {
        this.element = t;
        this.container = n(n(t).data("target"));
        this.form = n(this.container).find("form");
        this.options = n.extend({}, o, i);
        this._defaults = o;
        this._name = e;
        this.initialB2B = n(this.form).data("affiliate");
        this.initialCompany = n(this.form).data("company");
        this.initialVerticalId = n(this.form).data("verticalid");
        this.initialVertical = n(this.form).data("vertical");
        this.initFigureImage = n("figure.cover-photo", n(this.container)).css("background-image");
        this.init()
    }

    function s() {
        i.PortalName == "ECM" && n(i).ready(function() {
            var i = n("#birthdayMonth"),
                t = n("#birthdayDay"),
                r = n("#birthdayYear"),
                u = n("#birthdatedropdown");
            u.val(i.val() + "/" + t.val() + "/" + r.val());
            i.change(function() {
                u.val(i.val() + "/" + t.val() + "/" + r.val());
                i.val() == "02" ? (t.find("[value=30]").hide(), t.find("[value=31]").hide()) : i.val() == "04" || i.val() == "06" || i.val() == "09" || i.val() == "11" ? (t.find("[value=30]").show(), t.find("[value=31]").hide()) : (t.find("[value=30]").show(), t.find("[value=31]").show())
            });
            t.change(function() {
                u.val(i.val() + "/" + t.val() + "/" + r.val())
            });
            r.change(function() {
                u.val(i.val() + "/" + t.val() + "/" + r.val())
            })
        })
    }

    function h() {
        i.PortalName == "ECM" && n("#schedule-income-ofw").length > 0 ? (n("#schedule-income-ofw").each(function() {
            var t = n(this);
            n(this).val().length && n(this).val(n(this).val().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
        }), n("#schedule-income-ofw").bind("keyup", function(t) {
            t.which >= 37 && t.which <= 40 || n(this).val(function(n, t) {
                return t.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            })
        })) : i.PortalName == "CKJ" && n("#schedule-income").length > 0 && (n("#schedule-income").each(function() {
            var t = n(this);
            n(this).val().length && n(this).val(n(this).val().replace(/\B(?=(\d{3})+(?!\d))/g, "."))
        }), n("#schedule-income").bind("keyup", function(t) {
            t.which >= 37 && t.which <= 40 || n(this).val(function(n, t) {
                return t.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            })
        }))
    }

    function c(t, r, u) {
        var e = n("#schedule-consent"),
            f = n("label[for=schedule-consent]");
        if (i.PortalName == "ECM") {
            n(".schedule-consent").remove();
            n(".schedule-consent-secondary").remove();
            switch (parseInt(t)) {
                case 1:
                case 2:
                case 3:
                case 6:
                case 7:
                case 10:
                    f.html("I allow eCompareMo to collect and store my personal information - including but not limited to my name, address, phone number, email, etc., as supplied for transactions on this website.Transactions may include cookie placement, personalized offers, enrollment in its newsletter and others - updated in and without prejudice to its <a href='https://www.ecomparemo.com/terms-conditions' target='_blank'>Terms and Conditions<\/a> and <a href='https://www.ecomparemo.com/privacy-policy' target='_blank'>Privacy Policy<\/a>.The use of my information shall be in accordance with applicable laws.My information will only be revealed to authorized third party partners of eCompareMo.I also authorize the financial institution to share with eCompareMo the status of my application, final credit decision and details of the account, if approved.");
                    break;
                case 4:
                case 5:
                case 8:
                case 9:
                case 11:
                    f.html("I allow eCompareMo to collect, store and process my personal information - including but not limited to my name, address, phone number, email, etc., as supplied for transactions on this website. Transactions may include cookie placement, personalized offers, enrollment in its newsletter and others. The use and processing of my information shall be in accordance with applicable laws and eCompareMo’s <a href='https://www.ecomparemo.com/terms-conditions' target='_blank'>Terms and Conditions<\/a> and <a href='https://www.ecomparemo.com/privacy-policy' target='_blank'>Privacy Policy<\/a>, which I confirm to have read and understood.");
                    break;
                default:
                    f.html("I allow eCompareMo to collect and store my personal information - including but not limited to my name, address, phone number, email, etc., as supplied for transactions on this website.Transactions may include cookie placement, personalized offers, enrollment in its newsletter and others - updated in and without prejudice to its <a href='https://www.ecomparemo.com/terms-conditions' target='_blank'>Terms and Conditions<\/a> and <a href='https://www.ecomparemo.com/privacy-policy' target='_blank'>Privacy Policy<\/a>.The use of my information shall be in accordance with applicable laws.My information will only be revealed to authorized third party partners of eCompareMo.I also authorize the financial institution to share with eCompareMo the status of my application, final credit decision and details of the account, if approved.")
            }
            switch (r) {
                case "asia-united-bank-corporation":
                    f.html("By using this website and by filling out this form, you agree that the details you provide including but not limited to your name, mailing address, phone number, email address and other information, personal or otherwise will be collected and stored by us in order for us to process your quotation or application. The use of the information shall be in accordance with applicable laws, rules and regulations of the Republic of the Philippines. If you decide to submit an application to the Bank, the information shall be disclosed to such Bank alone. You also authorize the Bank to share with eCompareMo the status of your application, final credit decision and date of approval, if approved. No pertinent information shall be revealed to any third party without your explicit consent. eCompareMo assumes full responsibility for damage/s arising from breach of its confidentiality obligations. This disclaimer shall be without prejudice to the application of the Terms and Conditions of eCompareMo.");
                    break;
                case "dengue-insurance":
                    f.html("By using this website and by filling out this form, you agree that the details you provide including but not limited to your name, mailing address, phone number, email address and other information, personal or otherwise, will be collected and stored by us in order for us to process your quotation or application. The use of the information shall be in accordance with applicable laws, rules and regulations of the Republic of the Philippines. No information shall be revealed to any third party without your explicit consent. This disclaimer shall be without prejudice to the application of the Terms and Conditions of eCompareMo.")
            }
            parseInt(t) == 1 && (r == "bdo" || r == "fuse-lending" || r == "city-savings" || r == "rcbc" || r == "hsbc" || r == "maybank" || r == "plantersbank" || r == "security-bank" || r == "standard-chartered" || r == "ucpb" || r == "equicom" || r == "chinatrust" || r == "pbcom") ? f.html("I allow eCompareMo to collect and store my personal information - including but not limited to my name, address, phone number, email, etc., as supplied for transactions on this website.Transactions may include cookie placement, personalized offers, enrollment in its newsletter and others - updated in and without prejudice to its <a href='https://www.ecomparemo.com/terms-conditions' target='_blank'>Terms and Conditions<\/a> and <a href='https://www.ecomparemo.com/privacy-policy' target='_blank'>Privacy Policy<\/a>.The use of my information shall be in accordance with applicable laws. My information will only be revealed to authorized third party partners of eCompareMo.") : parseInt(t) == 2 && (r == "bdo" || r == "maybank" || r == "pnb" || r == "rcbc" || r == "security-bank" || r == "unionbank" || r == "equicom") ? f.html("I allow eCompareMo to collect and store my personal information - including but not limited to my name, address, phone number, email, etc., as supplied for transactions on this website.Transactions may include cookie placement, personalized offers, enrollment in its newsletter and others - updated in and without prejudice to its <a href='https://www.ecomparemo.com/terms-conditions' target='_blank'>Terms and Conditions<\/a> and <a href='https://www.ecomparemo.com/privacy-policy' target='_blank'>Privacy Policy<\/a>.The use of my information shall be in accordance with applicable laws. My information will only be revealed to authorized third party partners of eCompareMo.") : parseInt(t) == 3 && (r == "bdo" || r == "maybank" || r == "metrobank" || r == "pbcom" || r == "pnb" || r == "rcbc" || r == "chinatrust" || r == "security-bank" || r == "unionbank" || r == "ucpb" || r == "eastwest-bank") ? f.html("I allow eCompareMo to collect and store my personal information - including but not limited to my name, address, phone number, email, etc., as supplied for transactions on this website.Transactions may include cookie placement, personalized offers, enrollment in its newsletter and others - updated in and without prejudice to its <a href='https://www.ecomparemo.com/terms-conditions' target='_blank'>Terms and Conditions<\/a> and <a href='https://www.ecomparemo.com/privacy-policy' target='_blank'>Privacy Policy<\/a>.The use of my information shall be in accordance with applicable laws. My information will only be revealed to authorized third party partners of eCompareMo.") : parseInt(t) == 7 && (r == "metrobank" || r == "plantersbank" || r == "rcbc" || r == "security-bank" || r == "unionbank" || r == "ucpb" || r == "pbcom" || r == "eastwest-bank") ? f.html("I allow eCompareMo to collect and store my personal information - including but not limited to my name, address, phone number, email, etc., as supplied for transactions on this website.Transactions may include cookie placement, personalized offers, enrollment in its newsletter and others - updated in and without prejudice to its <a href='https://www.ecomparemo.com/terms-conditions' target='_blank'>Terms and Conditions<\/a> and <a href='https://www.ecomparemo.com/privacy-policy' target='_blank'>Privacy Policy<\/a>.The use of my information shall be in accordance with applicable laws. My information will only be revealed to authorized third party partners of eCompareMo.") : parseInt(t) == 6 && (r == "metrobank" || r == "rcbc" || r == "security-bank" || r == "unionbank" || r == "equicom" || r == "chinatrust" || r == "eastwest-bank" || r == "hsbc" || r == "maybank" || r == "pbcom") && f.html("I allow eCompareMo to collect and store my personal information - including but not limited to my name, address, phone number, email, etc., as supplied for transactions on this website.Transactions may include cookie placement, personalized offers, enrollment in its newsletter and others - updated in and without prejudice to its <a href='https://www.ecomparemo.com/terms-conditions' target='_blank'>Terms and Conditions<\/a> and <a href='https://www.ecomparemo.com/privacy-policy' target='_blank'>Privacy Policy<\/a>.The use of my information shall be in accordance with applicable laws. My information will only be revealed to authorized third party partners of eCompareMo.");
            switch (u) {
                case "claims-form-capture":
                case "renew-policy-form-capture":
                    f.html("I certify that the above information are true and correct to the best of my knowledge.");
                    n(".checkbox").append("<label class='m-b-2x f80 text-justify schedule-consent-secondary'><input type='checkbox' id='schedule-consent-secondary' name='schedule-consent-secondary' data-validate='required-agreement-claims-form'>I have read and agree to your <a href='/privacy-policy' target='_blank'>Privacy Policy<\/a>.<\/input><\/label>")
            }
        }
        if (i.PortalName == "CKJ") {
            switch (parseInt(t)) {
                case 1:
                case 2:
                case 3:
                case 6:
                case 7:
                case 10:
                    e[0].nextSibling.data = "Dengan menandai persetujuan ini, Anda setuju dengan Syarat dan Ketentuan dari CekAja.com dan Bank/Institusi keuangan yang Anda pilih. Anda memberikan otorisasi kepada CekAja.com untuk menawarkan produk keuangan dan meneruskan data-data Anda kepada Bank/Institusi keuangan yang Anda pilih, serta memberi kuasa kepada Bank/Institusi keuangan untuk memeriksa semua informasi yang diberikan dengan cara bagaimanapun dan menghubungi sumber manapun yang layak termasuk pada Sistem Layanan Informasi Keuangan, biro kredit atau sejenisnya. Sesuai dengan Peraturan Otoritas Jasa Keuangan No. 18/POJK.03/2017 tentang Pelaporan dan Permintaan Informasi Debitur Melalui Sistem Layanan Informasi Keuangan, Maka CekAja.com menyatakan tidak akan menyebarluaskan data-data Anda ke pihak ketiga lainnya tanpa persetujuan Anda."
            }
            switch (r) {
                case "bca":
                    e[0].nextSibling.data = "Dengan menandai persetujuan ini, Anda telah setuju dengan Syarat dan Ketentuan dari CekAja untuk menawarkan produk bank atau asuransi dan meneruskan data-data Anda kepada bank/asuransi yang dipilih. Sesuai dengan Peraturan Otoritas Jasa Keuangan (POJK) No.1/POJK.07/2013 tentang Perlindungan Konsumen Sektor Jasa Keuangan, Bab I, Pasal 2, maka CekAja menyatakan tidak akan menyebarluaskan data-data Anda ke pihak ketiga lainnya tanpa persetujuan Anda."
            }
        }
    }

    function l(n) {
        switch (i.PortalName) {
            case "CKJ":
                return n == "true" ? "Bapak" : "Nona/Nyonya";
            default:
                return n == "true" ? "Mr." : "Ms./Mrs."
        }
    }
    var e = "AffiliateContactMeModal",
        o = {
            init: function() {},
            complete: function() {},
            figureImage: null,
            additionalRemarks: {}
        },
        f;
    u.prototype.init = function() {
        var i = this,
            r = this.options;
        n(this.element).click(function() {
            i.setUpModal();
            i.setupFormAttributes();
            i.setupFields();
            i.removeErrors();
            n(i.form).unbind().on("submit", function(n) {
                i.submitForm(n)
            });
            n(i.form).attr("data-ganame") && typeof ga != "undefined" && //ga("send", "event", n(i.form).attr("data-ganame"), n(this).data("ga-label") || "formlaunched", n(this).data("ga-label-name") || t.location.href);
            n.isFunction(r.init) && r.init.call(i);
            h();
            s();
            c(n(i.form).attr("data-verticalid"), n(i.form).attr("data-company"), n(this).data("ad-banner"))
        })
    };
    f = function(n) {
        if (i.PortalName == "CKJ") var t = parseInt(n.substring(0, 2), 10),
            r = parseInt(n.substring(3, 5), 10),
            u = parseInt(n.substring(6, 10), 10);
        else if (i.PortalName == "ECM") var r = parseInt(n.substring(0, 2), 10),
            t = parseInt(n.substring(3, 5), 10),
            u = parseInt(n.substring(6, 10), 10);
        var f = new Date,
            e = new Date(u, r - 1, t),
            o = f.valueOf() - e.valueOf();
        return Math.floor(o / 31536e6)
    };
    u.prototype.setupFormAttributes = function() {
        var r = n(this.form),
            i = n(this.element),
            u = r.find("#schedule-consent");
        r.attr("data-verticalid", i.data("verticalid") || 0);
        r.attr("data-product", i.data("product") || "");
        r.attr("data-vertical", i.data("vertical") || "");
        r.attr("data-referrer", i.data("referrer") || t.location.href);
        r.attr("data-company", i.data("company") || "");
        i.data("affiliate") ? r.attr("data-affiliate", i.data("affiliate")) : r.attr("data-affiliate", this.initialB2B);
        i.data("ganame") ? r.attr("data-ganame", i.data("ganame")) : r.attr("data-ganame", this.getGACall(parseInt(i.data("verticalid"))));
        i.data("ga-label-name") && r.attr("data-ga-label-name", i.data("ga-label-name"));
        i.data("ga-label-submit") && r.attr("data-ga-label-submit", i.data("ga-label-submit"));
        i.data("fb-track") && r.attr("data-fb-track", i.data("fb-track"))
    };
    u.prototype.setupFields = function() {
        var f = this,
            e = this.options,
            u = n(this.form).find("fieldset"),
            t, i;
        u.find(".columns.columns-stacked").remove();
        t = 1;
        i = null;
        n.each(e.fields, function(e, o) {
            var v = n('<div class="columns columns-stacked" />'),
                c = n('<div class="column" />'),
                h = n('<div class="form-group" />'),
                l = n("<label />"),
                s = null,
                a;
            switch (o.type) {
                case "text":
                    s = n('<input type="text" class="text required form-control" />');
                    break;
                case "date":
                    s = n('<input type="text" class="text required form-control picker" />');
                    h.addClass("badge-calendar");
                    break;
                case "birthdatedropdown":
                    s = n('<div class="input-auto" />');
                    fieldhidden = n('<input type="hidden" class="hidden form-control" name="birthdatedropdown" id="birthdatedropdown" value="" data-remarks=' + o.remarks + " >");
                    n.each(o.birthdate, function(t, i) {
                        var u, r;
                        if (bdayfield = n('<select class="select form-control auto ' + i.value + '" id="birthday' + i.value + '"/>').css({
                                "padding-right": "30px"
                            }), i.value == "Day") {
                            for (u = "", r = 1; r <= 31; r++) u += '<option value="' + (r < 10 ? "0" + r : r) + '" >' + r + "<\/options>";
                            bdayfield.append(u)
                        } else if (i.value == "Year") {
                            for (u = "", r = 1948; r <= 2e3; r++) u += '<option value="' + r + '" >' + r + "<\/options>";
                            bdayfield.append(u)
                        } else n.each(i.option, function(n, t) {
                            var i = '<option value="' + t.value + '" >' + t.text + "<\/options>";
                            bdayfield.append(i)
                        });
                        s.append(bdayfield, fieldhidden)
                    });
                    break;
                case "number":
                    s = n('<input type="number" class="text required form-control" />');
                    break;
                case "select":
                    s = n('<select class="select required form-control" />');
                    n.each(o.select_options, function(n, t) {
                        var i = '<option value="' + t.value + '" >' + f.translate(t.text) + "<\/options>";
                        s.append(i)
                    })
            }
            s.attr({
                id: o.id,
                name: o.name,
                tabindex: t,
                "data-validate": o.validate
            });
            o.value !== r && s.val(o.value);
            o.remarks && s.attr("data-remarks", o.remarks);
            l.text(f.translate(o.label)).attr("for", o.id);
            h.append(l).append(s);
            t % 2 != 0 && u.append(v);
            a = t % 2 == 0 ? "column-2" : "column-1";
            c.append(h).addClass(a);
            n(".columns.columns-stacked:last-child", u).append(c);
            t == 1 && (i = s);
            t++
        });
        i != null && setTimeout(function() {
            n(i, this.form).focus()
        }, 300)
    };
    u.prototype.setUpModal = function() {
        var t = n(this.container),
            r = n(this.form),
            i = n(this.element),
            u;
        t.removeClass("ajax-posted").find(".modal-dialog").css("margin-top", "3%");
        i.attr("modal-title") ? n(".modal-title", t).html(i.attr("modal-title")) : n(".modal-title", t).html(n(".modal-title", t).data("label"));
        i.attr("modal-label-content") ? n(".modal-label-content", t).html(i.attr("modal-label-content")) : n(".modal-label-content", t).html(n(".modal-label-content", t).data("label"));
        i.attr("modal-submit") ? n("button[type=submit]", r).html(i.attr("modal-submit")) : n("button[type=submit]", r).html(n("button[type=submit]", r).data("label"));
        i.attr("modal-consent") ? n("#schedule-consent", t).attr("data-validate", i.attr("modal-consent")) : n("#schedule-consent", t).html(n("#schedule-consent", t).data("label"));
        u = this.initFigureImage;
        this.options.figureImage !== null && (u = "url(" + this.options.figureImage + ")");
        n("figure.cover-photo", n(this.container)).removeClass("cover-left-top").addClass("cover-left-bottom").css("background-image", u)
    };
    u.prototype.validate = function() {
        this.removeErrors();
        var e = function(n) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n)
            },
            t = [],
            i = !1;
        that = this;
        options = this.options;
        var o = options.errorMessage.required || "This field is required.",
            s = options.errorMessage.email || "Invalid email address.",
            h = options.errorMessage.number || "This field must be a number and minimum of 5,000.",
            c = options.errorMessage.age || "Invalid age",
            r = options.errorMessage.name || "Invalid phone number.",
            l = options.errorMessage.phone_number || "Invalid name.",
            a = options.errorMessage.required_agreement || "You must agree to the terms and conditions.",
            v = options.errorMessage.required_agreement_insurance || "I've read the Terms and Conditions.",
            y = options.errorMessage.required_agreement_claims_form || "You must agree to the Privacy Policy.",
            u = options.errorMessage.birthdate || "You must be 21 years of age or older.";
        return n("[data-validate]", this.form).each(function() {
            var p = n(this),
                d, b, w, k;
            if (p.is("[data-validate]"))
                for (d = p.data("validate").split("|"), b = 0; b < d.length; b++) switch (d[b]) {
                    case "required":
                        (p.val() == null || p.val() == "") && (t.push(p), p.after(n('<div class="form-feedback"><i class="icon i-action-alert-circle-solid"><\/i><div class="description">' + o + "<\/div><\/div>")), p.closest(".form-group").addClass("form-error"), i = !0);
                        break;
                    case "email":
                        p.val() != "" && e(p.val()) == !1 && (t.push(p), p.after(n('<div class="form-feedback"><i class="icon i-action-alert-circle-solid"><\/i><div class="description">' + s + "<\/div><\/div>")), p.closest(".form-group").addClass("form-error"), i = !0);
                        break;
                    case "number":
                        p.val() != "" && (n.isNumeric(p.val()) == !1 || p.val() < 5e3) && (t.push(p), p.after(n('<div class="form-feedback"><i class="icon i-action-alert-circle-solid"><\/i><div class="description">' + h + "<\/div><\/div>")), p.closest(".form-group").addClass("form-error"), i = !0);
                        break;
                    case "age":
                        p.val() != "" && (n.isNumeric(p.val()) == !1 || p.val() > 100) && (t.push(p), p.after(n('<div class="form-feedback"><i class="icon i-action-alert-circle-solid"><\/i><div class="description">' + c + "<\/div><\/div>")), p.closest(".form-group").addClass("form-error"), i = !0);
                        break;
                    case "phone-number":
                        p.val() != "" && (w = /^([0-9\-\s]{7,15}|[\+]{1}[0-9\-\s]{7,15})$/, w.test(p.val()) == !1 && (t.push(p), p.after(n('<div class="form-feedback"><i class="icon i-action-alert-circle-solid"><\/i><div class="description">' + r + "<\/div><\/div>")), p.closest(".form-group").addClass("form-error"), i = !0));
                        break;
                    case "name":
                        p.val() != "" && (w = /^[a-zA-Z\s][\.\-]*$/, w.test(p.val()) == !1 && (t.push(p), p.after(n('<div class="form-feedback"><i class="icon i-action-alert-circle-solid"><\/i><div class="description">' + l + "<\/div><\/div>")), p.closest(".form-group").addClass("form-error"), i = !0));
                        break;
                    case "mobile-number":
                        p.val() != "" && (w = /^([0-9\-\s]{9,12}|[\+]{1}[0-9\-\s]{9,12})$/, w.test(p.val()) == !1 && (t.push(p), p.after(n('<div class="form-feedback"><i class="icon i-action-alert-circle-solid"><\/i><div class="description">' + r + "<\/div><\/div>")), p.closest(".form-group").addClass("form-error"), i = !0));
                        break;
                    case "required-agreement":
                        p.is(":checked") || (t.push(p), p.before(n('<div class="form-group form-note error required-agreement">' + a + "<\/div>")), p.closest(".form-group").addClass("form-error"), i = !0);
                        break;
                    case "required-agreement-insurance":
                        p.is(":checked") || (t.push(p), p.before(n('<div class="form-group form-note error required-agreement-insurance">' + v + "<\/div>")), p.closest(".form-group").addClass("form-error"), i = !0);
                        break;
                    case "required-agreement-claims-form":
                        p.is(":checked") || (t.push(p), p.before(n('<div class="form-group form-note error required-agreement-claims-form">' + y + "<\/div>")), p.closest(".form-group").addClass("form-error"), i = !0);
                        break;
                    case "birthdate":
                        p.val() != "" && (k = f(p.val()), k < 21 && (t.push(p), p.before(n('<div class="form-feedback"><i class="icon i-action-alert-circle-solid"><\/i><div class="description">' + u + "<\/div><\/div>")), p.closest(".form-group").addClass("form-error"), i = !0));
                        break;
                    case "birthdatedropdown":
                        n("#birthdatedropdown").val() != "" && (k = f(n("#birthdatedropdown").val()), k < 21 && (t.push(p), n("#birthdayYear").after(n('<div class="form-feedback"><i class="icon i-action-alert-circle-solid"><\/i><div class="description">' + u + "<\/div><\/div>")), p.closest(".form-group").addClass("form-error"), i = !0))
                }
        }), i ? (t[0].focus(), !1) : !0
    };
    u.prototype.removeErrors = function() {
        n(".required-agreement", this.form).remove();
        n(".form-group", this.form).removeClass("form-error");
        n(".form-feedback, .error-message", this.form).remove()
    };
    u.prototype.submitForm = function(r) {
        var p = this,
            h = this.options,
            s, a, o;
        if (r.preventDefault(), this.validate()) {
            var w = function() {
                    var n = moment().startOf("day"),
                        t = moment().startOf("day"),
                        r = {};
                    if (i.PortalName == "ECM") switch (ht) {
                        default: n = moment();t = moment();
                        break;
                        case "1":
                                n.add(8, "hours");t.add(20, "hours");
                            break;
                        case "2":
                                n.add(11, "hours");t.add(14, "hours");
                            break;
                        case "3":
                                n.add(14, "hours");t.add(18, "hours");
                            break;
                        case "4":
                                n.add(1, "days");t.add(1, "days");n.add(8, "hours");t.add(11, "hours");
                            break;
                        case "5":
                                n.add(1, "days");t.add(1, "days");n.add(11, "hours");t.add(14, "hours");
                            break;
                        case "6":
                                n.add(1, "days");t.add(1, "days");n.add(14, "hours");t.add(18, "hours")
                    } else switch (st.selectedIndex) {
                        case 10:
                        default:
                        case 1:
                            n = moment();
                            t = moment();
                            break;
                        case 2:
                            n.add(8, "hours");
                            t.add(11, "hours");
                            break;
                        case 3:
                            n.add(11, "hours");
                            t.add(12, "hours");
                            break;
                        case 4:
                            n.add(12, "hours");
                            t.add(14, "hours");
                            break;
                        case 5:
                            n.add(14, "hours");
                            t.add(20, "hours");
                            break;
                        case 6:
                            n.add(1, "days");
                            t.add(1, "days");
                            n.add(8, "hours");
                            t.add(11, "hours");
                            break;
                        case 7:
                            n.add(1, "days");
                            t.add(1, "days");
                            n.add(11, "hours");
                            t.add(12, "hours");
                            break;
                        case 8:
                            n.add(1, "days");
                            t.add(1, "days");
                            n.add(12, "hours");
                            t.add(14, "hours");
                            break;
                        case 9:
                            n.add(1, "days");
                            t.add(1, "days");
                            n.add(14, "hours");
                            t.add(20, "hours")
                    }
                    return r.CallStartTime = n.utc().format(), r.CallEndTime = t.utc().format(), r
                },
                u = n(this.form),
                b = u.attr("data-serviceurl"),
                ni = u.attr("data-ganame"),
                k = u.attr("data-company"),
                d = u.attr("data-product"),
                ti = u.attr("data-vertical"),
                g = u.attr("data-affiliate"),
                nt = u.attr("data-verticalid"),
                tt = u.attr("data-referrer"),
                it = n("#schedule-first-name", u),
                rt = n("#schedule-middle-name", u),
                ut = n("#schedule-last-name", u),
                v = n("#schedule-gender", u),
                ft = n("#schedule-number", u),
                et = n("#schedule-email", u),
                ii = n("#schedule-birth", u),
                ri = n("#birthdatedropdown", u),
                ot = n("#schedule-mobile", u),
                ui = n("#schedule-province", u),
                fi = n("#schedule-city", u),
                ei = n("#schedule-occupation", u),
                oi = n("#schedule-income", u),
                si = n("#schedule-numOfCards ", u),
                hi = n("#schedule-loanAmount", u),
                ci = n("#schedule-npwp", u),
                li = n("#schedule-tenure", u),
                st = n("#schedule-time", u),
                ht = n("#schedule-time", u).val(),
                y = w(),
                e = {
                    Company: k,
                    Product: d,
                    ApplyDate: moment().utc().format(),
                    FormURL: tt
                };
            i.PortalName == "ECM" ? (s = n("#birthdatedropdown").val(), s != null && (e.Age = f(s))) : i.PortalName == "CKJ" && (s = n(".badge-calendar input").val(), s != null && (e.Age = f(s)));
            n("[data-remarks]", u).each(function() {
                var t;
                n(this).is("input") ? i.PortalName == "ECM" && n(this).data("remarks") == "MonthlyIncome" ? (t = n(this).val().replace(/\,/g, ""), e[n(this).data("remarks")] = t) : i.PortalName == "CKJ" && n(this).data("remarks") == "MonthlyIncome" ? (t = n(this).val().replace(/\./g, ""), e[n(this).data("remarks")] = t) : e[n(this).data("remarks")] = n(this).val() : n(this).is("select") && (n(this).data("remarks") == "CreditCardHolderTenure" ? e[n(this).data("remarks")] = n(this).find("option:selected").text() : n(this).data("remarks") == "GrossAnnualIncome" ? (e[n(this).data("remarks")] = n(this).find("option:selected").text(), e.MonthlyIncome = n(this).find("option:selected").val()) : n(this).data("remarks") == "MonthlyIncome" ? (e.MonthlyIncomeRange = n(this).find("option:selected").text(), e[n(this).data("remarks")] = n(this).find("option:selected").val()) : n(this).data("remarks") == "Province" ? (e[n(this).data("remarks")] = n(this).find("option:selected").text(), e.ProvinceId = n(this).find("option:selected").val()) : n(this).data("remarks") == "City" ? (e[n(this).data("remarks")] = n(this).find("option:selected").text(), e.RegionId = n(this).find("option:selected").val()) : n(this).data("remarks") == "Occupation" ? (e[n(this).data("remarks")] = n(this).find("option:selected").text(), e.EmploymentTypeId = n(this).find("option:selected").val()) : n(this).data("remarks") == "VehicleManufacturer" ? (e[n(this).data("remarks")] = n(this).find("option:selected").text(), e.VehicleManufacturerId = n(this).find("option:selected").val()) : n(this).data("remarks") == "VehicleModel" ? (e[n(this).data("remarks")] = n(this).find("option:selected").text(), e.VehicleModelId = n(this).find("option:selected").val()) : n(this).data("remarks") == "CreditCardIssuer" ? (e[n(this).data("remarks")] = n(this).find("option:selected").text(), e.CreditCardIssuerId = n(this).find("option:selected").val()) : e[n(this).data("remarks")] = n(this).find("option:selected").val())
            });
            n.isEmptyObject(h.additionalRemarks) || (console.log("additional remarks found"), n.each(h.additionalRemarks, function(n, t) {
                e[n] = t
            }));
            var ct = null,
                lt = null,
                at = null,
                vt = null,
                yt = null;
            try {
                if (a = Cookies.get("UTM"), a != null && (o = JSON.parse(a), o != null)) var ct = o.utm_source,
                    lt = o.utm_medium,
                    at = o.utm_term,
                    vt = o.utm_content,
                    yt = o.utm_campaign
            } catch (pt) {
                console.error(pt)
            }
            var wt = l(v.val()),
                bt = function() {
                    var n = "";
                    return localStorage.getItem("IPAddress") != null && (n = localStorage.getItem("IPAddress")), n
                },
                kt = {
                    AffiliateGuid: g,
                    VerticalId: nt,
                    FirstName: it.val(),
                    MiddleName: rt.val(),
                    LastName: ut.val(),
                    IsMale: v.val(),
                    Title: wt,
                    TelephoneNumber: ft.val(),
                    MobilePhoneNumber: ot.val(),
                    Email: et.val(),
                    StartDate: y.CallStartTime,
                    EndDate: y.CallEndTime,
                    Remarks: JSON.stringify(e),
                    FormUrl: t.location.href,
                    utm_source: ct,
                    utm_medium: lt,
                    utm_term: at,
                    utm_content: vt,
                    utm_campaign: yt,
                    IPAddress: bt()
                },
                c = n("button[type=submit]", u),
                dt = c.data("label"),
                gt = c.outerWidth();
            c.text("").attr("disabled", "disabled").append('<strong class="loading"><span><\/span><span><\/span><span><\/span><\/strong>').css({
                width: gt + "px"
            });
            n.ajax({
                url: b + "/api/CallSchedules/AddCallSchedule",
                type: "POST",
                data: kt,
                success: function() {
                    i.PortalName == "CKJ" && (n("h4").remove(".modal-title"), n("a").remove(".modal-close"));
                    var r = t.location.pathname;
                    typeof ga != "undefined" && //ga("send", "event", u.data("ganame"), u.attr("data-ga-label-submit") || "formsubmit", u.data("ga-label-name") || t.location.href);
                    c.text(dt).removeAttr("disabled").removeAttr("style").find(".loading").remove();
                    n.isFunction(h.complete) && h.complete.call(p)
                }
            })
        }
    };
    u.prototype.getGACall = function(n) {
        switch (n) {
            case 1:
                return "formcapture_PersonalLoan_generic";
            case 2:
                return "formcapture_CreditCard_generic";
            case 3:
                return "formcapture_Deposits_generic";
            case 4:
                return "formcapture_mot_generic";
            case 5:
                return "formcapture_TravelInsurance_generic";
            case 6:
                return "formcapture_HouseLoan_generic";
            case 7:
                return "formcapture_VehicleLoan_generic";
            case 8:
                return "formcapture_hea_generic";
            case 9:
                return "formcapture_acc_generic";
            case 10:
                return "formcapture_abl_generic";
            case 11:
                return "formcapture_pri_generic";
            default:
                return "formcapture_unk_generic"
        }
    };
    u.prototype.translate = function(n) {
        return n
    };
    n.fn[e] = function(t) {
        return this.each(function() {
            n.data(this, "plugin_" + e) || n.data(this, "plugin_" + e, new u(this, t))
        })
    }
}(jQuery, window, document);
$(function() {
    if (document.PortalName == "ECM") {
        if ($("form[data-action=tax-calculator-form]").length == 1) {
            function e() {
                var i = $(".tax-calculator-form"),
                    r = i.find("button.CalculateTax"),
                    u = i.find("button.ReCalculateTax"),
                    t;
                r.bind("click", function() {
                    var u;
                    if ($("#monthly-income").closest(".form-group").removeClass("form-error"), u = $("#monthly-income", i).val().replace(/\,/g, ""), u === null || u === "") $("#monthly-income").closest(".form-group").addClass("form-error");
                    else {
                        $(".income-tax-banner").removeAttr("style");
                        $(".income-tax-banner").css({
                            "background-image": "url(https://ecmorchardmedia.blob.core.windows.net/media/Default/eCompareMo/TaxCalculator-test@2x.png)",
                            "background-position": "50%",
                            "background-size": "auto 832px"
                        });
                        var f = $("[name=status]:checked", i).val(),
                            e = $("#dependent", i).val(),
                            o = parseInt($("#other-Nontaxable-income", i).val().replace(/\,/g, "") != "" ? $("#other-Nontaxable-income", i).val().replace(/\,/g, "") : 0),
                            s = $("#pay-period", i).val(),
                            r = c(u, f, e, 0, 0, o);
                        console.log(r);
                        $("#OldPayPeriodlabel, #NewPayPeriodlabel").text(s);
                        $("#AnnualOldBasicPay, #AnnualNewBasicPay").text("PHP " + n(r.annualIncome));
                        $("#PayPeriodOldBasicPay, #PayPeriodNewBasicPay").text("PHP " + n(t(r.annualIncome)));
                        $("#AnnualOldOtherTaxableIncome, #AnnualNewOtherTaxableIncome").text("PHP " + n(r.otherTaxableIncome));
                        $("#PayPeriodOldOtherTaxableIncome, #PayPeriodNewOtherTaxableIncome").text("PHP " + n(t(r.otherTaxableIncome)));
                        $("#AnnualOldOtherNonTaxableIncome, #AnnualNewOtherNonTaxableIncome").text("PHP " + n(r.otherNontaxableIncome));
                        $("#PayPeriodOldOtherNonTaxableIncome, #PayPeriodNewOtherNonTaxableIncome").text("PHP " + n(t(r.otherNontaxableIncome)));
                        $("#AnnualOldOtherBenefits, #AnnualNewOtherBenefits").text("PHP " + n(r.otherBenefits));
                        $("#PayPeriodOldOtherBenefits, #PayPeriodNewOtherBenefits").text("PHP " + n(t(r.otherBenefits)));
                        $("#AnnualOld13thMonth, #AnnualNew13thMonth").text("PHP " + n(r.thirteenMonthPay));
                        $("#AnnualOldTotalincome, #AnnualNewTotalincome").text("PHP " + n(r.totalIncome));
                        $("#PayPeriodOldTotalincome, #PayPeriodNewTotalincome").text("PHP " + n(t(r.annualIncome) + t(r.otherTaxableIncome) + t(r.otherNontaxableIncome) + t(r.otherBenefits)));
                        $("#AnnualOldSSS, #AnnualNewSSS").text("PHP " + n(r.SSSDeduction));
                        $("#PayPeriodOldSSS, #PayPeriodNewSSS").text("PHP " + n(t(r.SSSDeduction)));
                        $("#AnnualOldPhilhealth, #AnnualNewPhilhealth").text("PHP " + n(r.PhilHealthDeduction));
                        $("#PayPeriodOldPhilhealth, #PayPeriodNewPhilhealth").text("PHP " + n(t(r.PhilHealthDeduction)));
                        $("#AnnualOldHDMF, #AnnualNewHDMF").text("PHP " + n(r.HDMFDeduction));
                        $("#PayPeriodOldHDMF, #PayPeriodNewHDMF").text("PHP " + n(t(r.HDMFDeduction)));
                        $("#AnnualOldTotalDeductions, #AnnualNewTotalDeductions").text("PHP " + n(r.totalDecution));
                        $("#PayPeriodOldTotalDeductions, #PayPeriodNewTotalDeductions").text("PHP " + n(t(r.totalDecution)));
                        $("#AnnualOldTaxableIncome strong").text("PHP " + n(r.oldTaxableIncome));
                        $("#PayPeriodOldTaxableIncome strong").text("PHP " + n(t(r.oldTaxableIncome)));
                        $("#AnnualNewTaxableIncome strong").text("PHP " + n(r.newTaxableIncome));
                        $("#PayPeriodNewTaxableIncome strong").text("PHP " + n(t(r.newTaxableIncome)));
                        $("#AnnualOldTaxDue strong").text("PHP " + n(r.oldIncomeTax));
                        $("#PayPeriodOldTaxDue strong").text("PHP " + n(t(r.oldIncomeTax)));
                        $("#AnnualNewTaxDue strong").text("PHP " + n(r.newIncomeTax));
                        $("#PayPeriodNewTaxDue strong").text("PHP " + n(t(r.newIncomeTax)));
                        $("#AnnualOldTakeHomePay strong").text("PHP " + n(r.totalIncome - r.oldIncomeTax - r.totalDecution));
                        $("#PayPeriodOldTakeHomePay strong").text("PHP " + n(t(r.annualIncome) + t(r.otherTaxableIncome) + t(r.otherNontaxableIncome) + t(r.otherBenefits) - t(r.oldIncomeTax) - t(r.totalDecution)));
                        $("#AnnualNewTakeHomePay strong").text("PHP " + n(r.totalIncome - r.newIncomeTax - r.totalDecution));
                        $("#PayPeriodNewakeHomePay strong").text("PHP " + n(t(r.annualIncome) + t(r.otherTaxableIncome) + t(r.otherNontaxableIncome) + t(r.otherBenefits) - t(r.newIncomeTax) - t(r.totalDecution)));
                        $("#TaxInput").addClass("hide");
                        $("#TaxResult").removeClass("hide")
                    }
                });
                u.bind("click", function() {
                    $(".income-tax-banner").removeAttr("style");
                    $(".income-tax-banner").css({
                        "background-image": "url(https://ecmorchardmedia.blob.core.windows.net/media/Default/eCompareMo/1stTaxCalculatorTest@2x.png)",
                        "background-position": "50%",
                        "background-size": "auto 382px"
                    });
                    $("#TaxResult").addClass("hide");
                    $("#TaxInput").removeClass("hide")
                });
                t = function(n) {
                    var t = $("#pay-period", i).val();
                    return t == "Daily" ? n / (12 * 30.42) : t == "Monthly" ? n / 12 : t == "Semi-Monthly" ? n / 24 : n / (12 * 4.33)
                }
            }
            var n = function(n) {
                    return n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                },
                o = function(n) {
                    for (var i = [1249.99, 1749.99, 2249.99, 2749.99, 3249.99, 3749.99, 4249.99, 4749.99, 5249.99, 5749.99, 6249.99, 6749.99, 7249.99, 7749.99, 8249.99, 8749.99, 9249.99, 9749.99, 10249.99, 10749.99, 11249.99, 11749.99, 12249.99, 12749.99, 13249.99, 13749.99, 14249.99, 14749.99, 15249.99, 15749.99], r = [36.3, 54.5, 72.7, 90.8, 109, 127.2, 145.3, 163.5, 181.7, 199.8, 218, 236.2, 254.3, 272.5, 290.7, 308.8, 327, 345.2, 363.3, 381.5, 399.7, 417.8, 436, 454.2, 472.3, 490.5, 508.7, 526.8, 545, 563.2, 581.3], u, t = 0; i.length > t; t++) n >= i[t] && n < i[t + 1] && (u = r[t + 1]);
                    return (i[0] > n ? r[0] : u > 0 ? u : r[r.length - 1]) * 12
                },
                s = function(n) {
                    return n < 1e4 ? 137.5 * 12 : n < 4e4 ? n * .01375 * 12 : 6600
                },
                h = function() {
                    return 1200
                },
                i = function(n, t, i) {
                    var f, r, e, o, s, h, c, l, u;
                    switch (i) {
                        case 2017:
                            f = n - ((t > 0 ? 25e3 * t : 0) + 5e4);
                            r = [1e4, 3e4, 7e4, 14e4, 25e4, 5e5];
                            e = [0, 500, 2500, 8500, 22500, 5e4, 125e3];
                            o = [.05, .1, .15, .2, .25, .3, .32];
                            break;
                        case 2018:
                            f = n;
                            r = [25e4, 4e5, 8e5, 2e6, 5e6];
                            e = [0, 0, 3e4, 13e4, 49e4, 145e4];
                            o = [0, .2, .25, .3, .32, .35]
                    }
                    for (u = 0; r.length > u; u++) f > r[u] && f < r[u + 1] && (s = e[u + 1], h = o[u + 1], c = r[u]);
                    return s = typeof s != "undefined" ? s : e[e.length - 1], h = typeof h != "undefined" ? h : o[o.length - 1], c = typeof c != "undefined" ? c : r[r.length - 1], l = f - c, {
                        tax: l * h + s,
                        taxableIncome: f
                    }
                },
                c = function(n, t, r, u, f, e) {
                    var v = n * 12,
                        c = parseInt(n),
                        u = u * 12,
                        e = e * 12,
                        k = v + c + u + e + f,
                        y = o(n),
                        p = s(n),
                        w = h(n),
                        b = y + p + w,
                        d = u + f + c < 82e3 ? 0 : u + f + c - 82e3,
                        l, a;
                    return newthirteenMonthPayTaxble = u + f + c < 9e4 ? 0 : u + f + c - 9e4, GrossTaxableIncome = v - b, l = i(GrossTaxableIncome + d, r, 2017), a = i(GrossTaxableIncome + newthirteenMonthPayTaxble, r, 2018), {
                        annualIncome: v,
                        SSSDeduction: y,
                        PhilHealthDeduction: p,
                        HDMFDeduction: w,
                        oldIncomeTax: l.tax > 0 ? l.tax : 0,
                        oldTaxableIncome: l.taxableIncome,
                        newIncomeTax: a.tax > 0 ? a.tax : 0,
                        newTaxableIncome: a.taxableIncome,
                        otherTaxableIncome: u,
                        otherBenefits: f,
                        otherNontaxableIncome: e,
                        thirteenMonthPay: c,
                        totalIncome: k,
                        totalDecution: b
                    }
                };
            e()
        }
        if ($("form[data-action=calculator-form]").length == 0) return;
        $("input[type='range'], input[type='number']").change(function() {
            t()
        });
        $("#capture-tenor").change(function() {
            t()
        });

        function t() {
            var t = $("form.calculator-form"),
                n = r(t.data("calculator")),
                i = n[0],
                f = n[1];
            $(".calculator-estimates span#monthly-estimate").text("PHP " + u(i));
            $(".calculator-estimates span#total-estimate").text("PHP " + u(f))
        }

        function r(n) {
            var f = $("#capture-amount").val(),
                i, e;
            if (f != null) {
                var r = f.replace(/[,]/g, ""),
                    t = $("#capture-tenor").val() * 12,
                    u = $("#capture-interest").val() / 100;
                return n == "CLO" ? i = ((Number(r) + Number(r) * t * u) / Number(t)).toFixed(0) : n == "HLO" && (i = (Number(r) * (u / 12) / (1 - Math.pow(1 / (1 + u / 12), Number(t)))).toFixed(0)), e = i * t, [i, e]
            }
        }

        function u(n) {
            n += "";
            x = n.split(".");
            x1 = x[0];
            x2 = x.length > 1 ? "." + x[1] : "";
            for (var t = /(\d+)(\d{3})/; t.test(x1);) x1 = x1.replace(t, "$1, $2");
            return x1 + x2
        }
        t()
    } else if (document.PortalName == "CKJ") {
        if ($("form[data-action=calculator-form]").length == 0) return;
        $("input[type='range'], input[type='number'], input[type='text']").change(function() {
            t()
        });
        $("#capture-tenor").change(function() {
            t()
        });
        $(".calculator-form button[name='submit']").click(function() {
            t()
        });

        function t() {
            var t = $("form.calculator-form"),
                n = r(t.data("calculator")) || [0, 0],
                i = n[0],
                u = n[1];
            $(".calculator-estimates span#monthly-estimate").text("Rp. " + f(Math.round(i)));
            $(".calculator-estimates span#total-estimate").text("Rp. " + f(Math.round(u)))
        }

        function r(n) {
            if (n == "KTA") {
                var r = $("#capture-amount").val().replace(/[,]/g, ""),
                    t = $("#capture-tenor").val() * 12,
                    u = $("#capture-interest").val() / 100,
                    i = ((Number(r) + Number(r) * t * u) / Number(t)).toFixed(0),
                    f = i * t;
                return [i, f]
            }
            if (n == "KPR") {
                var r = $("#capture-amount").val().replace(/[,]/g, ""),
                    t = $("#capture-tenor").val() * 12,
                    u = $("#capture-interest").val() / 100,
                    i = (Number(r) * (u / 12) / (1 - Math.pow(1 / (1 + u / 12), Number(t)))).toFixed(0),
                    f = i * t;
                return [i, f]
            }
            return n == "UKM" ? v() : n == "MODAL" ? l() : void 0
        }

        function l() {
            var o = $("#profit").val(),
                f, e, n;
            profit = o.replace(/\./g, "");
            f = $("#sales").val();
            sales = f.replace(/\./g, "");
            e = $("#operasional").val();
            operasional = e.replace(/\./g, "");
            var s = $("#waktupenjual").val(),
                h = $("#waktutoko").val(),
                c = $("#waktupembeli").val(),
                t = sales * c / 30,
                i = (sales - profit) * h / 30,
                u = (sales - profit) * s / 30,
                r = "";
            return r = Number(t + i) === 0 ? 0 : operasional, n = "", n = Number(t + i - u - r) <= 0 ? 0 : Number(t + i - u - r), pembiayaan = "", n <= 0 ? pembiayaan = 0 : (a = n * .7, b = Number(profit - operasional) / 1.5 / (.14 / 12), pembiayaan = a > b ? b : a), [n, pembiayaan, t, i, u, r]
        }

        function v() {
            var u = $("#profit").val(),
                f = $("#sales").val(),
                r, i, t, n;
            return sales = f.replace(/\./g, ""), r = $("#operasional").val(), operasional = r.replace(/\./g, ""), i = $(".asset").val(), i = i.replace(/\./g, "") * 1e6, t = $("#jangkawaktu").val(), n = .14, a = i * .7, b = Number(u - operasional) / 1.5 * ((Math.pow(n / 12 + 1, t) - 1) / (n / 12 * Math.pow(n / 12 + 1, t))), pembiayaan2 = a > b ? b : a, angsuran = "", angsuran = t == 0 ? 0 : pembiayaan2 * n / 12 * Math.pow(n / 12 + 1, t) / (Math.pow(n / 12 + 1, t) - 1), [pembiayaan2, angsuran]
        }

        function f(n) {
            n += "";
            x = n.split(".");
            x1 = x[0];
            x2 = x.length > 1 ? "." + x[1] : "";
            for (var t = /(\d+)(\d{3})/; t.test(x1);) x1 = x1.replace(t, "$1.$2");
            return x1 + x2
        }
        $("input.numbers").keyup(function(n) {
            n.which >= 37 && n.which <= 40 || $(this).val(function(n, t) {
                return t.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            })
        });

        function u(n) {
            n += "";
            x = n.split(".");
            x1 = x[0];
            x2 = x.length > 1 ? "." + x[1] : "";
            for (var t = /(\d+)(\d{3})/; t.test(x1);) x1 = x1.replace(t, "$1, $2");
            return x1 + x2
        }
        t()
    }
});
calendar = function(n, t, i) {
    var r = [function(n) {
            n("input[data-picker]").each(function() {
                var t = n(this),
                    r = n("#" + t.data("picker")),
                    c = r.closest(".date-dialog"),
                    e = n("#" + t.data("start-field")),
                    l = n("#" + t.data("end-field")),
                    k = t.data("count-months") ? t.data("count-months") + "m" : "12m",
                    d = t.data("isdestroy") ? t.data("isdestroy") : !1,
                    a;
                t.data("display") && (a = n("#" + t.data("display")));
                var h = t.data("format"),
                    y = t.data("mindate") != null ? t.data("mindate") : "-70y",
                    p = t.data("maxdate") != null ? t.data("maxdate") : "-18y",
                    g = t.data("defaultcalendarmindate") != null ? t.data("defaultcalendarmindate") : "0",
                    it = t.data("biteprotecthackfix"),
                    w = t.data("calendartype"),
                    f = t.data("months");
                if (r.length === 1) {
                    r._showing = 0;
                    var b = function(n) {
                            var t;
                            return t = new Date(n).toString() != "Invalid Date" ? new Date(n) : new Date, t.setHours(0, 0, 0, 0), t.getTime()
                        },
                        rt = function(n, t) {
                            return n - t * 864e5
                        },
                        nt = function(n, t) {
                            return n + t * 864e5
                        },
                        i = w != 2 ? b(e.val()) : b();
                    var o = i,
                        u = nt(i, 1),
                        v = function(t) {
                            t ? (c.addClass("visible"), e.addClass("selected"), l.addClass("selected"), c.hasClass("date-modal") === !0 && n("body").hasClass("modal-open") === !1 && n("body").addClass("date-open")) : (c.removeClass("visible"), e.removeClass("selected"), l.removeClass("selected"), n("body").removeClass("date-open"));
                            r._showing = t
                        },
                        s = function(f) {
                            f === !0 ? (t.val(n.datepicker.formatDate(h, new Date(i)) + " - " + n.datepicker.formatDate(h, new Date(u))).trigger("change"), e.val(n.datepicker.formatDate(h, new Date(i))).trigger("change"), l.val(n.datepicker.formatDate(h, new Date(u))).trigger("change")) : (t.val(n.datepicker.formatDate(h, new Date(i))).trigger("change"), e.val(n.datepicker.formatDate(h, new Date(i))).trigger("change"));
                            a && a.text((u - i) / 864e5 + 1 + " days selected");
                            r.datepicker("refresh")
                        },
                        tt = function() {
                            (typeof f == "undefined" || !f > 0) && (f = 1, r.removeClass("date-picker-double").parent().removeClass("calendar-double"));
                            f >= 2 && (f = 2, r.addClass("date-picker-double").parent().addClass("calendar-double"))
                        };
                    n(e).focus(function() {
                        r._showing || v(1)
                    });
                    n(l).focus(function() {
                        r._showing || v(1)
                    });
                    n(".date-action .btn", c).on("click", function(n) {
                        n.preventDefault();
                        v(0);
                        e.closest("form").length && e.valid()
                    });
                    s(!0);
                    tt();
                    d && r.datepicker("destroy");
                    switch (w) {
                        case 2:
                            r.datepicker({
                                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                                dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                                numberOfMonths: f,
                                firstDay: 1,
                                showButtonPanel: 0,
                                minDate: 0,
                                maxDate: k,
                                beforeShowDay: function(n) {
                                    var r = n.getTime(),
                                        t = "";
                                    return r >= i && r <= u && (t = "ui-state-date-range", r === i ? t += " ui-start-date" : r === u && (t += " ui-end-date"), i === u && (t = "")), [1, t]
                                },
                                onSelect: function(n) {
                                    var t = new Date(n).getTime(),
                                        r = (new Date).setDate((new Date).getDate() + 90);
                                    i === u ? t <= i ? i = t : u = t : (i = Math.min(o, t), u = Math.max(o, t));
                                    o = t;
                                    s(!0)
                                }
                            });
                            break;
                        case 3:
                            s(!1);
                            r.datepicker({
                                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                                dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                                numberOfMonths: f,
                                firstDay: 1,
                                showButtonPanel: 0,
                                minDate: y,
                                maxDate: p,
                                changeMonth: !0,
                                changeYear: !0,
                                yearRange: "-100:+0",
                                onSelect: function(n) {
                                    var t = new Date(n).getTime();
                                    i === u ? t <= i ? i = t : u = t : (i = Math.min(o, t), u = Math.max(o, t));
                                    o = t;
                                    s(!1)
                                }
                            });
                            break;
                        case 4:
                            s(!1);
                            r.datepicker({
                                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                                dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                                numberOfMonths: f,
                                firstDay: 1,
                                showButtonPanel: 0,
                                minDate: y,
                                maxDate: p,
                                changeMonth: !0,
                                changeYear: !0,
                                beforeShowDay: function() {
                                    return [1, ""]
                                },
                                onSelect: function(n) {
                                    var t = new Date(n).getTime();
                                    i = t;
                                    u = t;
                                    o = t;
                                    s()
                                }
                            });
                            break;
                        default:
                            s(!1);
                            r.datepicker({
                                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                                dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                                numberOfMonths: f,
                                firstDay: 1,
                                showButtonPanel: 0,
                                minDate: g,
                                maxDate: "12m",
                                beforeShowDay: function() {
                                    return [1, ""]
                                },
                                onSelect: function(n) {
                                    var t = new Date(n).getTime();
                                    i = t;
                                    u = t;
                                    o = t;
                                    s()
                                }
                            })
                    }
                }
            })
        }],
        u = function() {
            f(n, t, i)
        },
        f = function(n, t, i) {
            r.forEach(function(r) {
                r(n, t, i)
            })
        };
    return {
        init: u
    }
}(jQuery, document, window);
calendar.init();
var onProvinceMenuChange = function(n) {
        var t = n("#SMELoanForm");
        if (t) t.find("#province").on("change", function() {
            console.log("#province change", n(this).val());
            t.find("#city").find("optgroup").addClass("hidden");
            switch (n(this).val()) {
                case "DKI Jakarta":
                    t.find("#city").find('optgroup[id="DKIJakarta"]').removeClass("hidden");
                    break;
                case "Banten":
                    t.find("#city").find('optgroup[id="Banten"]').removeClass("hidden");
                    break;
                case "Jawa Barat":
                    t.find("#city").find('optgroup[id="JawaBarat"]').removeClass("hidden")
            }
        })
    },
    onHasCollateralMenuChange = function(n) {
        var t = n("#SMELoanForm");
        if (t) t.find("#HasCollateral").on("change", function() {
            console.log("#HasCollateral change", n(this).val());
            t.find("#collateral-column").addClass("hidden");
            t.find("#CollateralType").removeAttr("disabled");
            switch (n(this).val()) {
                case "Ya":
                    t.find("#collateral-column").removeClass("hidden");
                    t.find("#CollateralType").removeAttr("disabled");
                    break;
                case "Banten":
                    t.find("#CollateralType").val("").change().attr("disabled", "disabled");
                    break;
                default:
                    t.find("#CollateralType").val("").change().attr("disabled", "disabled")
            }
        })
    },
    CKJSMELoanForm = function(n, t, i) {
        var r = [onProvinceMenuChange, onHasCollateralMenuChange],
            u = function(n, t, i) {
                r.forEach(function(r) {
                    r(n, t, i)
                })
            },
            f = function() {
                u(n, t, i)
            };
        return {
            init: f
        }
    }($, document, window);
CKJSMELoanForm.init();
contactmodal = function(n, t, i) {
    var r = [function(n) {
            var t = n(".layout-content #call-schedule");
            t.length && n(".layout").append(t)
        }, function(n, t, i) {
            var rt = function() {
                    var n = "test";
                    try {
                        return localStorage.setItem(n, n), localStorage.removeItem(n), !0
                    } catch (t) {
                        return !1
                    }
                },
                f = rt(),
                c, o, tt, it, e;
            if (f) {
                var o = 24,
                    d = (new Date).getTime(),
                    g = localStorage.getItem("setupTime");
                g !== null && d - g > o * 36e5 && (localStorage.clear(), localStorage.setItem("setupTime", d))
            }
            var l = function() {
                    var t = [],
                        e = "/lookups/getprovince",
                        r = function(t) {
                            n.each(t, function(t, i) {
                                n("#schedule-province").append(n("<option><\/option>").val(i.value).html(i.text))
                            })
                        },
                        u = function() {
                            n.ajax({
                                url: e,
                                method: "GET",
                                success: function(n) {
                                    var u = JSON.parse(n.Result);
                                    for (x = 0; x < u.length; x++) t.push({
                                        value: u[x].ProvinceId,
                                        text: u[x].DisplayedName
                                    });
                                    f && localStorage.setItem(i + "_province", JSON.stringify(t));
                                    r(t)
                                }
                            })
                        };
                    f ? localStorage.getItem(i + "_province") !== null ? (t = JSON.parse(localStorage.getItem(i + "_province")), r(t)) : u() : u()
                },
                a = function(t) {
                    var r;
                    if (t > 0) {
                        var r = [{
                                value: "",
                                text: "Please select..."
                            }],
                            u = function(t) {
                                n("#schedule-city").html("");
                                n.each(t, function(t, i) {
                                    n("#schedule-city").append(n("<option><\/option>").val(i.value).html(i.text))
                                })
                            },
                            e = function() {
                                n.ajax({
                                    url: "/lookups/getregion?ProvinceId=" + t,
                                    method: "GET",
                                    type: "JSON",
                                    success: function(n) {
                                        var n = JSON.parse(n.Result);
                                        for (x = 0; x < n.length; x++) r.push({
                                            value: n[x].RegionId,
                                            text: n[x].DisplayedName
                                        });
                                        f && localStorage.setItem(i + "_province_" + t, JSON.stringify(r));
                                        u(r)
                                    }
                                })
                            };
                        f ? localStorage.getItem(i + "_province_" + t) !== null ? (r = JSON.parse(localStorage.getItem(i + "_province_" + t)), u(r)) : e() : e()
                    }
                },
                v = function(t) {
                    var u = [],
                        r, e, o;
                    switch (t) {
                        case 1:
                            r = "/lookups/getCLOEmploymentType";
                            break;
                        case 2:
                            r = "/lookups/getCCEmploymentType";
                            break;
                        case 6:
                            r = "/lookups/getHLOEmploymentType";
                            break;
                        case 7:
                            r = "/lookups/getVLOEmploymentType";
                            break;
                        default:
                            r = "/lookups/getEmploymentType"
                    }
                    e = function(t) {
                        n.each(t, function(t, i) {
                            n("#schedule-occupation").append(n("<option><\/option>").val(i.value).html(i.text))
                        })
                    };
                    o = function() {
                        n.ajax({
                            url: r,
                            method: "GET",
                            success: function(n) {
                                var r = JSON.parse(n.Result);
                                for (x = 0; x < r.length; x++) u.push({
                                    value: r[x].EmploymentTypeId,
                                    text: r[x].DisplayedName
                                });
                                f && localStorage.setItem(i + "_vertical_id=" + t + "_employment", JSON.stringify(u));
                                e(u)
                            }
                        })
                    };
                    f ? localStorage.getItem(i + "_vertical_id=" + t + "_employment") !== null ? (u = JSON.parse(localStorage.getItem(i + "_vertical_id=" + t + "_employment")), e(u)) : o() : o()
                },
                y = function() {
                    var t = [],
                        e = "/lookups/getmotvehiclemanufacturer",
                        r = function(t) {
                            n.each(t, function(t, i) {
                                n("#schedule-vehicle-manufacturer").append(n("<option><\/option>").val(i.value).html(i.text))
                            })
                        },
                        u = function() {
                            n.ajax({
                                url: e,
                                method: "GET",
                                success: function(n) {
                                    var u = JSON.parse(n.Result);
                                    for (x = 0; x < u.length; x++) t.push({
                                        value: u[x].VehicleManufacturerId,
                                        text: u[x].DisplayedName
                                    });
                                    f && localStorage.setItem(i + "_vehiclemanufacturer", JSON.stringify(t));
                                    r(t)
                                }
                            })
                        };
                    f ? localStorage.getItem(i + "_vehiclemanufacturer") !== null ? (t = JSON.parse(localStorage.getItem(i + "_vehiclemanufacturer")), r(t)) : u() : u()
                },
                p = function(t) {
                    var r;
                    if (t > 0) {
                        var r = [{
                                value: "",
                                text: "Please select..."
                            }],
                            u = function(t) {
                                n("#schedule-vehicle-manufacturer-model").html("");
                                n("#schedule-vehicle-manufacturer-model").html('<option value="">Please select...<\/option>');
                                n("#schedule-vehicle-manufacturer-year").html("");
                                n.each(t, function(t, i) {
                                    n("#schedule-vehicle-manufacturer-year").append(n("<option><\/option>").val(i.value).html(i.text))
                                })
                            },
                            e = function() {
                                n.ajax({
                                    url: "/lookups/getmotyear?vehiclemanufacturerid=" + t,
                                    method: "GET",
                                    type: "JSON",
                                    success: function(n) {
                                        var n = JSON.parse(n.Result);
                                        for (x = 0; x < n.length; x++) r.push({
                                            value: n[x].Year,
                                            text: n[x].Year
                                        });
                                        f && localStorage.setItem(i + "_vehicleManufacturerId_" + t, JSON.stringify(r));
                                        u(r)
                                    }
                                })
                            };
                        f ? localStorage.getItem(i + "_vehicleManufacturerId_" + t) !== null ? (r = JSON.parse(localStorage.getItem(i + "_vehicleManufacturerId_" + t)), u(r)) : e() : e()
                    }
                },
                w = function(t, r) {
                    var u;
                    if (t > 0 || r > 0) {
                        var u = [{
                                value: "",
                                text: "Please select..."
                            }],
                            e = function(t) {
                                n("#schedule-vehicle-manufacturer-model").html("");
                                n.each(t, function(t, i) {
                                    n("#schedule-vehicle-manufacturer-model").append(n("<option><\/option>").val(i.value).html(i.text))
                                })
                            },
                            o = function() {
                                n.ajax({
                                    url: "/lookups/getmotvehiclemodel?year=" + t + "&vehiclemanufacturerid=" + r,
                                    method: "GET",
                                    type: "JSON",
                                    success: function(n) {
                                        var n = JSON.parse(n.Result);
                                        for (x = 0; x < n.length; x++) u.push({
                                            value: n[x].VehicleTypeModelId,
                                            text: n[x].DisplayedName
                                        });
                                        f && localStorage.setItem(i + "_vehicleManufacturerYear=" + t + "_vehicleManufacturerId=" + r, JSON.stringify(u));
                                        e(u)
                                    }
                                })
                            };
                        f ? localStorage.getItem(i + "_vehicleManufacturerYear=" + t + "_vehicleManufacturerId=" + r) !== null ? (u = JSON.parse(localStorage.getItem(i + "_vehicleManufacturerYear=" + t + "_vehicleManufacturerId=" + r)), e(u)) : o() : o()
                    }
                },
                s = function() {
                    n(".date-calendar.date-dialog.date-wizard.date-modal").remove();
                    n(".birth-calendar.date-dialog.date-wizard.date-modal").remove();
                    n(".FromTo-calendar.date-dialog.date-wizard.date-modal").remove();
                    i == "ECM" ? (n("#schedule-birth", this.form).length && (n("#schedule-birth", this.form).parent().append('<input type="hidden" class="text" data-picker="date-picker-modal-calendar-callsched" data-start-field="schedule-birth" data-display="" data-months="1" data-format="mm/dd/yy" data-calendartype="3" value="" />'), n(".layout").append('<div class="birth-calendar date-dialog date-wizard date-modal" style="z-index: 1051;"><div class="calendar"><div class="date-picker" id="date-picker-modal-calendar-callsched"><\/div><div class="date-action"><a class="btn btn-default btn-block" title="Update calendar"><span>Update<\/span><\/a><\/div><\/div><\/div>'), calendar.init()), n("#schedule-calendar", this.form).length && (n("#schedule-calendar", this.form).parent().append('<input type="hidden" class="text" data-picker="date-picker-modal-calendar-callsched" data-start-field="schedule-calendar" data-display="" data-months="2" data-defaultcalendarmindate="-10y" data-format="mm/dd/yy" data-calendartype="1" value="" />'), n(".layout").append('<div class="date-calendar date-dialog date-wizard date-modal" style="z-index: 1051;"><div class="calendar"><div class="date-picker" id="date-picker-modal-calendar-callsched"><\/div><div class="date-action"><a class="btn btn-default btn-block" title="Update calendar"><span>Update<\/span><\/a><\/div><\/div><\/div>'), calendar.init()), n("#schedule-startDateOfTravel, #schedule-endDateOfTravel", this.form).length && (n("#schedule-startDateOfTravel, #schedule-endDateOfTravel", this.form).parent().append('<input type="hidden" class="text" id="date-field-double-range-calendar" data-picker="date-picker-double-range-calendar" data-start-field="schedule-startDateOfTravel" data-end-field="schedule-endDateOfTravel" data-display="" data-months="2" data-format="mm/dd/yy" data-calendartype="2" value="" />'), n(".layout").append('<div class="FromTo-calendar date-dialog date-wizard date-modal" style="z-index: 1051;"><div class="calendar"><div class="date-picker" id="date-picker-double-range-calendar"><\/div><div class="date-action"><a class="btn btn-default btn-block" title="Update calendar"><span>Update<\/span><\/a><\/div><\/div><\/div>'), calendar.init())) : i == "CKJ" && (n("#schedule-birth", this.form).length && (n("#schedule-birth", this.form).parent().append('<input type="hidden" class="text" data-picker="date-picker-modal-calendar-callsched" data-start-field="schedule-birth" data-display="" data-months="1" data-format="dd/mm/yy" data-calendartype="3" value="" />'), n(".layout").append('<div class="birth-calendar date-dialog date-wizard date-modal" style="z-index: 1051;"><div class="calendar"><div class="date-picker" id="date-picker-modal-calendar-callsched"><\/div><div class="date-action"><a class="btn btn-default btn-block" title="Update calendar"><span>Update<\/span><\/a><\/div><\/div><\/div>'), calendar.init()), n("#schedule-calendar", this.form).length && (n("#schedule-calendar", this.form).parent().append('<input type="hidden" class="text" data-picker="date-picker-modal-calendar-callsched" data-start-field="schedule-calendar" data-display="" data-months="2" data-defaultcalendarmindate="-10y" data-format="dd/mm/yy" data-calendartype="1" value="" />'), n(".layout").append('<div class="date-calendar date-dialog date-wizard date-modal" style="z-index: 1051;"><div class="calendar"><div class="date-picker" id="date-picker-modal-calendar-callsched"><\/div><div class="date-action"><a class="btn btn-default btn-block" title="Update calendar"><span>Update<\/span><\/a><\/div><\/div><\/div>'), calendar.init()), n("#schedule-startDateOfTravel, #schedule-endDateOfTravel", this.form).length && (n("#schedule-startDateOfTravel, #schedule-endDateOfTravel", this.form).parent().append('<input type="hidden" class="text" id="date-field-double-range-calendar" data-picker="date-picker-double-range-calendar" data-start-field="schedule-startDateOfTravel" data-end-field="schedule-endDateOfTravel" data-display="" data-months="2" data-format="dd/mm/yy" data-calendartype="2" value="" />'), n(".layout").append('<div class="FromTo-calendar date-dialog date-wizard date-modal" style="z-index: 1051;"><div class="calendar"><div class="date-picker" id="date-picker-double-range-calendar"><\/div><div class="date-action"><a class="btn btn-default btn-block" title="Update calendar"><span>Update<\/span><\/a><\/div><\/div><\/div>'), calendar.init()))
                },
                b = function(t) {
                    var i = n("#schedule-consent");
                    switch (t.toLowerCase()) {
                        case "uob":
                            i[0].nextSibling.data = "Dengan menandai persetujuan ini, Anda setuju dengan Syarat dan Ketentuan dari CekAja.com dan bank yang Anda pilih. Anda memberikan otorisasi kepada CekAja.com untuk menawarkan produk bank dan meneruskan data-data Anda kepada Bank yang Anda pilih, serta memberi kuasa kepada Bank untuk memeriksa semua informasi yang diberikan dengan cara bagaimanapun dan menghubungi sumber manapun yang layak termasuk pada Sistem Informasi Debitur Bank Indonesia, biro kredit atau sejenisnya . Sesuai dengan Peraturan Otoritas Jasa Keuangan (POJK) No.1/POJK.07/2013 tentang Perlindungan Konsumen Sektor Jasa Keuangan, Bab I, Pasal 2, Maka CekAja.com menyatakan tidak akan menyebarluaskan data - data Anda ke pihak ketiga lainnya tanpa persetujuan Anda.";
                            break;
                        case "bca":
                            i[0].nextSibling.data = "Dengan menandai persetujuan ini, Anda telah setuju dengan Syarat dan Ketentuan dari CekAja untuk menawarkan produk bank atau asuransi dan meneruskan data-data Anda kepada bank/asuransi yang dipilih. Sesuai dengan Peraturan Otoritas Jasa Keuangan (POJK) No.1/POJK.07/2013 tentang Perlindungan Konsumen Sektor Jasa Keuangan, Bab I, Pasal 2, maka CekAja menyatakan tidak akan menyebarluaskan data-data Anda ke pihak ketiga lainnya tanpa persetujuan Anda.";
                            break;
                        default:
                            i[0].nextSibling.data = "Dengan menandai persetujuan ini, Anda setuju dengan Syarat dan Ketentuan dari CekAja dan Badan Keuangan yang Anda pilih serta memberikan otorisasi kepada CekAja untuk menawarkan produk keuangan dan meneruskan data-data Anda kepada Badan Keuangan yang Anda pilih. Sesuai dengan Peraturan Otoritas Jasa Keuangan (POJK) No.1/POJK.07/2013 tentang Perlindungan Konsumen Sektor Jasa Keuangan, Bab I, Pasal 2 (d), maka CekAja menyatakan tidak akan menyebarluaskan data - data Anda ke pihak ketiga lainnya tanpa persetujuan Anda."
                    }
                },
                ut = function(n) {
                    return n >= 20 ? 6 : n < 20 && n >= 14 ? 5 : n < 14 && n >= 12 ? 4 : n < 12 && n >= 11 ? 3 : n < 11 && n >= 8 ? 2 : n < 8 ? 1 : void 0
                },
                h = [],
                nt = new Date;
            switch (i) {
                case "ECM":
                    c = [{
                        value: "ASAP",
                        text: "ASAP"
                    }, {
                        value: "Noontime Today",
                        text: "Noontime Today"
                    }, {
                        value: "Afternoon Today",
                        text: "Afternoon Today"
                    }, {
                        value: "Tomorrow Morning",
                        text: "Tomorrow Morning"
                    }, {
                        value: "Tomorrow Noontime",
                        text: "Tomorrow Noontime"
                    }, {
                        value: "Tomorrow Afternoon",
                        text: "Tomorrow Afternoon"
                    }];
                    o = nt.getHours();
                    o >= 8 && o <= 20 && h.push(c[0]);
                    o >= 11 && o <= 14 && h.push(c[1]);
                    o >= 14 && o <= 18 && h.push(c[2]);
                    h.push(c[3]);
                    h.push(c[4]);
                    h.push(c[5]);
                    break;
                case "CKJ":
                    tt = ut(nt.getHours());
                    n.each([{
                        index: "1",
                        value: "Segera",
                        text: "Segera"
                    }, {
                        index: "2",
                        value: "Pagi ini",
                        text: "Pagi ini"
                    }, {
                        index: "3",
                        value: "Siang ini",
                        text: "Siang ini"
                    }, {
                        index: "4",
                        value: "Sore in",
                        text: "Sore ini"
                    }, {
                        index: "5",
                        value: "Malam ini",
                        text: "Malam ini"
                    }, {
                        index: "6",
                        value: "Besok pagi",
                        text: "Besok pagi"
                    }, {
                        index: "7",
                        value: "Besok siang",
                        text: "Besok siang"
                    }, {
                        index: "8",
                        value: "Besok sore",
                        text: "Besok sore"
                    }, {
                        index: "9",
                        value: "Besok malam",
                        text: "Besok malam"
                    }], function(n, t) {
                        t.index >= tt && h.push(t)
                    })
            }
            Array.prototype.remove || (it = function(n, t) {
                return n - t
            }, Array.prototype.remove = function(n) {
                var i, r = [],
                    u = 0,
                    t;
                for (Array.isArray(n) || (n = [n]), n.sort(it), t = 0; t < n.length; t++) i = this.indexOf(this[n[t] - u]), i > -1 && (r.push(this.splice(i, 1)), u++);
                return r
            });
            var k = {
                    ECM: {},
                    CKJ: {
                        "First name:": "Nama Depan",
                        "Middle name:": "Nama Tengah",
                        "Last name:": "Nama Belakang",
                        "Gender:": "Jenis Kelamin",
                        Male: "Pria",
                        Female: "Wanita",
                        "Date of Birth:": "Tanggal Lahir",
                        "Phone number:": "Nomor Telepon",
                        "Mobile Phone Number:": "Nomor Handphone",
                        "E-mail:": "Email",
                        "Please select...": "Pilih di Sini",
                        "Province:": "Provinsi Tempat Anda Tinggal",
                        "City:": "Kota Tempat Anda Tinggal",
                        "Employment Type:": "Jenis Pekerjaan",
                        "Income per Month:": "Penghasilan per Bulan",
                        "Loan Amount:": "Jumlah Pinjaman",
                        "Loan Tenor:": "Tenor Pinjaman",
                        "Number of Credit Card:": "Jumlah Kartu Kredit",
                        "more than 2": "Lebih dari 2",
                        "Preferred call time:": "Waktu Untuk Dihubungi",
                        "This field is required.": "Data ini wajib diisi",
                        "Invalid email address.": "Alamat email salah",
                        "This field must be a number and minimum of 5,000": "This field must be a number.",
                        "Invalid phone number.": "Mohon untuk input informasi nomor telepon yang valid",
                        "You must agree to the terms and conditions.": "Harap setujui syarat dan ketentuan",
                        "You must be 21 years of age or older.": "Anda harus berusia minimal 21 tahun",
                        "Credit Card Holder:": "Memiliki Kartu Kredit:"
                    }
                },
                u = function(n) {
                    return typeof k[i] != "undefined" ? typeof k[i][n] != "undefined" ? k[i][n] : n : n
                },
                r = {
                    call_sched_first_name: {
                        type: "text",
                        name: "schedule-first-name",
                        id: "schedule-first-name",
                        label: u("First name:"),
                        validate: "required"
                    },
                    call_sched_middle_name: {
                        type: "text",
                        name: "schedule-middle-name",
                        id: "schedule-middle-name",
                        label: u("Middle name:"),
                        validate: "required"
                    },
                    call_sched_last_name: {
                        type: "text",
                        name: "schedule-last-name",
                        id: "schedule-last-name",
                        label: u("Last name:"),
                        validate: "required"
                    },
                    call_sched_gender: {
                        type: "select",
                        name: "schedule-gender",
                        id: "schedule-gender",
                        label: u("Gender:"),
                        validate: "required",
                        select_options: [{
                            value: "",
                            text: u("Please select...")
                        }, {
                            value: "true",
                            text: u("Male")
                        }, {
                            value: "false",
                            text: u("Female")
                        }]
                    },
                    call_sched_birthday: {
                        type: "date",
                        name: "schedule-birth",
                        id: "schedule-birth",
                        label: u("Date of Birth:"),
                        validate: "required|birthdate",
                        remarks: "Birthdate"
                    },
                    call_sched_birthday_dropdown: {
                        type: "birthdatedropdown",
                        name: "schedule-birth-dropdown",
                        id: "schedule-birth-dropdown",
                        label: u("Date of Birth:"),
                        validate: "birthdatedropdown",
                        birthdate: [{
                            value: "Month",
                            option: [{
                                value: "01",
                                text: "Jan"
                            }, {
                                value: "02",
                                text: "Feb"
                            }, {
                                value: "03",
                                text: "Mar"
                            }, {
                                value: "04",
                                text: "Apr"
                            }, {
                                value: "05",
                                text: "May"
                            }, {
                                value: "06",
                                text: "Jun"
                            }, {
                                value: "07",
                                text: "Jul"
                            }, {
                                value: "08",
                                text: "Aug"
                            }, {
                                value: "09",
                                text: "Sep"
                            }, {
                                value: "10",
                                text: "Oct"
                            }, {
                                value: "11",
                                text: "Nov"
                            }, {
                                value: "12",
                                text: "Dec"
                            }]
                        }, {
                            value: "Day"
                        }, {
                            value: "Year"
                        }],
                        remarks: "Birthdate"
                    },
                    call_sched_number: {
                        type: "text",
                        name: "schedule-number",
                        id: "schedule-number",
                        label: u("Phone number:"),
                        validate: "phone-number"
                    },
                    call_sched_mobile: {
                        type: "text",
                        name: "schedule-mobile",
                        id: "schedule-mobile",
                        label: u("Mobile Phone Number:"),
                        validate: "required|mobile-number"
                    },
                    call_sched_email: {
                        type: "text",
                        name: "schedule-email",
                        id: "schedule-email",
                        label: u("E-mail:"),
                        validate: "required|email"
                    },
                    call_sched_province: {
                        type: "select",
                        name: "schedule-province",
                        id: "schedule-province",
                        label: u("Province:"),
                        validate: "required",
                        select_options: [{
                            value: "",
                            text: u("Please select...")
                        }],
                        remarks: "Province"
                    },
                    call_sched_city: {
                        type: "select",
                        name: "schedule-city",
                        id: "schedule-city",
                        label: u("City:"),
                        validate: "required",
                        select_options: [{
                            value: "",
                            text: "Please select..."
                        }],
                        remarks: "City"
                    },
                    call_sched_occupation: {
                        type: "select",
                        name: "schedule-occupation",
                        id: "schedule-occupation",
                        label: u("Employment Type:"),
                        validate: "required",
                        select_options: [{
                            value: "",
                            text: u("Please select...")
                        }],
                        remarks: "Occupation"
                    },
                    call_sched_vehicle_manufacturer: {
                        type: "select",
                        name: "schedule-vehicle-manufacturer",
                        id: "schedule-vehicle-manufacturer",
                        label: u("Car Make:"),
                        validate: "required",
                        select_options: [{
                            value: "",
                            text: "Please select..."
                        }],
                        remarks: "VehicleManufacturer"
                    },
                    call_sched_vehicle_manufacturer_year: {
                        type: "select",
                        name: "schedule-vehicle-manufacturer-year",
                        id: "schedule-vehicle-manufacturer-year",
                        label: u("Year Model:"),
                        validate: "required",
                        select_options: [{
                            value: "",
                            text: "Please select..."
                        }],
                        remarks: "ManufacturingYear"
                    },
                    call_sched_vehicle_manufacturer_model: {
                        type: "select",
                        name: "schedule-vehicle-manufacturer-model",
                        id: "schedule-vehicle-manufacturer-model",
                        label: u("Car Model:"),
                        validate: "required",
                        select_options: [{
                            value: "",
                            text: "Please select..."
                        }],
                        remarks: "VehicleModel"
                    },
                    call_sched_income: {
                        type: "select",
                        name: "schedule-income",
                        id: "schedule-income",
                        label: u("Income per Month:"),
                        validate: "required",
                        select_options: [{
                            value: "",
                            text: "Please select..."
                        }, {
                            value: "11000",
                            text: "PHP14,999.00 and below"
                        }, {
                            value: "17500",
                            text: "PHP15,000.00 - PHP19,999.00"
                        }, {
                            value: "25000",
                            text: "PHP20,000.00 - PHP29,999.00"
                        }, {
                            value: "40000",
                            text: "PHP30,000.00 - PHP49,999.00"
                        }, {
                            value: "75000",
                            text: "PHP50,000.00 - PHP99,999.00"
                        }, {
                            value: "100000",
                            text: "PHP100,000.00 and above"
                        }],
                        remarks: "MonthlyIncome"
                    },
                    call_sched_annual_income: {
                        type: "select",
                        name: "schedule-annual-income",
                        id: "schedule-annual-income",
                        label: "Gross Annual Income:",
                        validate: "required",
                        select_options: [{
                            value: "",
                            text: "Please select..."
                        }, {
                            value: "14000",
                            text: "Below P180,000"
                        }, {
                            value: "16500",
                            text: "P180,000 - P249,999"
                        }, {
                            value: "25000",
                            text: "P250,000 and above"
                        }],
                        remarks: "GrossAnnualIncome"
                    },
                    call_sched_loanAmount: {
                        type: "number",
                        name: "schedule-loanAmount",
                        id: "schedule-loanAmount",
                        label: u("Loan Amount:"),
                        validate: "required|number",
                        remarks: "LoanAmount"
                    },
                    call_sched_tenure: {
                        type: "select",
                        name: "schedule-tenure",
                        id: "schedule-tenure",
                        label: u("Loan Tenor:"),
                        validate: "required",
                        select_options: [{
                            value: "",
                            text: "Please select..."
                        }, {
                            value: "12 months",
                            text: "12 months"
                        }, {
                            value: "18 months",
                            text: "18 months"
                        }, {
                            value: "24 months",
                            text: "24 months"
                        }, {
                            value: "36 months",
                            text: "36 months"
                        }, {
                            value: "48 months",
                            text: "48 months"
                        }, {
                            value: "60 months",
                            text: "60 months"
                        }],
                        remarks: "Tenure"
                    },
                    call_sched_numOfCards: {
                        type: "select",
                        name: "schedule-numOfCards",
                        id: "schedule-numOfCards",
                        label: u("Number of Credit Card:"),
                        validate: "required",
                        select_options: [{
                            value: "",
                            text: u("Please select...")
                        }, {
                            value: "0",
                            text: "0"
                        }, {
                            value: "1",
                            text: "1"
                        }, {
                            value: "2",
                            text: "2"
                        }, {
                            value: "3",
                            text: u("more than 2")
                        }],
                        remarks: "NumberOfCreditCards"
                    },
                    call_sched_call_time: {
                        type: "select",
                        name: "schedule-time",
                        id: "schedule-time",
                        label: u("Preferred call time:"),
                        validate: "required",
                        select_options: h,
                        remarks: "TimeAvailable"
                    },
                    call_sched_npwp: {
                        type: "select",
                        name: "schedule-npwp",
                        id: "schedule-npwp",
                        label: "Apakah Anda Memiliki NPWP?",
                        validate: "required",
                        select_options: [{
                            value: "",
                            text: "Pilih di Sini"
                        }, {
                            value: "Ya",
                            text: "Ya"
                        }, {
                            value: "Tidak",
                            text: "Tidak"
                        }],
                        remarks: "NPWPOwnership"
                    },
                    call_sched_creditcard_holder: {
                        type: "select",
                        name: "schedule-creditCardHolder",
                        id: "schedule-creditCardHolder",
                        label: u("Credit Card Holder:"),
                        validate: "required",
                        select_options: [{
                            value: "",
                            text: "Please select..."
                        }, {
                            value: "true",
                            text: "Yes"
                        }, {
                            value: "false",
                            text: "No"
                        }],
                        remarks: "CreditCardHolder"
                    },
                    call_sched_vehicle_model_year: {
                        type: "text",
                        name: "schedule-vehicle-model-year",
                        id: "schedule-vehicle-model-year",
                        label: u("Vehicle model and year:"),
                        validate: "required",
                        remarks: "VehicleModelYear"
                    }
                };
            switch (i) {
                case "CKJ":
                    r.call_sched_income.type = "text";
                    r.call_sched_creditcard_holder.select_options = [{
                        value: "",
                        text: "Pilih di Sini"
                    }, {
                        value: "Yes",
                        text: "Ya"
                    }, {
                        value: "No",
                        text: "Tidak"
                    }];
                    r.call_sched_tenure.select_options = [{
                        value: "",
                        text: "Pilih di Sini"
                    }, {
                        value: "12",
                        text: "12 bulan"
                    }, {
                        value: "24",
                        text: "24 bulan"
                    }, {
                        value: "36",
                        text: "36 bulan"
                    }]
            }
            e = {
                required: u("This field is required."),
                email: u("Invalid email address."),
                number: u("This field must be a number and minimum of 5,000"),
                age: u("Invalid age"),
                name: "Invalid name.",
                phone_number: u("Invalid phone number."),
                required_agreement: u("You must agree to the terms and conditions."),
                required_agreement_insurance: u("I've read the Terms and Conditions."),
                birthdate: u("You must be 21 years of age or older.")
            };
            n('a[data-ad-banner="citibank-form-capture"]').each(function() {
                var h = n(this).data("product"),
                    c = n(this).data("verticalid"),
                    t = n(this).data("vertical"),
                    i = 6,
                    u = "month",
                    f, o;
                t == "CC" ? (i = 1, u = "month", n(this).attr("data-ganame", "formcapture_CreditCard_Citibank")) : t == "CLO" && (i = 12, u = "months", n(this).attr("data-ganame", "formcapture_PersonalLoans_Citibank"));
                f = [r.call_sched_first_name, r.call_sched_middle_name, r.call_sched_last_name, r.call_sched_gender, r.call_sched_mobile, r.call_sched_number, r.call_sched_email, r.call_sched_birthday_dropdown, r.call_sched_province, r.call_sched_city, r.call_sched_occupation, r.call_sched_annual_income, r.call_sched_creditcard_holder, {
                    type: "select",
                    name: "schedule-creditCardHolderTenure",
                    id: "schedule-creditCardHolderTenure",
                    label: "For how long?",
                    select_options: [{
                        value: "",
                        text: "Please select..."
                    }, {
                        value: "0",
                        text: "Less than " + i + " " + u
                    }, {
                        value: "1",
                        text: "More than " + i + " " + u
                    }],
                    remarks: "CreditCardHolderTenure"
                }];
                o = "/media/Default/eCompareMo/affiliates/citibank/clo-form-capture.png";
                t == "CC" && (f.remove([10]), o = "/media/Default/eCompareMo/affiliates/citibank/citi_uniqlo_side@1x.jpg");
                n(this).AffiliateContactMeModal({
                    fields: f,
                    errorMessage: e,
                    figureImage: o,
                    init: function() {
                        n("#ContactMe-Submit").prop("disabled", !1);
                        n("#schedule-creditCardHolderTenure", this.form).parent().children().addClass("hidden");
                        n("#schedule-creditCardHolder", this.form).change(function() {
                            n(this).val() == "true" ? n("#schedule-creditCardHolderTenure", this.form).attr("data-validate", "required").parent().children().removeClass("hidden") : n("#schedule-creditCardHolderTenure", this.form).removeAttr("data-validate").parent().children().addClass("hidden")
                        });
                        n("#schedule-province", this.form).length && (l(), n("#schedule-city", this.form).length && n("#schedule-province", this.form).change(function() {
                            var t = n(this).val();
                            a(t)
                        }));
                        v(c);
                        s()
                    },
                    complete: function() {
                        var f = n("button[type=submit]", this.form),
                            e = function(n) {
                                var t = new Date,
                                    i = new Date(n),
                                    r = t.getFullYear() - i.getFullYear(),
                                    u = t.getMonth() - i.getMonth();
                                return (u < 0 || u == 0 && t.getDate() < i.getDate()) && (r = r - 1), r
                            },
                            c = e(n("#birthdatedropdown").val()),
                            l = parseInt(n("#schedule-province").val()),
                            a = parseInt(n("#schedule-city").val()),
                            o = n("#schedule-creditCardHolder").val(),
                            v = n("#schedule-creditCardHolderTenure").val(),
                            y = parseInt(n("#schedule-occupation").val()),
                            p = n("#schedule-annual-income").val(),
                            s = [0, 2, 4],
                            i, u, r;
                        if (t == "CLO" && (s = [0, 1, 2, 4, 5]), o == "true" && (t == "CLO" || t == "CC")) {
                            t == "CLO" && (window.location.href = "/externalredirect?url=http://adx.io/go/AFECOM07", n(".modal-close").click())
                        } else n(this.container).addClass("ajax-posted"), u = n(this.form).next(), r = n("h5", u), r.text(r.attr("data-text").replace("{0}", n("#schedule-first-name", n(this.form)).val())), n("figure.cover-photo", n(this.container)).removeClass("cover-left-bottom").addClass("cover-left-top").css("background-image", this.initFigureImage)
                    }
                })
            });
            n('a[data-ad-banner="ofw-form-capture"]').each(function() {
                var t = n(this).data("verticalid"),
                    u = [r.call_sched_first_name, r.call_sched_middle_name, r.call_sched_last_name, r.call_sched_email, {
                        type: "text",
                        name: "schedule-mobile",
                        id: "schedule-mobile",
                        label: "Mobile Number (PH):",
                        validate: "required|mobile-number"
                    }, {
                        type: "text",
                        name: "schedule-number-international",
                        id: "schedule-number-international",
                        label: "International Phone Number (optional):",
                        remarks: "InternationalPhoneNumber"
                    }, {
                        type: "select",
                        name: "schedule-alternativeContactInfo",
                        id: "schedule-alternativeContactInfo",
                        label: "Alternative Contact Information:",
                        validate: "required",
                        select_options: [{
                            value: "",
                            text: "Please select..."
                        }, {
                            value: "Skype",
                            text: "Skype"
                        }, {
                            value: "Viber",
                            text: "Viber"
                        }, {
                            value: "Messenger",
                            text: "Messenger"
                        }, {
                            value: "WhatsApp",
                            text: "WhatsApp"
                        }, {
                            value: "Other",
                            text: "Other"
                        }],
                        remarks: "AlternativeContactInfo"
                    }, {
                        type: "text",
                        name: "schedule-alternativeContactInfoDetails",
                        id: "schedule-alternativeContactInfoDetails",
                        label: "Alternative Contact ID/UserName",
                        validate: "required",
                        remarks: "AlternativeContactInfoDetails"
                    }, {
                        type: "text",
                        name: "schedule-income-ofw",
                        id: "schedule-income-ofw",
                        label: "Income per Month (in Peso equivalent):",
                        validate: "required",
                        remarks: "MonthlyIncome"
                    }, {
                        type: "text",
                        name: "schedule-countryWorkIn",
                        id: "schedule-countryWorkIn",
                        label: "Country where you work",
                        validate: "required",
                        remarks: "CountryWorkIn"
                    }, {
                        type: "text",
                        name: "schedule-Occupation",
                        id: "schedule-Occupation",
                        label: "Occupation",
                        validate: "required",
                        remarks: "Occupation"
                    }];
                n(this).AffiliateContactMeModal({
                    verticalId: t,
                    fields: u,
                    errorMessage: e,
                    init: function() {
                        n("#schedule-province", this.form).length && (l(), i == "ECM" && n("#schedule-province", this.form).change(function() {
                            var t = n(this).val();
                            a(t)
                        }));
                        s();
                        i == "CKJ" && b(n(this.form).attr("data-company"))
                    },
                    complete: function() {
                        n(this.container).addClass("ajax-posted");
                        var i = n(this.form).next(),
                            t = n("h5", i);
                        t.text(t.attr("data-text").replace("{0}", n("#schedule-first-name", n(this.form)).val()));
                        n("figure.cover-photo", n(this.container)).removeClass("cover-left-bottom").addClass("cover-left-top")
                    }
                })
            });
            n('a[data-ad-banner="asia-united-bank-corporation-form-capture"]').each(function() {
                var o = n(this).data("verticalid"),
                    t = n(this).data("vertical"),
                    i = 6,
                    f, u;
                t == "CC" && (i = 1, n(this).attr("data-ganame", "formcapture_CreditCard_Aub"));
                f = [r.call_sched_first_name, r.call_sched_middle_name, r.call_sched_last_name, r.call_sched_gender, r.call_sched_mobile, r.call_sched_number, r.call_sched_email, r.call_sched_birthday_dropdown, r.call_sched_province, r.call_sched_city, r.call_sched_occupation, r.call_sched_annual_income, r.call_sched_creditcard_holder, {
                    type: "select",
                    name: "schedule-creditCardHolderTenure",
                    id: "schedule-creditCardHolderTenure",
                    label: "For how long?",
                    select_options: [{
                        value: "",
                        text: "Please select..."
                    }, {
                        value: "0",
                        text: "Less than " + i + " month"
                    }, {
                        value: "1",
                        text: "More than " + i + " month"
                    }],
                    remarks: "CreditCardHolderTenure"
                }];
                u = "/media/Default/eCompareMo/affiliates/aub/AUB_ContactMe_Banner_300x600.jpg";
                t == "CC" && (u = "/media/Default/eCompareMo/affiliates/aub/AUB_ContactMe_Banner_300x600.jpg");
                n(this).AffiliateContactMeModal({
                    fields: f,
                    errorMessage: e,
                    figureImage: u,
                    init: function() {
                        n("#ContactMe-Submit").prop("disabled", !1);
                        n("#schedule-creditCardHolderTenure", this.form).parent().children().addClass("hidden");
                        n("#schedule-creditCardHolder", this.form).change(function() {
                            n(this).val() == "true" ? n("#schedule-creditCardHolderTenure", this.form).attr("data-validate", "required").parent().children().removeClass("hidden") : n("#schedule-creditCardHolderTenure", this.form).removeAttr("data-validate").parent().children().addClass("hidden")
                        });
                        n("#schedule-province", this.form).length && (l(), n("#schedule-city", this.form).length && n("#schedule-province", this.form).change(function() {
                            var t = n(this).val();
                            a(t)
                        }));
                        v(o);
                        s()
                    },
                    complete: function() {
                        var i = n("button[type=submit]", this.form);
                        i.text("Please wait...").prop("disabled", !0);
                        //ga("send", "event", n(this.form).attr("data-ganame"), "SubmittedToAub", window.location.href);
                        t == "CC" && (window.location.href = "/extern/redirection-aub?url=https://www.aub.com.ph/creditcards/ApplyNowExt?utm_campaign=eCompareWeb", n(".modal-close").click())
                    }
                })
            });
            n('a[data-ad-banner="grab-uber-form-capture"]').each(function() {
                var t = n(this).data("verticalid"),
                    i = [{
                        type: "text",
                        name: "schedule-first-name",
                        id: "schedule-first-name",
                        label: u("Operator's  first name:"),
                        validate: "required"
                    }, {
                        type: "text",
                        name: "schedule-middle-name",
                        id: "schedule-middle-name",
                        label: u("Operator's middle name:"),
                        validate: "required"
                    }, {
                        type: "text",
                        name: "schedule-last-name",
                        id: "schedule-last-name",
                        label: u("Operator's last name:"),
                        validate: "required"
                    }, r.call_sched_mobile, r.call_sched_number, r.call_sched_email, r.call_sched_gender, r.call_sched_vehicle_manufacturer, r.call_sched_vehicle_manufacturer_year, r.call_sched_vehicle_manufacturer_model, {
                        type: "select",
                        name: "schedule-platform",
                        id: "schedule-platform",
                        label: "Platform:",
                        validate: "required",
                        select_options: [{
                            value: "",
                            text: "Please select..."
                        }, {
                            value: "Uber",
                            text: "Uber"
                        }, {
                            value: "Grab",
                            text: "Grab"
                        }, {
                            value: "Taxi",
                            text: "Taxi"
                        }],
                        remarks: "Platform"
                    }, {
                        type: "select",
                        name: "schedule-CarsInsured",
                        id: "schedule-CarsInsured",
                        label: "Number of cars to be insured:",
                        validate: "required",
                        select_options: [{
                            value: "",
                            text: "Please select..."
                        }, {
                            value: "1",
                            text: "1"
                        }, {
                            value: "2 or more",
                            text: "2 or more"
                        }],
                        remarks: "NumberOfCarsToBeInsured"
                    }, {
                        type: "select",
                        name: "schedule-typeOfPolicy",
                        id: "schedule-typeOfPolicy",
                        label: "Type of policy:",
                        validate: "required",
                        select_options: [{
                            value: "",
                            text: "Please select..."
                        }, {
                            value: "New",
                            text: "New"
                        }, {
                            value: "Renewal",
                            text: "Renewal"
                        }, {
                            value: "Expired",
                            text: "Expired"
                        }],
                        remarks: "TypeOfPolicy"
                    }, {
                        type: "select",
                        name: "schedule-mortgaged",
                        id: "schedule-mortgaged",
                        label: "Mortgaged?",
                        validate: "required",
                        select_options: [{
                            value: "",
                            text: "Please select..."
                        }, {
                            value: "Yes",
                            text: "Yes"
                        }, {
                            value: "No",
                            text: "No"
                        }],
                        remarks: "Mortgaged"
                    }, r.call_sched_call_time];
                n(this).AffiliateContactMeModal({
                    verticalId: t,
                    fields: i,
                    errorMessage: e,
                    init: function() {
                        n("#schedule-carModel option").hide();
                        n("#schedule-carBrand").on("change", function() {
                            n("#schedule-carModel option").hide();
                            n(this).val() > 0 && (n("#schedule-carModel option[value=" + n(this).val() + "]").show(), n("#schedule-carModel").val(""))
                        });
                        n("#schedule-vehicle-manufacturer", this.form).length && (n("#schedule-vehicle-manufacturer-year", this.form).parent().children().addClass("hidden"), n("#schedule-vehicle-manufacturer-model", this.form).parent().children().addClass("hidden"), y(), n("#schedule-vehicle-manufacturer", this.form).change(function() {
                            var i = n("#schedule-vehicle-manufacturer-year").val(),
                                t = n("#schedule-vehicle-manufacturer").val();
                            p(t);
                            n(this).val().length ? n("#schedule-vehicle-manufacturer-year", this.form).attr("data-validate", "required").parent().children().removeClass("hidden") : (n("#schedule-vehicle-manufacturer-year", this.form).removeAttr("data-validate").parent().children().addClass("hidden"), n("#schedule-vehicle-manufacturer-model", this.form).removeAttr("data-validate").parent().children().addClass("hidden"))
                        }), n("#schedule-vehicle-manufacturer-year", this.form).change(function() {
                            var t = n("#schedule-vehicle-manufacturer-year").val(),
                                i = n("#schedule-vehicle-manufacturer").val();
                            w(t, i);
                            n(this).val().length ? n("#schedule-vehicle-manufacturer-model", this.form).attr("data-validate", "required").parent().children().removeClass("hidden") : n("#schedule-vehicle-manufacturer-model", this.form).removeAttr("data-validate").parent().children().addClass("hidden")
                        }))
                    },
                    complete: function() {
                        n(this.container).addClass("ajax-posted");
                        var i = n(this.form).next(),
                            t = n("h5", i);
                        t.text(t.attr("data-text").replace("{0}", n("#schedule-first-name", n(this.form)).val()));
                        n("figure.cover-photo", n(this.container)).removeClass("cover-left-bottom").addClass("cover-left-top")
                    }
                })
            });
            n('a[data-ad-banner="malayan-insurance-form-capture"]').each(function() {
                var t = n(this).data("product"),
                    f = n(this).data("verticalid"),
                    o = [r.call_sched_first_name, r.call_sched_middle_name, r.call_sched_last_name, r.call_sched_birthday, r.call_sched_mobile, r.call_sched_email, {
                        type: "text",
                        name: "schedule-destination",
                        id: "schedule-destination",
                        label: "Destination:",
                        validate: "required",
                        remarks: "Destination"
                    }, {
                        type: "date",
                        name: "schedule-startDateOfTravel",
                        id: "schedule-startDateOfTravel",
                        label: u("Start date of travel:"),
                        validate: "required",
                        remarks: "StartDateOfTravel"
                    }, {
                        type: "date",
                        name: "schedule-endDateOfTravel",
                        id: "schedule-endDateOfTravel",
                        label: u("End date of travel:"),
                        validate: "required",
                        remarks: "EndDateOfTravel"
                    }];
                n(this).AffiliateContactMeModal({
                    verticalId: f,
                    fields: o,
                    errorMessage: e,
                    init: function() {
                        n("#ContactMe-Submit").prop("disabled", !1);
                        s();
                        i == "CKJ" && b(n(this.form).attr("data-company"))
                    },
                    complete: function() {
                        var u = n("button[type=submit]", this.form),
                            r, i;
                        paymentMethod = n("#schedule-paymentMethod").val();
                        n(this.container).addClass("ajax-posted");
                        r = n(this.form).next();
                        i = n("h5", r);
                        i.text(i.attr("data-text").replace("{0}", n("#schedule-first-name", n(this.form)).val()));
                        n("figure.cover-photo", n(this.container)).removeClass("cover-left-bottom").addClass("cover-left-top")
                    }
                })
            });
            n('a[data-ad-banner="second-hand-cars-form-capture"]').each(function() {
                var t = n(this).data("verticalid");
                require_fields = [r.call_sched_first_name, r.call_sched_middle_name, r.call_sched_last_name, r.call_sched_gender, r.call_sched_birthday_dropdown, r.call_sched_mobile, r.call_sched_number, r.call_sched_email, r.call_sched_province, r.call_sched_city, r.call_sched_occupation, {
                    type: "number",
                    name: "schedule-income",
                    id: "schedule-income",
                    label: u("Income per Month:"),
                    validate: "required|number",
                    remarks: "MonthlyIncome"
                }, r.call_sched_loanAmount, r.call_sched_tenure, r.call_sched_vehicle_manufacturer, r.call_sched_vehicle_manufacturer_year, r.call_sched_vehicle_manufacturer_model, {
                    type: "select",
                    name: "schedule-prospective-car-to-buy",
                    id: "schedule-prospective-car-to-buy",
                    label: "Do you have the prospective car to buy?",
                    validate: "required",
                    select_options: [{
                        value: "YES",
                        text: "YES"
                    }, {
                        value: "NO",
                        text: "NO"
                    }],
                    remarks: "ProspectiveCar"
                }, {
                    type: "select",
                    name: "schedule-seller",
                    id: "schedule-seller",
                    label: "Seller:",
                    validate: "required",
                    select_options: [{
                        value: "PRIVATE SELLER",
                        text: "PRIVATE SELLER"
                    }, {
                        value: "DEALER",
                        text: "DEALER"
                    }],
                    remarks: "Seller"
                }, {
                    type: "number",
                    name: "schedule-downpayment",
                    id: "schedule-downpayment",
                    label: "How much downpayment you are ready to pay?",
                    validate: "required|number",
                    remarks: "Downpayment"
                }, r.call_sched_call_time];
                n(this).AffiliateContactMeModal({
                    verticalId: t,
                    fields: require_fields,
                    errorMessage: e,
                    init: function() {
                        n("#schedule-vehicle-manufacturer", this.form).length && (n("#schedule-vehicle-manufacturer-year", this.form).parent().children().addClass("hidden"), n("#schedule-vehicle-manufacturer-model", this.form).parent().children().addClass("hidden"), y(), n("#schedule-vehicle-manufacturer", this.form).change(function() {
                            var i = n("#schedule-vehicle-manufacturer-year").val(),
                                t = n("#schedule-vehicle-manufacturer").val();
                            p(t);
                            n(this).val().length ? n("#schedule-vehicle-manufacturer-year", this.form).attr("data-validate", "required").parent().children().removeClass("hidden") : (n("#schedule-vehicle-manufacturer-year", this.form).removeAttr("data-validate").parent().children().addClass("hidden"), n("#schedule-vehicle-manufacturer-model", this.form).removeAttr("data-validate").parent().children().addClass("hidden"))
                        }), n("#schedule-vehicle-manufacturer-year", this.form).change(function() {
                            var t = n("#schedule-vehicle-manufacturer-year").val(),
                                i = n("#schedule-vehicle-manufacturer").val();
                            w(t, i);
                            n(this).val().length ? n("#schedule-vehicle-manufacturer-model", this.form).attr("data-validate", "required").parent().children().removeClass("hidden") : n("#schedule-vehicle-manufacturer-model", this.form).removeAttr("data-validate").parent().children().addClass("hidden")
                        }));
                        n("#schedule-province", this.form).length && (l(), i == "ECM" && n("#schedule-province", this.form).change(function() {
                            var t = n(this).val();
                            a(t)
                        }));
                        v(t);
                        s()
                    },
                    complete: function() {
                        n(this.container).addClass("ajax-posted");
                        var i = n(this.form).next(),
                            t = n("h5", i);
                        t.text(t.attr("data-text").replace("{0}", n("#schedule-first-name", n(this.form)).val()));
                        n("figure.cover-photo", n(this.container)).removeClass("cover-left-bottom").addClass("cover-left-top")
                    }
                })
            });
            n('a[data-ad-banner="bca-form-capture"]').each(function() {
                var u = n(this).data("verticalid"),
                    f = n(this).data("vertical"),
                    t = [r.call_sched_first_name, r.call_sched_last_name, r.call_sched_gender, r.call_sched_birthday, r.call_sched_email, r.call_sched_mobile];
                n(this).AffiliateContactMeModal({
                    fields: t,
                    errorMessage: e,
                    figureImage: "https://ckj-main-ai.azureedge.net/media/Default/Cekaja/bca/BCA-CMR-side-images.jpg",
                    init: function() {
                        n("#ContactMe-Submit").prop("disabled", !1);
                        i == "CKJ" && b(n(this.form).attr("data-company"));
                        n(this.form).find("#schedule-email").attr("placeholder", "contoh@net.com");
                        s()
                    },
                    complete: function() {
                        n(this.container).addClass("ajax-posted");
                        var i = n(this.form).next(),
                            t = n("h5", i);
                        t.text(t.attr("data-text").replace("{0}", n("#schedule-first-name", n(this.form)).val()));
                        n("figure.cover-photo", n(this.container)).removeClass("cover-left-bottom").addClass("cover-left-top");
                        n("figure.cover-photo", n(this.container)).css("background-image", "url('https://cdn-vz-main.cekaja.com/media/Default/Cekaja/call-schedule-banner-long.png')")
                    }
                })
            });
            n('a[data-ad-banner="claims-form-capture"]').each(function() {
                var t = n(this).data("verticalid"),
                    i = [{
                        type: "text",
                        name: "schedule-first-name",
                        id: "schedule-first-name",
                        label: "First name of assured/insured:",
                        validate: "required"
                    }, {
                        type: "text",
                        name: "schedule-middle-name",
                        id: "schedule-middle-name",
                        label: "Middle name of assured/insured:",
                        validate: "required"
                    }, {
                        type: "text",
                        name: "schedule-last-name",
                        id: "schedule-last-name",
                        label: "Last name of assured/insured:",
                        validate: "required"
                    }, r.call_sched_mobile, r.call_sched_email, {
                        type: "text",
                        name: "schedule-policy-number",
                        id: "schedule-policy-number",
                        label: "Policy number:",
                        validate: "required",
                        remarks: "PolicyNumber"
                    }],
                    u = "/media/Default/eCompareMo/make-a-claim-form-capture.png";
                n(this).AffiliateContactMeModal({
                    verticalId: t,
                    fields: i,
                    errorMessage: e,
                    figureImage: u,
                    init: function() {},
                    complete: function() {
                        n(this.container).addClass("ajax-posted");
                        var i = n(this.form).next(),
                            t = n("h5", i);
                        t.text(t.attr("data-text").replace("{0}", n("#schedule-first-name", n(this.form)).val()));
                        n("figure.cover-photo", n(this.container)).removeClass("cover-left-bottom").addClass("cover-left-top")
                    }
                })
            });
            n('a[data-ad-banner="renew-policy-form-capture"]').each(function() {
                var t = n(this).data("verticalid");
                require_fields = [r.call_sched_first_name, r.call_sched_last_name, r.call_sched_gender, r.call_sched_mobile, r.call_sched_number, r.call_sched_email, r.call_sched_vehicle_manufacturer, r.call_sched_vehicle_manufacturer_year, r.call_sched_vehicle_manufacturer_model, {
                    type: "date",
                    name: "schedule-calendar",
                    id: "schedule-calendar",
                    label: "When is your car insurance policy expiring?",
                    validate: "required",
                    remarks: "CarInsurancePolicyExpiring"
                }, {
                    type: "text",
                    name: "schedule-PrevInsuranceProvider",
                    id: "schedule-PrevInsuranceProvider",
                    label: "Previous insurance provider:",
                    validate: "required",
                    remarks: "PreviousInsuranceProvider"
                }, r.call_sched_call_time];
                n(this).AffiliateContactMeModal({
                    verticalId: t,
                    fields: require_fields,
                    errorMessage: e,
                    init: function() {
                        s();
                        n("#schedule-vehicle-manufacturer", this.form).length && (n("#schedule-vehicle-manufacturer-year", this.form).parent().children().addClass("hidden"), n("#schedule-vehicle-manufacturer-model", this.form).parent().children().addClass("hidden"), y(), n("#schedule-vehicle-manufacturer", this.form).change(function() {
                            var i = n("#schedule-vehicle-manufacturer-year").val(),
                                t = n("#schedule-vehicle-manufacturer").val();
                            p(t);
                            n(this).val().length ? n("#schedule-vehicle-manufacturer-year", this.form).attr("data-validate", "required").parent().children().removeClass("hidden") : (n("#schedule-vehicle-manufacturer-year", this.form).removeAttr("data-validate").parent().children().addClass("hidden"), n("#schedule-vehicle-manufacturer-model", this.form).removeAttr("data-validate").parent().children().addClass("hidden"))
                        }), n("#schedule-vehicle-manufacturer-year", this.form).change(function() {
                            var t = n("#schedule-vehicle-manufacturer-year").val(),
                                i = n("#schedule-vehicle-manufacturer").val();
                            w(t, i);
                            n(this).val().length ? n("#schedule-vehicle-manufacturer-model", this.form).attr("data-validate", "required").parent().children().removeClass("hidden") : n("#schedule-vehicle-manufacturer-model", this.form).removeAttr("data-validate").parent().children().addClass("hidden")
                        }))
                    },
                    complete: function() {
                        n(this.container).addClass("ajax-posted");
                        var i = n(this.form).next(),
                            t = n("h5", i);
                        t.text(t.attr("data-text").replace("{0}", n("#schedule-first-name", n(this.form)).val()));
                        n("figure.cover-photo", n(this.container)).removeClass("cover-left-bottom").addClass("cover-left-top")
                    }
                })
            });
            n('a[data-toggle="modal"][data-target="#call-schedule"]').each(function() {
                var f = n(this).data("verticalid"),
                    t = [r.call_sched_first_name, r.call_sched_middle_name, r.call_sched_last_name, r.call_sched_gender, r.call_sched_mobile, r.call_sched_number, r.call_sched_email, r.call_sched_call_time];
                switch (f) {
                    case 1:
                        t = i == "CKJ" ? [r.call_sched_first_name, r.call_sched_middle_name, r.call_sched_last_name, r.call_sched_gender, r.call_sched_birthday, r.call_sched_mobile, r.call_sched_number, r.call_sched_email, r.call_sched_province, r.call_sched_city, r.call_sched_occupation, r.call_sched_income, r.call_sched_loanAmount, r.call_sched_tenure, r.call_sched_numOfCards, r.call_sched_call_time, r.call_sched_npwp] : [r.call_sched_first_name, r.call_sched_middle_name, r.call_sched_last_name, r.call_sched_gender, r.call_sched_birthday_dropdown, r.call_sched_mobile, r.call_sched_number, r.call_sched_email, r.call_sched_province, r.call_sched_city, r.call_sched_occupation, r.call_sched_income, r.call_sched_loanAmount, r.call_sched_tenure, r.call_sched_numOfCards, r.call_sched_call_time];
                        break;
                    case 2:
                        t = i == "CKJ" ? [r.call_sched_first_name, r.call_sched_middle_name, r.call_sched_last_name, r.call_sched_gender, r.call_sched_birthday, r.call_sched_mobile, r.call_sched_number, r.call_sched_email, r.call_sched_province, r.call_sched_city, r.call_sched_occupation, r.call_sched_income, r.call_sched_numOfCards, r.call_sched_npwp] : [r.call_sched_first_name, r.call_sched_middle_name, r.call_sched_last_name, r.call_sched_gender, r.call_sched_birthday_dropdown, r.call_sched_mobile, r.call_sched_number, r.call_sched_email, r.call_sched_province, r.call_sched_city, r.call_sched_occupation, r.call_sched_income, r.call_sched_numOfCards, r.call_sched_call_time];
                        break;
                    case 4:
                        t = i == "CKJ" ? [r.call_sched_first_name, r.call_sched_middle_name, r.call_sched_last_name, r.call_sched_gender, r.call_sched_mobile, r.call_sched_number, r.call_sched_email, r.call_sched_call_time, r.call_sched_creditcard_holder] : [r.call_sched_first_name, r.call_sched_last_name, r.call_sched_gender, r.call_sched_mobile, r.call_sched_number, r.call_sched_email, r.call_sched_vehicle_manufacturer, r.call_sched_vehicle_manufacturer_year, r.call_sched_vehicle_manufacturer_model, {
                            type: "date",
                            name: "schedule-calendar",
                            id: "schedule-calendar",
                            label: "When is your car insurance policy expiring?",
                            validate: "required",
                            remarks: "CarInsurancePolicyExpiring"
                        }, {
                            type: "text",
                            name: "schedule-PrevInsuranceProvider",
                            id: "schedule-PrevInsuranceProvider",
                            label: "Previous insurance provider:",
                            validate: "required",
                            remarks: "PreviousInsuranceProvider"
                        }, r.call_sched_call_time];
                        break;
                    case 5:
                        t = [r.call_sched_first_name, r.call_sched_middle_name, r.call_sched_last_name, r.call_sched_gender, r.call_sched_mobile, r.call_sched_number, r.call_sched_email, r.call_sched_call_time, r.call_sched_creditcard_holder];
                        break;
                    case 6:
                        t = i == "CKJ" ? [r.call_sched_first_name, r.call_sched_middle_name, r.call_sched_last_name, r.call_sched_gender, r.call_sched_birthday, r.call_sched_mobile, r.call_sched_number, r.call_sched_email, r.call_sched_province, r.call_sched_city, r.call_sched_occupation, r.call_sched_income, r.call_sched_loanAmount, r.call_sched_tenure, r.call_sched_call_time, r.call_sched_npwp] : [r.call_sched_first_name, r.call_sched_middle_name, r.call_sched_last_name, r.call_sched_gender, r.call_sched_birthday_dropdown, r.call_sched_mobile, r.call_sched_number, r.call_sched_email, r.call_sched_province, r.call_sched_city, r.call_sched_occupation, r.call_sched_income, r.call_sched_loanAmount, r.call_sched_tenure, r.call_sched_call_time];
                        break;
                    case 7:
                        t = i == "CKJ" ? [r.call_sched_first_name, r.call_sched_middle_name, r.call_sched_last_name, r.call_sched_gender, r.call_sched_birthday, r.call_sched_mobile, r.call_sched_number, r.call_sched_email, r.call_sched_province, r.call_sched_city, r.call_sched_occupation, r.call_sched_income, r.call_sched_loanAmount, r.call_sched_tenure, r.call_sched_call_time, r.call_sched_npwp] : [r.call_sched_first_name, r.call_sched_middle_name, r.call_sched_last_name, r.call_sched_gender, r.call_sched_birthday_dropdown, r.call_sched_mobile, r.call_sched_number, r.call_sched_email, r.call_sched_province, r.call_sched_city, r.call_sched_occupation, {
                            type: "number",
                            name: "schedule-income",
                            id: "schedule-income",
                            label: u("Income per Month:"),
                            validate: "required|number",
                            remarks: "MonthlyIncome"
                        }, r.call_sched_loanAmount, r.call_sched_tenure, r.call_sched_vehicle_manufacturer, r.call_sched_vehicle_manufacturer_year, r.call_sched_vehicle_manufacturer_model, {
                            type: "select",
                            name: "schedule-prospective-car-to-buy",
                            id: "schedule-prospective-car-to-buy",
                            label: "Do you have the prospective car to buy?",
                            validate: "required",
                            select_options: [{
                                value: "YES",
                                text: "YES"
                            }, {
                                value: "NO",
                                text: "NO"
                            }],
                            remarks: "ProspectiveCar"
                        }, {
                            type: "select",
                            name: "schedule-seller",
                            id: "schedule-seller",
                            label: "Seller:",
                            validate: "required",
                            select_options: [{
                                value: "PRIVATE SELLER",
                                text: "PRIVATE SELLER"
                            }, {
                                value: "DEALER",
                                text: "DEALER"
                            }],
                            remarks: "Seller"
                        }, {
                            type: "number",
                            name: "schedule-downpayment",
                            id: "schedule-downpayment",
                            label: "How much downpayment you are ready to pay?",
                            validate: "required|number",
                            remarks: "Downpayment"
                        }, r.call_sched_call_time]
                }
                n(this).AffiliateContactMeModal({
                    verticalId: f,
                    fields: t,
                    errorMessage: e,
                    init: function() {
                        n("#schedule-province", this.form).length && (l(), n("#schedule-province", this.form).change(function() {
                            var t = n(this).val();
                            a(t)
                        }));
                        v(f);
                        s();
                        i == "CKJ" && b(n(this.form).attr("data-company"));
                        n("#schedule-vehicle-manufacturer", this.form).length && (n("#schedule-vehicle-manufacturer-year", this.form).parent().children().addClass("hidden"), n("#schedule-vehicle-manufacturer-model", this.form).parent().children().addClass("hidden"), y(), n("#schedule-vehicle-manufacturer", this.form).change(function() {
                            var i = n("#schedule-vehicle-manufacturer-year").val(),
                                t = n("#schedule-vehicle-manufacturer").val();
                            p(t);
                            n(this).val().length ? n("#schedule-vehicle-manufacturer-year", this.form).attr("data-validate", "required").parent().children().removeClass("hidden") : (n("#schedule-vehicle-manufacturer-year", this.form).removeAttr("data-validate").parent().children().addClass("hidden"), n("#schedule-vehicle-manufacturer-model", this.form).removeAttr("data-validate").parent().children().addClass("hidden"))
                        }), n("#schedule-vehicle-manufacturer-year", this.form).change(function() {
                            var t = n("#schedule-vehicle-manufacturer-year").val(),
                                i = n("#schedule-vehicle-manufacturer").val();
                            w(t, i);
                            n(this).val().length ? n("#schedule-vehicle-manufacturer-model", this.form).attr("data-validate", "required").parent().children().removeClass("hidden") : n("#schedule-vehicle-manufacturer-model", this.form).removeAttr("data-validate").parent().children().addClass("hidden")
                        }))
                    },
                    complete: function() {
                        n(this.container).addClass("ajax-posted");
                        var i = n(this.form).next(),
                            t = n("h5", i);
                        t.text(t.attr("data-text").replace("{0}", n("#schedule-first-name", n(this.form)).val()));
                        n("figure.cover-photo", n(this.container)).removeClass("cover-left-bottom").addClass("cover-left-top")
                    }
                })
            })
        }, function(n) {
            window.onload = function() {
                var t = window.location.hash;
                n("a" + t + ":first").length && n("a" + t + ":first").click()
            }
        }],
        u = function() {
            f()
        },
        f = function() {
            r.forEach(function(r) {
                r(n, t, i)
            })
        };
    return {
        init: u
    }
}(jQuery, document, document.PortalName);
contactmodal.init();
contactmerequest = function(n, t, i) {
    var r = [function(n) {
            var e = i.location.pathname,
                s = URL_AffiliateServiceApi,
                f = n(".capture-form").length >= 1 ? n(".capture-form") : n(".step-wizard-capture"),
                o = f.data("gacategory"),
                c = f.find("button").data("gaaxacategory"),
                l = function() {
                    var n = "test";
                    try {
                        return localStorage.setItem(n, n), localStorage.removeItem(n), !0
                    } catch (t) {
                        return !1
                    }
                },
                r = l(),
                u = 1;
            var h = function() {
                    var t = moment().utc(),
                        n = {};
                    return n.CallStartTime = t.format(), n.CallEndTime = t.format(), n
                },
                a = function(n) {
                    var r, i, t;
                    if (n.indexOf(" ") >= 0) {
                        for (t = n.split(" "), r = "", i = 0; i < t.length - 1; i++) r += t[i] + " ";
                        t = [r, t[t.length > 2 ? t.length - 1 : 1]]
                    } else t = [n, ""];
                    return t
                },
                v = function(l) {
                    var b = l.data("guid"),
                        y = parseInt(l.data("vertical")),
                        k = l.find("[type=submit]"),
                        et = l.find("button.next"),
                        d = l.find("button.back"),
                        w;
                    o = l.data("gacategory");
                    var g = l.data("redirectto") == null ? "thank-you-promo" : l.data("redirectto"),
                        nt = l.data("redirecttoaxa") == null ? "https://ion.axa.com.ph/Campaigns.aspx?" : l.data("redirecttoaxa"),
                        v = n(".step-wizard"),
                        tt = function() {
                            var t = {
                                ApplyDate: moment().utc().format()
                            };
                            return l.find("input, select").each(function() {
                                var i = n(this).attr("name"),
                                    r, u;
                                typeof i != "undefined" && (i == "name" || i == "firstname" || i == "lastname" || i == "email" || i == "gender" || i == "telephonenumber" || i == "fullname" || i == "mobilephonenumber" || i == "agree" || i == "list" || i == "submit" || i == "FirstName" || i == "LastName" || i == "Email" || i == "Gender" || i == "TelephoneNumber" || i == "FullName" || (n(this).attr("type") == "checkbox" || n(this).attr("type") == "radio" ? n("[name=" + i + "]:checked").length > 1 ? (r = "", n("[name=" + i + "]:checked").each(function() {
                                    r += n(this).val() + ", "
                                }), t[i] = r) : t[i] = n("[name=" + i + "]:checked").val() : i == "Birthdate" ? (u = ut(n(this).val()), t.Birthdate = n(this).val(), t.Age = u) : i == "CardNumber" ? t[i] = "2018-" + n(this).val() : i == "EmploymentType" || i == "Occupation" ? (t.Occupation = n(this).find("option:selected").text(), t.EmploymentTypeId = n(this).val()) : i == "Province" ? (t.Province = n(this).find("option:selected").text(), t.ProvinceId = n(this).val()) : i == "Region" ? (t.City = n(this).find("option:selected").text(), t.RegionId = n(this).val()) : i == "VehicleManufacturer" ? (t.VehicleManufacturer = n(this).find("option:selected").text(), t.VehicleManufacturerId = n(this).val()) : i == "VehicleModel" ? (t.VehicleModel = n(this).find("option:selected").text(), t.VehicleModelId = n(this).val()) : t[i] = n(this).val()))
                            }), t.FormURL = i.location.href, t
                        },
                        ot = function() {
                            return cookieUTM = Cookies.get("UTM"), UTMParameters = cookieUTM == null ? {
                                utm_source: null,
                                utm_medium: null,
                                utm_term: null,
                                utm_content: null,
                                utm_campaign: null
                            } : JSON.parse(cookieUTM)
                        },
                        it = function() {
                            var n = "";
                            return localStorage.getItem("IPAddress") != null && (n = localStorage.getItem("IPAddress")), n
                        },
                        p = function() {
                            return n("#gender", l).length > 0 ? n("#gender", l).val() == "Pria" || n("#gender", l).val() == "Laki-laki" || n("#gender", l).val() == "male" ? !0 : !1 : null
                        },
                        st = function() {
                            k.removeAttr("disabled")
                        },
                        ht = function() {
                            var t = n("button[type=submit]", f),
                                r = t.data("label"),
                                i = t.outerWidth();
                            t.text("").attr("disabled", "disabled").append('<strong class="loading"><span><\/span><span><\/span><span><\/span><\/strong>').css({
                                width: i + "px"
                            })
                        },
                        rt = function() {
                            var t = n("button[type=submit]", f),
                                i = t.data("label");
                            t.text(i).removeAttr("disabled").removeAttr("style").find(".loading").remove()
                        },
                        ct = function() {
                            i.location.href = g
                        },
                        lt = function() {
                            //ga("send", "event", c, "RedirectToAxa", 5);
                            rt();
                            switch (e) {
                                case "/axa/my-ambition":
                                    i.location.href = "/extern/redirection-axa?url=" + nt + "token_ecomparemo=" + n("#token_ecomparemo", l).val() + ",first_name=" + n("#firstname", l).val() + ",middle_name=" + n("#middlename", l).val() + ",last_name=" + n("#lastname", l).val() + ",dob=" + n("#birthdate", l).val().replace(/\//g, "-") + ",email=" + n("#email", l).val() + ",gender=" + n("#gender", l).val() + ",savingsplan=" + n("#investment_amount", l).val().replace(/\,/g, "");
                                    break;
                                case "/axa/smart-traveller":
                                    i.location.href = "/extern/redirection-axa?url=" + nt + "token_ecomparemo=" + n("#token_ecomparemo", l).val() + ",trip_type=" + n("[name=TripType]:checked", l).val() + ",region=" + n("#region", l).val() + ",adult_no=" + n("#adult_no", l).val() + ",child_no=" + n("#child_no", l).val() + ",departure_date=" + n("#departure_date", l).val() + ",return_date=" + n("#return_date", l).val() + ",first_name=" + n("#firstname", l).val() + ",last_name=" + n("#lastname", l).val() + ",dob=" + n("#birthdate", l).val() + ",phone_no=" + n("#telephonenumber", l).val() + ",email=" + n("#email", l).val() + ",gender=" + n("#gender", l).val()
                            }
                        },
                        ut = function(n) {
                            var i = new Date,
                                r = t.PortalName == "CKJ" ? new Date(n.split("/")[1] + "/" + n.split("/")[0] + "/" + n.split("/")[2]) : new Date(n),
                                u = i.getFullYear() - r.getFullYear(),
                                f = i.getMonth() - r.getMonth();
                            return (f < 0 || f == 0 && i.getDate() < r.getDate()) && (u = u - 1), u
                        },
                        at = function(i) {
                            var f = [],
                                u, e, o;
                            switch (i) {
                                case 1:
                                    u = "/lookups/getCLOEmploymentType";
                                    break;
                                case 2:
                                    u = "/lookups/getCCEmploymentType";
                                    break;
                                case 6:
                                    u = "/lookups/getHLOEmploymentType";
                                    break;
                                case 7:
                                    u = "/lookups/getVLOEmploymentType";
                                    break;
                                default:
                                    u = "/lookups/getEmploymentType"
                            }
                            e = function(t) {
                                n.each(t, function(t, i) {
                                    n("#EmploymentType").append(n("<option><\/option>").val(i.value).html(i.text))
                                })
                            };
                            o = function() {
                                n.ajax({
                                    url: u,
                                    method: "GET",
                                    success: function(n) {
                                        var u = JSON.parse(n.Result);
                                        for (x = 0; x < u.length; x++) f.push({
                                            value: u[x].EmploymentTypeId,
                                            text: u[x].DisplayedName
                                        });
                                        r && localStorage.setItem(t.PortalName + "_vertical_id=" + i + "_employment", JSON.stringify(f));
                                        e(f)
                                    }
                                })
                            };
                            r ? localStorage.getItem(t.PortalName + "_vertical_id=" + i + "_employment") !== null ? (f = JSON.parse(localStorage.getItem(t.PortalName + "_vertical_id=" + i + "_employment")), e(f)) : o() : o()
                        },
                        vt = function() {
                            var i = [],
                                e = "/lookups/getprovince",
                                u = function(t) {
                                    n.each(t, function(t, i) {
                                        n("#Province").append(n("<option><\/option>").val(i.value).html(i.text))
                                    })
                                },
                                f = function() {
                                    n.ajax({
                                        url: e,
                                        method: "GET",
                                        success: function(n) {
                                            var f = JSON.parse(n.Result);
                                            for (x = 0; x < f.length; x++) i.push({
                                                value: f[x].ProvinceId,
                                                text: f[x].DisplayedName
                                            });
                                            r && localStorage.setItem(t.PortalName + "_province", JSON.stringify(i));
                                            u(i)
                                        }
                                    })
                                };
                            r ? localStorage.getItem(t.PortalName + "_province") !== null ? (i = JSON.parse(localStorage.getItem(t.PortalName + "_province")), u(i)) : f() : f()
                        },
                        ft = function(i) {
                            var u;
                            if (i > 0) {
                                var u = [{
                                        value: "",
                                        text: "Please select..."
                                    }],
                                    f = function(t) {
                                        n("#Region").html("");
                                        n.each(t, function(t, i) {
                                            n("#Region").append(n("<option><\/option>").val(i.value).html(i.text))
                                        })
                                    },
                                    e = function() {
                                        n.ajax({
                                            url: "/lookups/getregion?ProvinceId=" + i,
                                            method: "GET",
                                            type: "JSON",
                                            success: function(n) {
                                                var n = JSON.parse(n.Result);
                                                for (x = 0; x < n.length; x++) u.push({
                                                    value: n[x].RegionId,
                                                    text: n[x].DisplayedName
                                                });
                                                r && localStorage.setItem(t.PortalName + "_province_" + i, JSON.stringify(u));
                                                f(u)
                                            }
                                        })
                                    };
                                r ? localStorage.getItem(t.PortalName + "_province_" + i) !== null ? (u = JSON.parse(localStorage.getItem(t.PortalName + "_province_" + i)), f(u)) : e() : e()
                            }
                        },
                        yt = function() {
                            var i = [],
                                e = "/lookups/getmotvehicleManufacturer",
                                u = function(t) {
                                    n.each(t, function(t, i) {
                                        n("#VehicleManufacturer").append(n("<option><\/option>").val(i.value).html(i.text))
                                    })
                                },
                                f = function() {
                                    n.ajax({
                                        url: e,
                                        method: "GET",
                                        success: function(n) {
                                            var f = JSON.parse(n.Result);
                                            for (x = 0; x < f.length; x++) i.push({
                                                value: f[x].VehicleManufacturerId,
                                                text: f[x].DisplayedName
                                            });
                                            r && localStorage.setItem(t.PortalName + "_vehiclemanufacturer", JSON.stringify(i));
                                            u(i)
                                        }
                                    })
                                };
                            r ? localStorage.getItem(t.PortalName + "_vehiclemanufacturer") !== null ? (i = JSON.parse(localStorage.getItem(t.PortalName + "_vehiclemanufacturer")), u(i)) : f() : f()
                        },
                        pt = function(i) {
                            var u;
                            if (i > 0) {
                                var u = [{
                                        value: "",
                                        text: "Please select..."
                                    }],
                                    f = function(t) {
                                        n("#VehicleModel").html("");
                                        n("#VehicleModel").html('<option value="">Please select...<\/option>');
                                        n("#VehicleManufacturerYear").html("");
                                        n.each(t, function(t, i) {
                                            n("#VehicleManufacturerYear").append(n("<option><\/option>").val(i.value).html(i.text))
                                        })
                                    },
                                    e = function() {
                                        n.ajax({
                                            url: "/lookups/getmotyear?vehicleManufacturerId=" + i,
                                            method: "GET",
                                            type: "JSON",
                                            success: function(n) {
                                                var n = JSON.parse(n.Result);
                                                for (x = 0; x < n.length; x++) u.push({
                                                    value: n[x].Year,
                                                    text: n[x].Year
                                                });
                                                r && localStorage.setItem(t.PortalName + "_vehicleManufacturerId_" + i, JSON.stringify(u));
                                                f(u)
                                            }
                                        })
                                    };
                                r ? localStorage.getItem(t.PortalName + "_vehicleManufacturerId_" + i) !== null ? (u = JSON.parse(localStorage.getItem(t.PortalName + "_vehicleManufacturerId_" + i)), f(u)) : e() : e()
                            }
                        },
                        wt = function(i, u) {
                            var f;
                            if (i > 0 || u > 0) {
                                var f = [{
                                        value: "",
                                        text: "Please select..."
                                    }],
                                    e = function(t) {
                                        n("#VehicleModel").html("");
                                        n.each(t, function(t, i) {
                                            n("#VehicleModel").append(n("<option><\/option>").val(i.value).html(i.text))
                                        })
                                    },
                                    o = function() {
                                        n.ajax({
                                            url: "/lookups/getmotvehiclemodel?year=" + i + "&vehiclemanufacturerid=" + u,
                                            method: "GET",
                                            type: "JSON",
                                            success: function(n) {
                                                var n = JSON.parse(n.Result);
                                                for (x = 0; x < n.length; x++) f.push({
                                                    value: n[x].VehicleTypeModelId,
                                                    text: n[x].DisplayedName
                                                });
                                                r && localStorage.setItem(t.PortalName + "_vehicleManufacturerYear=" + i + "_vehicleManufacturerId=" + u, JSON.stringify(f));
                                                e(f)
                                            }
                                        })
                                    };
                                r ? localStorage.getItem(t.PortalName + "_vehicleManufacturerYear=" + i + "_vehicleManufacturerId=" + u) !== null ? (f = JSON.parse(localStorage.getItem(t.PortalName + "_vehicleManufacturerYear=" + i + "_vehicleManufacturerId=" + u)), e(f)) : o() : o()
                            }
                        };
                    n("#EmploymentType").length > 0 && at(y);
                    n("#Province", this.form).length && (vt(), n("#Province", this.form).change(function() {
                        var t = n(this).val();
                        ft(t)
                    }));
                    n("#ProvinceStatic", this.form).length && n("#ProvinceStatic", this.form).change(function() {
                        var t = n(this).val();
                        ft(t)
                    });
                    n("#ExistingCarInsurance", this.form).length && (w = (new Date).toLocaleDateString(), n("#CarInsurancePolicyExpiring", this.form).parent().children().addClass("hidden"), n("#ExistingCarInsurance", this.form).change(function() {
                        var i = n(this).val();
                        n(this).val().length ? i == "Yes" ? n("#CarInsurancePolicyExpiring", this.form).attr("data-validate", "required").parent().children().removeClass("hidden") : (t.getElementById("CarInsurancePolicyExpiring").value = w, n("#CarInsurancePolicyExpiring", this.form).parent().children().addClass("hidden")) : (t.getElementById("CarInsurancePolicyExpiring").value = w, n("#CarInsurancePolicyExpiring", this.form).removeAttr("data-validate").parent().children().addClass("hidden"))
                    }));
                    n("#VehicleManufacturer", this.form).length && (n("#VehicleManufacturerYear", this.form).parent().children().addClass("hidden"), n("#VehicleModel", this.form).parent().children().addClass("hidden"), yt(), n("#VehicleManufacturer", this.form).change(function() {
                        var i = n("#VehicleManufacturerYear").val(),
                            t = n("#VehicleManufacturer").val();
                        pt(t);
                        n(this).val().length ? n("#VehicleManufacturerYear", this.form).attr("data-validate", "required").parent().children().removeClass("hidden") : (n("#VehicleManufacturerYear", this.form).removeAttr("data-validate").parent().children().addClass("hidden"), n("#VehicleModel", this.form).removeAttr("data-validate").parent().children().addClass("hidden"))
                    }), n("#VehicleManufacturerYear", this.form).change(function() {
                        var t = n("#VehicleManufacturerYear").val(),
                            i = n("#VehicleManufacturer").val();
                        wt(t, i);
                        n(this).val().length ? n("#VehicleModel", this.form).attr("data-validate", "required").parent().children().removeClass("hidden") : n("#VehicleModel", this.form).removeAttr("data-validate").parent().children().addClass("hidden")
                    }));
                    k.bind("click", function(r) {
                        var at = this,
                            et, v, ft, c, rt;
                        r.preventDefault();
                        var g = l.find("[name=agree]"),
                            nt = l.find("[name=AgreeAxa]"),
                            u = !0,
                            vt = function(n) {
                                n.closest(".form-group").removeClass("form-error").find(".form-note.error").remove()
                            };
                        if (n(l).find("[data-valtype]").each(function() {
                                var h, f, e, c, r, w, b, i, t;
                                for (vt(n(this)), h = n(this).data("valtype").split("|"), f = 0; f < h.length; f++)
                                    if (n(this).is(":visible") || n(l).hasClass("step-wizard-capture")) switch (h[f]) {
                                        case "required":
                                            (n(this).val() === null || n(this).val() === "") && (n(this).closest(".form-group").addClass("form-error"), n(this).closest(".form-group").append("<span class='form-note error required'>" + n(this).data("valmsg") + "<\/span>"), u = !1);
                                            break;
                                        case "lettersonly":
                                            n(this).val() !== "" && (e = /^[A-Za-z\s\.'-]{1,}[A-Za-z\s]{0,}$/, e.test(n(this).val()) === !1 && (n(this).closest(".form-group").addClass("form-error"), t = "This field only accepts letters (A-z) and the following symbols ( - . ' ).", n(this).data("valmsg") != null && (t = n(this).data("valmsg")), n(this).closest(".form-group").append("<span class='form-note error'>" + t + "<\/span>"), u = !1));
                                            break;
                                        case "email":
                                            n(this).val() !== "" && (e = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, e.test(n(this).val()) === !1 && (n(this).closest(".form-group").addClass("form-error"), n(this).closest(".form-group").append("<span class='form-note error'>" + n(this).data("valemailmsg") + "<\/span>"), u = !1));
                                            break;
                                        case "number":
                                            n(this).val() !== "" && isNaN(n(this).val()) && (n(this).closest(".form-group").addClass("form-error"), t = "This field must be a number.", n(this).data("valmsg") != null && (t = n(this).data("valmsg")), n(this).closest(".form-group").append("<span class='form-note error'>" + t + "<\/span>"), u = !1);
                                            break;
                                        case "telephonenumber":
                                            n(this).val() !== "" && n(this).val().length < 7 && (n(this).closest(".form-group").addClass("form-error"), n(this).closest(".form-group").append("<span class='form-note error'>Please enter a valid mobile number.<\/span>"), u = !1);
                                            break;
                                        case "checkbox":
                                            (n(this).find("input[type=checkbox]:checked").length == 0 && n(this).find("input[type=radio]").length == 0 || n(this).find("input[type=radio]:checked").length == 0 && n(this).find("input[type=checkbox]").length == 0) && (n(this).closest(".form-group").addClass("form-error"), n(this).closest(".form-group").append("<span class='form-note error'>" + n(this).data("valmsg") + "<\/span>"), u = !1);
                                            break;
                                        case "investment":
                                            n(this).val() !== "" && (i = parseInt(n(this).val().replace(/\,/g, "")), (i > 125e3 || i < 5e4) && (n(this).closest(".form-group").addClass("form-error"), n(this).closest(".form-group").append("<span class='form-note error'>Minimum of Php 50,000 to a maximum of Php 125,000<\/span>"), u = !1));
                                            break;
                                        case "telephonenumberaxa":
                                            n(this).val() !== "" && (c = n(this).val().length, (c > 15 || c < 7) && (n(this).closest(".form-group").addClass("form-error"), n(this).closest(".form-group").append("<span class='form-note error'>Please enter a valid phone number.<\/span>"), u = !1));
                                            break;
                                        case "departuredate":
                                            n(this).val() !== "" && (r = new Date(n(this).val()), (r < (new Date).setDate((new Date).getDate() + 0) || r > (new Date).setDate((new Date).getDate() + 182)) && (n(this).closest(".form-group").addClass("form-error"), n(this).closest(".form-group").append("<span class='form-note error'>Date should be greater than present date and maximum of 6 months from the present date.<\/span>"), u = !1));
                                            break;
                                        case "returndate":
                                            if (n(this).val() !== "") {
                                                var r = new Date(n("#departure_date").val()),
                                                    y = new Date(n("#departure_date").val()),
                                                    a = new Date(n(this).val()),
                                                    p = new Date(r.setDate(r.getDate() + 182));
                                                (a > p || a <= y) && (n(this).closest(".form-group").addClass("form-error"), n(this).closest(".form-group").append("<span class='form-note error'>Date should be greater than Departure Date and maximum of 182 days. <\/span>"), u = !1)
                                            }
                                            break;
                                        case "Birthdate":
                                        case "birthdate":
                                            if (n(this).val() != "") {
                                                var v = ut(n(this).val()),
                                                    o = 18,
                                                    s = 200;
                                                n(this).data("agelimit") != null && (o = n(this).data("agelimit").split("|")[0] != null ? n(this).data("agelimit").split("|")[0] : 18, s = n(this).data("agelimit").split("|")[1] != null ? n(this).data("agelimit").split("|")[1] : 200);
                                                w = "You must be " + o + " years of age or older.";
                                                b = "You must be younger than " + s;
                                                v < o ? (n(this).closest(".form-group").addClass("form-error"), n(this).data("valmsg") == null ? n(this).closest(".form-group").append("<span class='form-note error'>You must be " + o + " years of age or older.<\/span>") : n(this).closest(".form-group").append("<span class='form-note error'>" + n(this).data("valmsg") + "<\/span>"), u = !1) : v > s && (n(this).closest(".form-group").addClass("form-error"), n(this).data("valmsg") == null ? n(this).closest(".form-group").append("<span class='form-note error'>You must be younger than " + s + ".<\/span>") : n(this).closest(".form-group").append("<span class='form-note error'>" + n(this).data("valmsg") + "<\/span>"), u = !1)
                                            }
                                            break;
                                        case "loanCN":
                                            n(this).val() !== "" && (i = parseInt(n(this).val().replace(/\./g, "")), (i < 5e6 || i > 2e8) && (n(this).closest(".form-group").addClass("form-error"), n(this).closest(".form-group").append("<span class='form-note error'>" + n(this).data("valmsg") + "<\/span>"), u = !1));
                                            break;
                                        case "cardNumber":
                                            n(this).val() !== "" && (isNaN(n(this).val()) || n(this).val().length !== 6) && (n(this).closest(".form-group").addClass("form-error"), t = "This field must be a number and must be 6 digits.", n(this).data("valmsg") != null && (t = n(this).data("valmsg")), n(this).closest(".form-group").append("<span class='form-note error'>" + t + "<\/span>"), u = !1)
                                    }
                                    u && vt(n(this))
                            }), n(g).length > 0 && !n(g).is(":checked") ? (n(g).closest(".checkbox").find("span").remove(), et = n(g).data("valmsg") ? n(g).data("valmsg") : "You have to check this box to continue.", n(g).closest(".checkbox").prepend("<span class='form-note error'>" + et + "<\/span>"), u = !1) : n(g).closest(".checkbox").find(".form-note.error").remove(), (e == "/axa/my-ambition" || e == "/axa/smart-traveller") && (n(nt).length > 0 && !n(nt).is(":checked") ? (n(nt).closest(".checkbox").find("span").remove(), et = n(nt).data("valmsg") ? n(nt).data("valmsg") : "You have to check this box to continue.", n(nt).closest(".checkbox").prepend("<span class='form-note error'>" + et + "<\/span>"), u = !1) : n(nt).closest(".checkbox").find(".form-note.error").remove()), u) {
                            ht();
                            ga && o && //ga("send", "event", o, "formsubmit", 5);
                            t.PortalName == "CKJ" ? n(at).closest("form").find("input.format").each(function() {
                                var t = n(this).val().replace(/\./g, "");
                                n(this).val(t)
                            }) : n(at).closest("form").find("input.pesoformat").each(function() {
                                var t = n(this).val().replace(/\,/g, "");
                                n(this).val(t)
                            });
                            v = ot();
                            n("#lastname", l).length != 1 ? (ft = a(n("#fullname").val()), c = {
                                AffiliateGuid: b,
                                VerticalId: y,
                                FirstName: ft[0],
                                LastName: ft[1],
                                Email: n("#email", l).val(),
                                IsMale: p(),
                                TelephoneNumber: n("#telephonenumber", l).val(),
                                MobilePhoneNumber: n("#mobilephonenumber", l).val(),
                                Remarks: JSON.stringify(tt()),
                                utm_source: v.utm_source,
                                utm_medium: v.utm_medium,
                                utm_term: v.utm_term,
                                utm_content: v.utm_content,
                                utm_campaign: v.utm_campaign,
                                IPAddress: it()
                            }) : c = {
                                AffiliateGuid: b,
                                VerticalId: y,
                                FirstName: n("#firstname", l).val(),
                                MiddleName: n("#middlename", l).val(),
                                LastName: n("#lastname", l).val(),
                                Email: n("#email", l).val(),
                                IsMale: p(),
                                TelephoneNumber: n("#telephonenumber", l).val(),
                                MobilePhoneNumber: n("#mobilephonenumber", l).val(),
                                Remarks: JSON.stringify(tt()),
                                utm_source: v.utm_source,
                                utm_medium: v.utm_medium,
                                utm_term: v.utm_term,
                                utm_content: v.utm_content,
                                utm_campaign: v.utm_campaign,
                                IPAddress: it()
                            };
                            c.FormUrl = i.location.href;
                            var yt = n("#TimeAvailable", f).val(),
                                w = moment().startOf("day"),
                                k = moment().startOf("day");
                            if (t.PortalName == "ECM")
                                if (n("#TimeAvailable", f).length > 0) {
                                    switch (yt) {
                                        default: w = moment();k = moment();
                                        break;
                                        case "ASAP":
                                                w.add(8, "hours");k.add(20, "hours");
                                            break;
                                        case "Noontime Today":
                                                w.add(11, "hours");k.add(14, "hours");
                                            break;
                                        case "Afternoon Today":
                                                w.add(14, "hours");k.add(18, "hours");
                                            break;
                                        case "Tomorrow Morning":
                                                w.add(1, "days");k.add(1, "days");w.add(8, "hours");k.add(11, "hours");
                                            break;
                                        case "Tomorrow Noontime":
                                                w.add(1, "days");k.add(1, "days");w.add(11, "hours");k.add(14, "hours");
                                            break;
                                        case "Tomorrow Afternoon":
                                                w.add(1, "days");k.add(1, "days");w.add(14, "hours");k.add(18, "hours")
                                    }
                                    c.StartDate = w.utc().format();
                                    c.EndDate = k.utc().format()
                                } else rt = h(), c.StartDate = rt.CallStartTime, c.EndDate = rt.CallEndTime;
                            else rt = h(), c.StartDate = rt.CallStartTime, c.EndDate = rt.CallEndTime;
                            n.ajax({
                                url: s + "/api/CallSchedules/AddCallSchedule",
                                method: "POST",
                                data: c,
                                crossDomain: !0,
                                error: st
                            }).done(function() {
                                n.ajax({
                                    url: s + "/api/sendy/subscribe",
                                    method: "POST",
                                    crossDomain: !0,
                                    data: {
                                        Name: n("#lastname", l).length != 1 ? ft[0] + ft[1] : n("#firstname", l).val() + " " + n("#lastname", l).val(),
                                        Email: c.Email,
                                        Telephone: c.TelephoneNumber,
                                        MobilePhoneNumber: c.MobilePhoneNumber,
                                        Gender: p(),
                                        Birthdate: n("#birthdate", l).val(),
                                        ApplyDate: moment().utc().format(),
                                        List: n("[name*='list']").val()
                                    }
                                }).always(function() {
                                    e == "/axa/my-ambition" || e == "/axa/smart-traveller" ? lt() : ct()
                                })
                            })
                        } else d.click();
                        r.stopPropagation()
                    });
                    et.bind("click", function(t) {
                        t.preventDefault();
                        n("fieldset[data-step=" + u + "]").removeClass("active").removeClass("show").addClass("hide");
                        u = u + 1;
                        n("fieldset[data-step=" + u + "]").removeClass("hide").addClass("active").addClass("show");
                        v.find("li").removeClass("active");
                        v.find("li:nth-child(" + u + ")").addClass("active")
                    });
                    d.bind("click", function(t) {
                        t.preventDefault();
                        console.log(u);
                        n("fieldset[data-step=" + u + "]").removeClass("active").removeClass("show").addClass("hide");
                        u = u - 1;
                        n("fieldset[data-step=" + u + "]").removeClass("hide").addClass("active").addClass("show");
                        v.find("li").removeClass("active");
                        v.find("li:nth-child(" + u + ")").addClass("active")
                    })
                };
            n(f).each(function() {
                v(n(this))
            })
        }],
        u = function() {
            f(n, t, i)
        },
        f = function(n, t, i) {
            r.forEach(function(r) {
                r(n, t, i)
            })
        };
    return {
        init: u
    }
}(jQuery, document, window);
contactmerequest.init();
ga_tracker = function(n, t) {
    var i = [function(n) {
            var t = n("[data-track]");
            t.length
        }, function(n) {
            var t = n('[data-action="promo-widget-form"]');
            
        }, function(n) {
            var t = n('[data-action="calculator-form"]');
            t.on("submit", function() {
                var i = n(this).data("product"),
                    t = [],
                    r = n(this).find("[data-ga-label]"),
                    u = n(this).data("ga-action") || "Compare";
                r.each(function() {
                    t.push(n(this).data("ga-label") + " : " + n(this).val())
                });
                //ga("send", "event", i, u, t.join(", "), 5)
            })
        }, function(n) {
            var t = n('[data-action="smart-search-form"]');
            setTimeout(function() {
                t.each(function() {
                    var t = n(this),
                        r = t.data("product"),
                        i = t.data("ga-category") || "Compare";
                    t.is(":visible") && //ga("send", "event", r, i, "launched : true", 5);
                    t.on("submit", function(u) {
                        var e = n(this).closest("form").data("progress") == "page-wizard",
                            f, o;
                        e ? t = n('[data-action="smart-search-form"]') : u.preventDefault();
                        f = [];
                        o = n(this).find("[data-ga-label], [data-ajax-ga-label]");
                        i = t.data("ga-action") || "Compare";
                        o.each(function() {
                            var t = typeof n(this).data("ga-label") == "undefined" ? n(this).data("ajax-ga-label") : n(this).data("ga-label");
                            n(this).is(":radio") || n(this).is(":checkbox") ? n(this).is(":checked") && f.push(t + " : " + n(this).val()) : f.push(t + " : " + n(this).val())
                        });
                        //ga("send", "event", r, i, f.join(", "), 5);
                        e || this.submit()
                    });
                    t.find("[data-ga-label]").bind("change", function() {
                        var t = n(this).data("ga-label") + " : " + n(this).val();
                        //ga("send", "event", r, i, t, 5)
                    });
                    t.find("[data-ga-button]").bind("click", function() {
                        var t;
                        t = n(this).data("ga-button") == "next" ? n(this).data("ga-button") + "-steps : " + (n(this).data("next-step") - 1) : n(this).data("ga-button") == "skip" ? "next-steps : " + (n(this).data("next-step") - 1) + "s" : n(this).data("ga-button") + "-steps : " + (n(this).data("prev-step") + 1);
                        //ga("send", "event", r, i, t, 5)
                    });
                    t.find(".option-amend [data-others-ga-label]").bind("change", function() {
                        var t = n(this).data("others-ga-label") + " : " + n(this).val();
                        //ga("send", "event", r, i, t, 5)
                    });
                    t.find(".contactme").bind("click", function() {
                        var u = n(this).closest("form.step-wizard-form").length == 1,
                            t;
                        t = u ? "contactme : " + n(this).closest("fieldset").find("h3").text() : "contactme : " + n(this).closest("fieldset").find("h3").text();
                        //ga("send", "event", r, i, t, 5)
                    })
                })
            }, 1e3)
        }, function(n) {
            var t = n('[data-action^="ga"]');
            t.each(function() {
                var t = n(this).data("ga-product"),
                    i = n(this).data("ga-label"),
                    r = n(this).data("ga-action") || "Compare";
                n(this).click(function() {
                    //ga("send", "event", t, r, i, 5)
                })
            })
        }, function(n) {
            var t = n('[data-action="subscribe-form"]');
            t.on("submit", function() {
                var i = {
                        "{url}": window.location.pathname
                    },
                    u = n(this).data("ga-category") || "Newsletter",
                    f = n(this).data("ga-action") || "Signup",
                    e = n("#subscribe-email", n(this)).val() || "",
                    t = n(this).data("ga-label"),
                    r;
                t in i && (t = i[t]);
                r = t || window.location.pathname + "_" + e;
                //ga("send", "event", u, f, r, 5)
            })
        }],
        r = [function(n) {
            var t = n('[data-action="smart-search-form"]'),
                i = t.data("product"),
                r = t.data("ga-category") || "Compare";
            t.find("[data-ajax-ga-label]").unbind("change").bind("change", function() {
                var t = n(this).data("ajax-ga-label") + " : " + n(this).val();
                //ga("send", "event", i, r, t, 5)
            })
        }],
        u = function(n) {
            f(n)
        },
        f = function(u) {
            u ? r.forEach(function(i) {
                i(n, t)
            }) : i.forEach(function(i) {
                i(n, t)
            })
        };
    return {
        init: u
    }
}(jQuery, document);
ga_tracker.init(!1);
gallery = function(n, t, i) {
    var r = [function(n) {
            var i = {
                    prev: "previous",
                    next: "next",
                    close: "close"
                },
                r, f, s, e, h, o, c, l, u;
            n.tag = function(i, r, u, f, e, o, s, h) {
                var c = t.createElement(i);
                return r && (c.className = r), u && (c.id = u), f && (c.style.cssText = f), e && (c.dataset.controls = e), o && (c.dataset.single = o), s && (c.dataset.items = s), h && (c.dataset.autoheight = h), n(c)
            };
            n.appendHTML = function(h) {
                f = n.tag("div", "gallery-carousel carousel-items", "gallery-carousel-" + h, "", "gallery-controls", "true", "1", "true").append(s = n.tag("div", "outer").append(e = n.tag("div", "inner")));
                o = n.tag("div", "gallery-controls").append(c = n.tag("div", "prev").append('<i class="icon i-arrow-left-thin i-4x">' + i.prev + "<\/i>").attr("data-target", "prev"), l = n.tag("div", "next").append('<i class="icon i-arrow-right-thin i-4x">' + i.next + "<\/i>").attr("data-target", "next"));
                u = n.tag("div", "gallery-close").append('<i class="icon i-action-cross-thin i-3x">' + i.close + "<\/i>");
                r = n.tag("div", "gallery-preview", "gallery-preview-" + h).append(f, o, u);
                n(t.body).append(r)
            };
            n.appendImages = function(n, t, i) {
                e.append('<div class="item" id="gallery-carousel-' + n + "-item-" + t + '"><img src="' + i + '" width="800" height="400" alt="" /><\/div>')
            };
            n(".image-gallery").each(function(t) {
                n.appendHTML(t);
                n(this).attr("data-gallery", "gallery-preview-" + t);
                n(this).attr("data-carousel", "gallery-carousel-" + t);
                n(this).find("li").each(function(i) {
                    var r = n(this).find("a").attr("href");
                    n.appendImages(t, i, r)
                });
                n(this).find('a[data-rel="gallery"]').click(function(t) {
                    t.preventDefault();
                    var r, i = "#" + n(this).closest(".gallery").data("gallery"),
                        u = n(this).parent().index();
                    n(i).find(".carousel-items").setupCarousel();
                    r = n(i).find(".carousel-items").data("owlCarousel");
                    r.jumpTo(u);
                    n("body").addClass("gallery-open");
                    n(i).addClass("active");
                    n(i).find(".prev").click(function(n) {
                        n.preventDefault();
                        r.prev()
                    });
                    n(i).find(".next").click(function(n) {
                        n.preventDefault();
                        r.next()
                    });
                    n(i).find(".gallery-close").click(function() {
                        n(i).find(".gallery-carousel").fadeOut("20", function() {});
                        n(i).fadeOut("50", function() {
                            n(i).removeClass("active").removeAttr("style");
                            n(i).find(".gallery-carousel").removeAttr("style");
                            n("body").removeClass("gallery-open")
                        })
                    })
                })
            });
            n('a[data-action="image"]').each(function() {
                n(this).click(function(f) {
                    f.preventDefault();
                    var e = n(this).attr("href");
                    u = n.tag("div", "gallery-close").append('<i class="icon i-action-cross-thin i-3x">' + i.close + "<\/i>");
                    r = n.tag("div", "gallery-preview", "gallery-image").append(u, h = n.tag("div", "gallery-image").append('<img src="' + e + '" width="800" height="400" alt="" />'));
                    n(t.body).append(r);
                    n("body").addClass("gallery-open");
                    n("#gallery-image").addClass("active");
                    n("#gallery-image").find(".gallery-close").click(function() {
                        n("#gallery-image").removeClass("active").removeAttr("style");
                        n("body").removeClass("gallery-open");
                        n("#gallery-image").remove()
                    })
                })
            })
        }],
        u = function() {
            f(n, t, i)
        },
        f = function(n, t, i) {
            r.forEach(function(r) {
                r(n, t, i)
            })
        };
    return {
        init: u
    }
}(jQuery, document, window);
gallery.init(),
    function() {
        function n(n, t, i) {
            if (n != null) return n[t] == null && (n[t] = i != null ? i : {}), n[t];
            throw new Error("Cannot init namespace on a null context.");
        }
        String.prototype.format || (String.prototype.format = function() {
            var n = arguments;
            return this.toString().replace(/{(\d+)}/g, function(t, i) {
                return typeof n[i] != "undefined" ? n[i] : t
            })
        });
        n(window, "Portal");
        Portal.getQStringParameterByName = function(n) {
            var t = RegExp("[?&]" + n + "=([^&]*)").exec(window.location.search);
            return t && decodeURIComponent(t[1].replace(/\+/g, " "))
        };
        Portal.QueryString = function(n) {
            var r, t, i;
            if (n == "") return {};
            for (r = {}, t = 0; t < n.length; ++t)(i = n[t].split("=", 2), i.length == 2) && (r[i[0]] = decodeURIComponent(i[1].replace(/\+/g, " ")));
            return r
        }(window.location.search.substr(1).split("&"))
    }(jQuery);
isotope = function(n, t) {
    var i = [function(n) {
            n("#cc-card-list").length && (n("#cc-salary-filter, #cc-bank-filter").prop("selectedIndex", 0), cardsorting.init())
        }],
        r = function() {
            u()
        },
        u = function() {
            i.forEach(function(i) {
                i(n, t)
            })
        };
    return {
        init: r
    }
}(jQuery, document);
isotope.init();
document.addEventListener("DOMContentLoaded", function() {
    for (var t, i = document.getElementsByClassName("youtube-player-light"), n = 0; n < i.length; n++) t = document.createElement("div"), t.setAttribute("data-id", i[n].dataset.id), t.innerHTML = labnolThumb(i[n].dataset.id), t.onclick = labnolIframe, i[n].appendChild(t)
});
typeof Object.create != "function" && (Object.create = function(n) {
        function t() {}
        return t.prototype = n, new t
    }),
    function(n, t, i) {
        var r = {
            init: function(t, i) {
                var r = this;
                r.$elem = n(i);
                r.options = n.extend({}, n.fn.owlCarousel.options, r.$elem.data(), t);
                r.userOptions = t;
                r.loadContent()
            },
            loadContent: function() {
                function r(n) {
                    var i, r = "";
                    if (typeof t.options.jsonSuccess == "function") t.options.jsonSuccess.apply(this, [n]);
                    else {
                        for (i in n.owl) n.owl.hasOwnProperty(i) && (r += n.owl[i].item);
                        t.$elem.html(r)
                    }
                    t.logIn()
                }
                var t = this,
                    i;
                typeof t.options.beforeInit == "function" && t.options.beforeInit.apply(this, [t.$elem]);
                typeof t.options.jsonPath == "string" ? (i = t.options.jsonPath, n.getJSON(i, r)) : t.logIn()
            },
            logIn: function() {
                var n = this;
                n.$elem.data("owl-originalStyles", n.$elem.attr("style"));
                n.$elem.data("owl-originalClasses", n.$elem.attr("class"));
                n.$elem.css({
                    opacity: 0
                });
                n.orignalItems = n.options.items;
                n.checkBrowser();
                n.wrapperWidth = 0;
                n.checkVisible = null;
                n.setVars()
            },
            setVars: function() {
                var n = this;
                if (n.$elem.children().length === 0) return !1;
                n.baseClass();
                n.eventTypes();
                n.$userItems = n.$elem.has("." + n.options.wrapperClass).length === 1 ? n.$elem.find("." + n.options.wrapperClass).children() : n.$elem.children();
                n.itemsAmount = n.$userItems.length;
                n.wrapItems();
                n.$owlItems = n.$elem.find("." + n.options.itemClass);
                n.$owlWrapper = n.$elem.find("." + n.options.wrapperClass);
                n.playDirection = "next";
                n.prevItem = 0;
                n.prevArr = [0];
                n.currentItem = 0;
                n.customEvents();
                n.onStartup()
            },
            onStartup: function() {
                var n = this;
                n.updateItems();
                n.calculateAll();
                n.buildControls();
                n.updateControls();
                n.response();
                n.moveEvents();
                n.stopOnHover();
                n.owlStatus();
                n.options.transitionStyle !== !1 && n.transitionTypes(n.options.transitionStyle);
                n.options.autoPlay === !0 && (n.options.autoPlay = 5e3);
                n.play();
                n.$elem.find("." + n.options.wrapperClass).css("display", "block");
                n.$elem.addClass(n.options.loadedClass);
                n.$elem.is(":visible") ? n.$elem.css("opacity", 1) : n.watchVisibility();
                n.onstartup = !1;
                n.eachMoveUpdate();
                typeof n.options.afterInit == "function" && n.options.afterInit.apply(this, [n.$elem])
            },
            eachMoveUpdate: function() {
                var n = this;
                n.options.lazyLoad === !0 && n.lazyLoad();
                n.options.autoHeight === !0 && n.autoHeight();
                n.onVisibleItems();
                typeof n.options.afterAction == "function" && n.options.afterAction.apply(this, [n.$elem])
            },
            updateVars: function() {
                var n = this;
                typeof n.options.beforeUpdate == "function" && n.options.beforeUpdate.apply(this, [n.$elem]);
                n.watchVisibility();
                n.updateItems();
                n.calculateAll();
                n.updatePosition();
                n.updateControls();
                n.eachMoveUpdate();
                typeof n.options.afterUpdate == "function" && n.options.afterUpdate.apply(this, [n.$elem])
            },
            reload: function() {
                var n = this;
                t.setTimeout(function() {
                    n.updateVars()
                }, 0)
            },
            watchVisibility: function() {
                var n = this;
                if (n.$elem.is(":visible") === !1) n.$elem.css({
                    opacity: 0
                }), t.clearInterval(n.autoPlayInterval), t.clearInterval(n.checkVisible);
                else return !1;
                n.checkVisible = t.setInterval(function() {
                    n.$elem.is(":visible") && (n.reload(), n.$elem.animate({
                        opacity: 1
                    }, 200), t.clearInterval(n.checkVisible))
                }, 500)
            },
            wrapItems: function() {
                var n = this;
                n.$elem.find("." + n.options.wrapperClass).length === 0 && n.$userItems.wrapAll('<div class="' + n.options.wrapperClass + '">').wrap('<div class="' + n.options.itemClass + '"><\/div>');
                n.$elem.find("." + n.options.holderClass).length === 0 && n.$elem.find("." + n.options.wrapperClass).wrap('<div class="' + n.options.holderClass + '">');
                n.wrapperOuter = n.$elem.find("." + n.options.holderClass);
                n.$elem.css("display", "block")
            },
            baseClass: function() {
                var n = this,
                    t = n.$elem.hasClass(n.options.baseClass),
                    i = n.$elem.hasClass(n.options.theme);
                t || n.$elem.addClass(n.options.baseClass);
                i || n.$elem.addClass(n.options.theme)
            },
            updateItems: function() {
                var t = this,
                    i, r;
                if (t.options.responsive === !1) return !1;
                if (t.options.singleItem === !0) return t.options.items = t.orignalItems = 1, t.options.itemsCustom = !1, t.options.itemsDesktop = !1, t.options.itemsDesktopSmall = !1, t.options.itemsTablet = !1, t.options.itemsTabletSmall = !1, t.options.itemsMobile = !1, !1;
                if (i = n(t.options.responsiveBaseWidth).width(), i > (t.options.itemsDesktop[0] || t.orignalItems) && (t.options.items = t.orignalItems), t.options.itemsCustom !== !1)
                    for (t.options.itemsCustom.sort(function(n, t) {
                            return n[0] - t[0]
                        }), r = 0; r < t.options.itemsCustom.length; r += 1) t.options.itemsCustom[r][0] <= i && (t.options.items = t.options.itemsCustom[r][1]);
                else i <= t.options.itemsDesktop[0] && t.options.itemsDesktop !== !1 && (t.options.items = t.options.itemsDesktop[1]), i <= t.options.itemsDesktopSmall[0] && t.options.itemsDesktopSmall !== !1 && (t.options.items = t.options.itemsDesktopSmall[1]), i <= t.options.itemsTablet[0] && t.options.itemsTablet !== !1 && (t.options.items = t.options.itemsTablet[1]), i <= t.options.itemsTabletSmall[0] && t.options.itemsTabletSmall !== !1 && (t.options.items = t.options.itemsTabletSmall[1]), i <= t.options.itemsMobile[0] && t.options.itemsMobile !== !1 && (t.options.items = t.options.itemsMobile[1]);
                t.options.items > t.itemsAmount && t.options.itemsScaleUp === !0 && (t.options.items = t.itemsAmount)
            },
            response: function() {
                var i = this,
                    u, r;
                if (i.options.responsive !== !0) return !1;
                r = n(t).width();
                i.resizer = function() {
                    n(t).width() !== r && (i.options.autoPlay !== !1 && t.clearInterval(i.autoPlayInterval), t.clearTimeout(u), u = t.setTimeout(function() {
                        r = n(t).width();
                        i.updateVars()
                    }, i.options.responsiveRefreshRate))
                };
                n(t).resize(i.resizer)
            },
            updatePosition: function() {
                var n = this;
                n.jumpTo(n.currentItem);
                n.options.autoPlay !== !1 && n.checkAp()
            },
            appendItemsSizes: function() {
                var t = this,
                    i = 0,
                    r = t.itemsAmount - t.options.items;
                t.$owlItems.each(function(u) {
                    var f = n(this);
                    f.css({
                        width: t.itemWidth
                    }).data("owl-item", Number(u));
                    (u % t.options.items == 0 || u === r) && (u > r || (i += 1));
                    f.data("owl-roundPages", i)
                })
            },
            appendWrapperSizes: function() {
                var n = this,
                    t = n.$owlItems.length * n.itemWidth;
                n.$owlWrapper.css({
                    width: t * 2,
                    left: 0
                });
                n.appendItemsSizes()
            },
            calculateAll: function() {
                var n = this;
                n.calculateWidth();
                n.appendWrapperSizes();
                n.loops();
                n.max()
            },
            calculateWidth: function() {
                var n = this;
                n.itemWidth = Math.round(n.$elem.width() / n.options.items)
            },
            max: function() {
                var n = this,
                    t = (n.itemsAmount * n.itemWidth - n.options.items * n.itemWidth) * -1;
                return n.options.items > n.itemsAmount ? (n.maximumItem = 0, t = 0, n.maximumPixels = 0) : (n.maximumItem = n.itemsAmount - n.options.items, n.maximumPixels = t), t
            },
            min: function() {
                return 0
            },
            loops: function() {
                var t = this,
                    r = 0,
                    f = 0,
                    i, e, u;
                for (t.positionsInArray = [0], t.pagesInArray = [], i = 0; i < t.itemsAmount; i += 1) f += t.itemWidth, t.positionsInArray.push(-f), t.options.scrollPerPage === !0 && (e = n(t.$owlItems[i]), u = e.data("owl-roundPages"), u !== r && (t.pagesInArray[r] = t.positionsInArray[i], r = u))
            },
            buildControls: function() {
                var t = this;
                (t.options.navigation === !0 || t.options.pagination === !0) && (t.owlControls = n('<div class="owl-controls"/>').toggleClass("clickable", !t.browser.isTouch).appendTo(t.$elem));
                t.options.pagination === !0 && t.buildPagination();
                t.options.navigation === !0 && t.buildButtons()
            },
            buildButtons: function() {
                var t = this,
                    i = n('<div class="owl-buttons"/>');
                t.owlControls.append(i);
                t.buttonPrev = n("<div/>", {
                    "class": "owl-prev",
                    html: t.options.navigationText[0] || ""
                });
                t.buttonNext = n("<div/>", {
                    "class": "owl-next",
                    html: t.options.navigationText[1] || ""
                });
                i.append(t.buttonPrev).append(t.buttonNext);
                i.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(n) {
                    n.preventDefault()
                });
                i.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(i) {
                    i.preventDefault();
                    n(this).hasClass("owl-next") ? t.next() : t.prev()
                })
            },
            buildPagination: function() {
                var t = this;
                t.paginationWrapper = n('<div class="owl-pagination"/>');
                t.owlControls.append(t.paginationWrapper);
                t.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(i) {
                    i.preventDefault();
                    Number(n(this).data("owl-page")) !== t.currentItem && t.goTo(Number(n(this).data("owl-page")), !0)
                })
            },
            updatePagination: function() {
                var t = this,
                    u, f, e, i, r, o;
                if (t.options.pagination === !1) return !1;
                for (t.paginationWrapper.html(""), u = 0, f = t.itemsAmount - t.itemsAmount % t.options.items, i = 0; i < t.itemsAmount; i += 1) i % t.options.items == 0 && (u += 1, f === i && (e = t.itemsAmount - t.options.items), r = n("<div/>", {
                    "class": "owl-page"
                }), o = n("<span><\/span>", {
                    text: t.options.paginationNumbers === !0 ? u : "",
                    "class": t.options.paginationNumbers === !0 ? "owl-numbers" : ""
                }), r.append(o), r.data("owl-page", f === i ? e : i), r.data("owl-roundPages", u), t.paginationWrapper.append(r));
                t.checkPagination()
            },
            checkPagination: function() {
                var t = this;
                if (t.options.pagination === !1) return !1;
                t.paginationWrapper.find(".owl-page").each(function() {
                    n(this).data("owl-roundPages") === n(t.$owlItems[t.currentItem]).data("owl-roundPages") && (t.paginationWrapper.find(".owl-page").removeClass("active"), n(this).addClass("active"))
                })
            },
            checkNavigation: function() {
                var n = this;
                if (n.options.navigation === !1) return !1;
                n.options.rewindNav === !1 && (n.currentItem === 0 && n.maximumItem === 0 ? (n.buttonPrev.addClass("disabled"), n.buttonNext.addClass("disabled")) : n.currentItem === 0 && n.maximumItem !== 0 ? (n.buttonPrev.addClass("disabled"), n.buttonNext.removeClass("disabled")) : n.currentItem === n.maximumItem ? (n.buttonPrev.removeClass("disabled"), n.buttonNext.addClass("disabled")) : n.currentItem !== 0 && n.currentItem !== n.maximumItem && (n.buttonPrev.removeClass("disabled"), n.buttonNext.removeClass("disabled")))
            },
            updateControls: function() {
                var n = this;
                n.updatePagination();
                n.checkNavigation();
                n.owlControls && (n.options.items >= n.itemsAmount ? n.owlControls.hide() : n.owlControls.show())
            },
            destroyControls: function() {
                var n = this;
                n.owlControls && n.owlControls.remove()
            },
            next: function(n) {
                var t = this;
                if (t.isTransition) return !1;
                if (t.currentItem += t.options.scrollPerPage === !0 ? t.options.items : 1, t.currentItem > t.maximumItem + (t.options.scrollPerPage === !0 ? t.options.items - 1 : 0))
                    if (t.options.rewindNav === !0) t.currentItem = 0, n = "rewind";
                    else return t.currentItem = t.maximumItem, !1;
                t.goTo(t.currentItem, n)
            },
            prev: function(n) {
                var t = this;
                if (t.isTransition) return !1;
                if (t.options.scrollPerPage === !0 && t.currentItem > 0 && t.currentItem < t.options.items ? t.currentItem = 0 : t.currentItem -= t.options.scrollPerPage === !0 ? t.options.items : 1, t.currentItem < 0)
                    if (t.options.rewindNav === !0) t.currentItem = t.maximumItem, n = "rewind";
                    else return t.currentItem = 0, !1;
                t.goTo(t.currentItem, n)
            },
            goTo: function(n, i, r) {
                var u = this,
                    f;
                if (u.isTransition) return !1;
                if (typeof u.options.beforeMove == "function" && u.options.beforeMove.apply(this, [u.$elem]), n >= u.maximumItem ? n = u.maximumItem : n <= 0 && (n = 0), u.currentItem = u.owl.currentItem = n, u.options.transitionStyle !== !1 && r !== "drag" && u.options.items === 1 && u.browser.support3d === !0) return u.swapSpeed(0), u.browser.support3d === !0 ? u.transition3d(u.positionsInArray[n]) : u.css2slide(u.positionsInArray[n], 1), u.afterGo(), u.singleItemTransition(), !1;
                f = u.positionsInArray[n];
                u.browser.support3d === !0 ? (u.isCss3Finish = !1, i === !0 ? (u.swapSpeed("paginationSpeed"), t.setTimeout(function() {
                    u.isCss3Finish = !0
                }, u.options.paginationSpeed)) : i === "rewind" ? (u.swapSpeed(u.options.rewindSpeed), t.setTimeout(function() {
                    u.isCss3Finish = !0
                }, u.options.rewindSpeed)) : (u.swapSpeed("slideSpeed"), t.setTimeout(function() {
                    u.isCss3Finish = !0
                }, u.options.slideSpeed)), u.transition3d(f)) : i === !0 ? u.css2slide(f, u.options.paginationSpeed) : i === "rewind" ? u.css2slide(f, u.options.rewindSpeed) : u.css2slide(f, u.options.slideSpeed);
                u.afterGo()
            },
            jumpTo: function(n) {
                var t = this;
                typeof t.options.beforeMove == "function" && t.options.beforeMove.apply(this, [t.$elem]);
                n >= t.maximumItem || n === -1 ? n = t.maximumItem : n <= 0 && (n = 0);
                t.swapSpeed(0);
                t.browser.support3d === !0 ? t.transition3d(t.positionsInArray[n]) : t.css2slide(t.positionsInArray[n], 1);
                t.currentItem = t.owl.currentItem = n;
                t.afterGo()
            },
            afterGo: function() {
                var n = this;
                n.prevArr.push(n.currentItem);
                n.prevItem = n.owl.prevItem = n.prevArr[n.prevArr.length - 2];
                n.prevArr.shift(0);
                n.prevItem !== n.currentItem && (n.checkPagination(), n.checkNavigation(), n.eachMoveUpdate(), n.options.autoPlay !== !1 && n.checkAp());
                typeof n.options.afterMove == "function" && n.prevItem !== n.currentItem && n.options.afterMove.apply(this, [n.$elem])
            },
            stop: function() {
                var n = this;
                n.apStatus = "stop";
                t.clearInterval(n.autoPlayInterval)
            },
            checkAp: function() {
                var n = this;
                n.apStatus !== "stop" && n.play()
            },
            play: function() {
                var n = this;
                if (n.apStatus = "play", n.options.autoPlay === !1) return !1;
                t.clearInterval(n.autoPlayInterval);
                n.autoPlayInterval = t.setInterval(function() {
                    n.next(!0)
                }, n.options.autoPlay)
            },
            swapSpeed: function(n) {
                var t = this;
                n === "slideSpeed" ? t.$owlWrapper.css(t.addCssSpeed(t.options.slideSpeed)) : n === "paginationSpeed" ? t.$owlWrapper.css(t.addCssSpeed(t.options.paginationSpeed)) : typeof n != "string" && t.$owlWrapper.css(t.addCssSpeed(n))
            },
            addCssSpeed: function(n) {
                return {
                    "-webkit-transition": "all " + n + "ms ease",
                    "-moz-transition": "all " + n + "ms ease",
                    "-o-transition": "all " + n + "ms ease",
                    transition: "all " + n + "ms ease"
                }
            },
            removeTransition: function() {
                return {
                    "-webkit-transition": "",
                    "-moz-transition": "",
                    "-o-transition": "",
                    transition: ""
                }
            },
            doTranslate: function(n) {
                return {
                    "-webkit-transform": "translate3d(" + n + "px, 0px, 0px)",
                    "-moz-transform": "translate3d(" + n + "px, 0px, 0px)",
                    "-o-transform": "translate3d(" + n + "px, 0px, 0px)",
                    "-ms-transform": "translate3d(" + n + "px, 0px, 0px)",
                    transform: "translate3d(" + n + "px, 0px,0px)"
                }
            },
            transition3d: function(n) {
                var t = this;
                t.$owlWrapper.css(t.doTranslate(n))
            },
            css2move: function(n) {
                var t = this;
                t.$owlWrapper.css({
                    left: n
                })
            },
            css2slide: function(n, t) {
                var i = this;
                i.isCssFinish = !1;
                i.$owlWrapper.stop(!0, !0).animate({
                    left: n
                }, {
                    duration: t || i.options.slideSpeed,
                    complete: function() {
                        i.isCssFinish = !0
                    }
                })
            },
            checkBrowser: function() {
                var s = this,
                    n = "translate3d(0px, 0px, 0px)",
                    u = i.createElement("div"),
                    f, r, e, o;
                u.style.cssText = "  -moz-transform:" + n + "; -ms-transform:" + n + "; -o-transform:" + n + "; -webkit-transform:" + n + "; transform:" + n;
                f = /translate3d\(0px, 0px, 0px\)/g;
                r = u.style.cssText.match(f);
                e = r !== null && r.length === 1;
                o = "ontouchstart" in t || t.navigator.msMaxTouchPoints;
                s.browser = {
                    support3d: e,
                    isTouch: o
                }
            },
            moveEvents: function() {
                var n = this;
                (n.options.mouseDrag !== !1 || n.options.touchDrag !== !1) && (n.gestures(), n.disabledEvents())
            },
            eventTypes: function() {
                var n = this,
                    t = ["s", "e", "x"];
                n.ev_types = {};
                n.options.mouseDrag === !0 && n.options.touchDrag === !0 ? t = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : n.options.mouseDrag === !1 && n.options.touchDrag === !0 ? t = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : n.options.mouseDrag === !0 && n.options.touchDrag === !1 && (t = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);
                n.ev_types.start = t[0];
                n.ev_types.move = t[1];
                n.ev_types.end = t[2]
            },
            disabledEvents: function() {
                var t = this;
                t.$elem.on("dragstart.owl", function(n) {
                    n.preventDefault()
                });
                t.$elem.on("mousedown.disableTextSelect", function(t) {
                    return n(t.target).is("input, textarea, select, option")
                })
            },
            gestures: function() {
                function f(n) {
                    if (n.touches !== undefined) return {
                        x: n.touches[0].pageX,
                        y: n.touches[0].pageY
                    };
                    if (n.touches === undefined) {
                        if (n.pageX !== undefined) return {
                            x: n.pageX,
                            y: n.pageY
                        };
                        if (n.pageX === undefined) return {
                            x: n.clientX,
                            y: n.clientY
                        }
                    }
                }

                function e(t) {
                    if (t === "on") {
                        n(i).on(r.ev_types.move, s);
                        n(i).on(r.ev_types.end, h)
                    } else t === "off" && (n(i).off(r.ev_types.move), n(i).off(r.ev_types.end))
                }

                function o(i) {
                    var o = i.originalEvent || i || t.event,
                        s;
                    if (o.which === 3) return !1;
                    if (!(r.itemsAmount <= r.options.items)) {
                        if (r.isCssFinish === !1 && !r.options.dragBeforeAnimFinish || r.isCss3Finish === !1 && !r.options.dragBeforeAnimFinish) return !1;
                        r.options.autoPlay !== !1 && t.clearInterval(r.autoPlayInterval);
                        r.browser.isTouch === !0 || r.$owlWrapper.hasClass("grabbing") || r.$owlWrapper.addClass("grabbing");
                        r.newPosX = 0;
                        r.newRelativeX = 0;
                        n(this).css(r.removeTransition());
                        s = n(this).position();
                        u.relativePos = s.left;
                        u.offsetX = f(o).x - s.left;
                        u.offsetY = f(o).y - s.top;
                        e("on");
                        u.sliding = !1;
                        u.targetElement = o.target || o.srcElement
                    }
                }

                function s(e) {
                    var o = e.originalEvent || e || t.event,
                        s, h;
                    r.newPosX = f(o).x - u.offsetX;
                    r.newPosY = f(o).y - u.offsetY;
                    r.newRelativeX = r.newPosX - u.relativePos;
                    typeof r.options.startDragging == "function" && u.dragging !== !0 && r.newRelativeX !== 0 && (u.dragging = !0, r.options.startDragging.apply(r, [r.$elem]));
                    (r.newRelativeX > 8 || r.newRelativeX < -8) && r.browser.isTouch === !0 && (o.preventDefault !== undefined ? o.preventDefault() : o.returnValue = !1, u.sliding = !0);
                    (r.newPosY > 10 || r.newPosY < -10) && u.sliding === !1 && n(i).off("touchmove.owl");
                    s = function() {
                        return r.newRelativeX / 5
                    };
                    h = function() {
                        return r.maximumPixels + r.newRelativeX / 5
                    };
                    r.newPosX = Math.max(Math.min(r.newPosX, s()), h());
                    r.browser.support3d === !0 ? r.transition3d(r.newPosX) : r.css2move(r.newPosX)
                }

                function h(i) {
                    var f = i.originalEvent || i || t.event,
                        s, o, h;
                    if (f.target = f.target || f.srcElement, u.dragging = !1, r.browser.isTouch !== !0 && r.$owlWrapper.removeClass("grabbing"), r.dragDirection = r.newRelativeX < 0 ? r.owl.dragDirection = "left" : r.owl.dragDirection = "right", r.newRelativeX !== 0 && (s = r.getNewPosition(), r.goTo(s, !1, "drag"), u.targetElement === f.target && r.browser.isTouch !== !0)) {
                        n(f.target).on("click.disable", function(t) {
                            t.stopImmediatePropagation();
                            t.stopPropagation();
                            t.preventDefault();
                            n(t.target).off("click.disable")
                        });
                        o = n._data(f.target, "events").click;
                        h = o.pop();
                        o.splice(0, 0, h)
                    }
                    e("off")
                }
                var r = this,
                    u = {
                        offsetX: 0,
                        offsetY: 0,
                        baseElWidth: 0,
                        relativePos: 0,
                        position: null,
                        minSwipe: null,
                        maxSwipe: null,
                        sliding: null,
                        dargging: null,
                        targetElement: null
                    };
                r.isCssFinish = !0;
                r.$elem.on(r.ev_types.start, "." + r.options.wrapperClass, o)
            },
            getNewPosition: function() {
                var n = this,
                    t = n.closestItem();
                return t > n.maximumItem ? (n.currentItem = n.maximumItem, t = n.maximumItem) : n.newPosX >= 0 && (t = 0, n.currentItem = 0), t
            },
            closestItem: function() {
                var t = this,
                    i = t.options.scrollPerPage === !0 ? t.pagesInArray : t.positionsInArray,
                    u = t.newPosX,
                    r = null;
                return n.each(i, function(f, e) {
                    u - t.itemWidth / 20 > i[f + 1] && u - t.itemWidth / 20 < e && t.moveDirection() === "left" ? (r = e, t.currentItem = t.options.scrollPerPage === !0 ? n.inArray(r, t.positionsInArray) : f) : u + t.itemWidth / 20 < e && u + t.itemWidth / 20 > (i[f + 1] || i[f] - t.itemWidth) && t.moveDirection() === "right" && (t.options.scrollPerPage === !0 ? (r = i[f + 1] || i[i.length - 1], t.currentItem = n.inArray(r, t.positionsInArray)) : (r = i[f + 1], t.currentItem = f + 1))
                }), t.currentItem
            },
            moveDirection: function() {
                var n = this,
                    t;
                return n.newRelativeX < 0 ? (t = "right", n.playDirection = "next") : (t = "left", n.playDirection = "prev"), t
            },
            customEvents: function() {
                var n = this;
                n.$elem.on("owl.next", function() {
                    n.next()
                });
                n.$elem.on("owl.prev", function() {
                    n.prev()
                });
                n.$elem.on("owl.play", function(t, i) {
                    n.options.autoPlay = i;
                    n.play();
                    n.hoverStatus = "play"
                });
                n.$elem.on("owl.stop", function() {
                    n.stop();
                    n.hoverStatus = "stop"
                });
                n.$elem.on("owl.goTo", function(t, i) {
                    n.goTo(i)
                });
                n.$elem.on("owl.jumpTo", function(t, i) {
                    n.jumpTo(i)
                })
            },
            stopOnHover: function() {
                var n = this;
                if (n.options.stopOnHover === !0 && n.browser.isTouch !== !0 && n.options.autoPlay !== !1) {
                    n.$elem.on("mouseover", function() {
                        n.stop()
                    });
                    n.$elem.on("mouseout", function() {
                        n.hoverStatus !== "stop" && n.play()
                    })
                }
            },
            lazyLoad: function() {
                var t = this,
                    u, i, f, r, e;
                if (t.options.lazyLoad === !1) return !1;
                for (u = 0; u < t.itemsAmount; u += 1)
                    if (i = n(t.$owlItems[u]), i.data("owl-loaded") !== "loaded") {
                        if (f = i.data("owl-item"), r = i.find(".lazyOwl"), typeof r.data("src") != "string") {
                            i.data("owl-loaded", "loaded");
                            continue
                        }
                        i.data("owl-loaded") === undefined && (r.hide(), i.addClass("loading").data("owl-loaded", "checked"));
                        e = t.options.lazyFollow === !0 ? f >= t.currentItem : !0;
                        e && f < t.currentItem + t.options.items && r.length && t.lazyPreload(i, r)
                    }
            },
            lazyPreload: function(n, i) {
                function e() {
                    n.data("owl-loaded", "loaded").removeClass("loading");
                    i.removeAttr("data-src");
                    r.options.lazyEffect === "fade" ? i.fadeIn(400) : i.show();
                    typeof r.options.afterLazyLoad == "function" && r.options.afterLazyLoad.apply(this, [r.$elem])
                }

                function o() {
                    u += 1;
                    r.completeImg(i.get(0)) || f === !0 ? e() : u <= 100 ? t.setTimeout(o, 100) : e()
                }
                var r = this,
                    u = 0,
                    f;
                i.prop("tagName") === "DIV" ? (i.css("background-image", "url(" + i.data("src") + ")"), f = !0) : i[0].src = i.data("src");
                o()
            },
            autoHeight: function() {
                function f() {
                    var r = n(i.$owlItems[i.currentItem]).height();
                    i.wrapperOuter.css("height", r + "px");
                    i.wrapperOuter.hasClass("autoHeight") || t.setTimeout(function() {
                        i.wrapperOuter.addClass("autoHeight")
                    }, 0)
                }

                function e() {
                    r += 1;
                    i.completeImg(u.get(0)) ? f() : r <= 100 ? t.setTimeout(e, 100) : i.wrapperOuter.css("height", "")
                }
                var i = this,
                    u = n(i.$owlItems[i.currentItem]).find("img"),
                    r;
                u.get(0) !== undefined ? (r = 0, e()) : f()
            },
            completeImg: function(n) {
                var t;
                return n.complete ? (t = typeof n.naturalWidth, t !== "undefined" && n.naturalWidth === 0) ? !1 : !0 : !1
            },
            onVisibleItems: function() {
                var t = this,
                    i;
                for (t.options.addClassActive === !0 && t.$owlItems.removeClass("active"), t.visibleItems = [], i = t.currentItem; i < t.currentItem + t.options.items; i += 1) t.visibleItems.push(i), t.options.addClassActive === !0 && n(t.$owlItems[i]).addClass("active");
                t.owl.visibleItems = t.visibleItems
            },
            transitionTypes: function(n) {
                var t = this;
                t.outClass = "owl-" + n + "-out";
                t.inClass = "owl-" + n + "-in"
            },
            singleItemTransition: function() {
                function s(n) {
                    return {
                        position: "relative",
                        left: n + "px"
                    }
                }
                var n = this,
                    f = n.outClass,
                    e = n.inClass,
                    i = n.$owlItems.eq(n.currentItem),
                    r = n.$owlItems.eq(n.prevItem),
                    o = Math.abs(n.positionsInArray[n.currentItem]) + n.positionsInArray[n.prevItem],
                    u = Math.abs(n.positionsInArray[n.currentItem]) + n.itemWidth / 2,
                    t = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
                n.isTransition = !0;
                n.$owlWrapper.addClass(n.options.transitionClass).css({
                    "-webkit-transform-origin": u + "px",
                    "-moz-perspective-origin": u + "px",
                    "perspective-origin": u + "px"
                });
                r.css(s(o, 10)).addClass(f).on(t, function() {
                    n.endPrev = !0;
                    r.off(t);
                    n.clearTransStyle(r, f)
                });
                i.addClass(e).on(t, function() {
                    n.endCurrent = !0;
                    i.off(t);
                    n.clearTransStyle(i, e)
                })
            },
            clearTransStyle: function(n, t) {
                var i = this;
                n.css({
                    position: "",
                    left: ""
                }).removeClass(t);
                i.endPrev && i.endCurrent && (i.$owlWrapper.removeClass(i.options.transitionClass), i.endPrev = !1, i.endCurrent = !1, i.isTransition = !1)
            },
            owlStatus: function() {
                var n = this;
                n.owl = {
                    userOptions: n.userOptions,
                    baseElement: n.$elem,
                    userItems: n.$userItems,
                    owlItems: n.$owlItems,
                    currentItem: n.currentItem,
                    prevItem: n.prevItem,
                    visibleItems: n.visibleItems,
                    isTouch: n.browser.isTouch,
                    browser: n.browser,
                    dragDirection: n.dragDirection
                }
            },
            clearEvents: function() {
                var r = this;
                r.$elem.off(".owl owl mousedown.disableTextSelect");
                n(i).off(".owl owl");
                n(t).off("resize", r.resizer)
            },
            unWrap: function() {
                var n = this;
                n.$elem.children().length !== 0 && (n.$owlWrapper.unwrap(), n.$userItems.unwrap().unwrap(), n.owlControls && n.owlControls.remove());
                n.clearEvents();
                n.$elem.attr("style", n.$elem.data("owl-originalStyles") || "").attr("class", n.$elem.data("owl-originalClasses"))
            },
            destroy: function() {
                var n = this;
                n.stop();
                t.clearInterval(n.checkVisible);
                n.unWrap();
                n.$elem.removeData()
            },
            reinit: function(t) {
                var i = this,
                    r = n.extend({}, i.userOptions, t);
                i.unWrap();
                i.init(r, i.$elem)
            },
            addItem: function(n, t) {
                var i = this,
                    r;
                if (!n) return !1;
                if (i.$elem.children().length === 0) return i.$elem.append(n), i.setVars(), !1;
                i.unWrap();
                r = t === undefined || t === -1 ? -1 : t;
                r >= i.$userItems.length || r === -1 ? i.$userItems.eq(-1).after(n) : i.$userItems.eq(r).before(n);
                i.setVars()
            },
            removeItem: function(n) {
                var t = this,
                    i;
                if (t.$elem.children().length === 0) return !1;
                i = n === undefined || n === -1 ? -1 : n;
                t.unWrap();
                t.$userItems.eq(i).remove();
                t.setVars()
            }
        };
        n.fn.owlCarousel = function(t) {
            return this.each(function() {
                if (n(this).data("owl-init") === !0) return !1;
                n(this).data("owl-init", !0);
                var i = Object.create(r);
                i.init(t, this);
                n.data(this, "owlCarousel", i)
            })
        };
        n.fn.owlCarousel.options = {
            items: 5,
            itemsCustom: !1,
            itemsDesktop: [1200, 4],
            itemsDesktopSmall: [992, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: !1,
            itemsMobile: [520, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            slideSpeed: 300,
            paginationSpeed: 400,
            rewindSpeed: 1e3,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1,
            navigationText: ["prev", "next"],
            rewindNav: !1,
            scrollPerPage: !1,
            pagination: !1,
            paginationNumbers: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: t,
            baseClass: "owl-carousel",
            itemClass: "owl-item",
            wrapperClass: "owl-wrapper",
            holderClass: "owl-wrapper-outer",
            transitionClass: "owl-origin",
            loadedClass: "owl-loaded",
            theme: "owl-theme",
            lazyLoad: !1,
            lazyFollow: !0,
            lazyEffect: "fade",
            autoHeight: !1,
            jsonPath: !1,
            jsonSuccess: !1,
            dragBeforeAnimFinish: !0,
            mouseDrag: !0,
            touchDrag: !0,
            addClassActive: !1,
            transitionStyle: !1,
            beforeUpdate: !1,
            afterUpdate: !1,
            beforeInit: !1,
            afterInit: !1,
            beforeMove: !1,
            afterMove: !1,
            afterAction: !1,
            startDragging: !1,
            afterLazyLoad: !1
        }
    }(jQuery, window, document);
carousel = function(n, t) {
    var i = [function(n) {
            function u() {}

            function f(n) {
                t(n, this);
                s(n, this);
                i(n, this)
            }

            function e(n) {
                this.options.init && (r(this, this.currentItem, this.options.paging), i(n, this))
            }

            function o(n) {
                this.options.paging = [];
                t(n, this)
            }

            function t(t, i) {
                var u = t.attr("id"),
                    f = t.siblings(i.options.pager),
                    e = i.options.paging,
                    o = i.itemsAmount,
                    s = i.options.items,
                    c = o - o % s,
                    h = 0;
                f.empty();
                n.each(i.owl.userItems, function(i) {
                    if (h += 1, i % s == 0) {
                        var r = n('<li data-action="carousel" data-target="#' + u + '" aria-controls="' + u + "-" + ("0" + (i + 1)).slice(-2) + '" role="tab"><span>' + (h + 1) + "<\/span><\/li>");
                        e.push(r);
                        f.append(r);
                        r.bind("click", function(n) {
                            n.preventDefault();
                            t.trigger("owl.goTo", Number(i))
                        })
                    }
                });
                i.options.init = !0;
                r(i, i.currentItem, e)
            }

            function i(t, i) {
                if (t.parent().find(i.options.nav).length) {
                    var r = t.parent().find(i.options.nav);
                    n("li", r).removeClass("active");
                    n("li", r).eq(i.currentItem).addClass("active");
                    n("li", r).click(function() {
                        var i = n(this).index();
                        t.trigger("owl.goTo", i)
                    })
                }
            }

            function r(t, i, r) {
                var u = t.options.items,
                    f = t.itemsAmount - t.options.items,
                    e = f === i ? r.length - 1 : Math.floor(i / u);
                n.each(r, function() {
                    this.removeClass("active")
                });
                r[e].addClass("active")
            }

            function s(t, i) {
                var r = t.parent().find(i.options.controls);
                n("div", r).click(function() {
                    var i = n(this).data("target");
                    i === "prev" && t.trigger("owl.prev");
                    i === "next" && t.trigger("owl.next")
                })
            }
            n.fn.setupCarousel = function() {
                var t = n(this),
                    r = t.data("autoplay") === undefined || t.data("autoplay") === "" ? !1 : t.data("autoplay"),
                    s = t.data("autoheight") === undefined || t.data("autoheight") === "" ? !1 : t.data("autoheight"),
                    h = t.data("sliding") === undefined || t.data("sliding") === "" ? 300 : t.data("sliding"),
                    c = t.data("paging") === undefined || t.data("paging") === "" ? 400 : t.data("paging"),
                    l = t.data("pager") === undefined || t.data("pager") === "" ? ".carousel-pager" : "." + t.data("pager"),
                    a = t.data("nav") === undefined || t.data("nav") === "" ? "" : "." + t.data("nav"),
                    v = t.data("controls") === undefined || t.data("controls") === "" ? "" : "." + t.data("controls"),
                    y = t.data("items") === undefined || t.data("items") === "" ? 3 : t.data("items"),
                    p = t.data("desktop") === undefined || t.data("desktop") === "" ? [1200, 3] : t.data("desktop"),
                    w = t.data("netbook") === undefined || t.data("netbook") === "" ? [1024, 3] : t.data("netbook"),
                    b = t.data("tablet") === undefined || t.data("tablet") === "" ? [768, 2] : t.data("tablet"),
                    k = t.data("mobile") === undefined || t.data("mobile") === "" ? [520, 1] : t.data("mobile"),
                    i = t.data("single") === undefined || t.data("single") === "" ? !1 : t.data("single"),
                    d = i === !0 ? "fade" : !1,
                    g = i === !0 ? "animating" : !1,
                    nt = t.data("rewind") === undefined || t.data("rewind") === "" ? !1 : t.data("rewind");
                t.owlCarousel({
                    singleItem: i,
                    items: y,
                    slideSpeed: h,
                    paginationSpeed: c,
                    autoPlay: r,
                    autoHeight: s,
                    itemsDesktop: p,
                    itemsDesktopSmall: w,
                    itemsTablet: b,
                    itemsMobile: k,
                    transitionStyle: d,
                    transitionClass: g,
                    loadedClass: "carousel-loaded",
                    baseClass: "carousel-items",
                    itemClass: "item",
                    wrapperClass: "inner",
                    holderClass: "outer",
                    paging: [],
                    init: !1,
                    pager: l,
                    nav: a,
                    controls: v,
                    beforeInit: u,
                    afterInit: f,
                    afterMove: e,
                    afterUpdate: o,
                    theme: "",
                    rewindNav: nt
                })
            };
            n(".carousel-items").each(function() {
                n(this).setupCarousel()
            })
        }],
        r = function() {
            u()
        },
        u = function() {
            i.forEach(function(i) {
                i(n, t)
            })
        };
    return {
        init: r
    }
}(jQuery, document);
carousel.init();
populateCarousel = function(n, t, i) {
    var r = n("#partner-carousel"),
        u;
    r && i.partners && (u = shuffleLogos(i.partners), u.forEach(function(n) {
        r.append(buildTemplate(n))
    }))
};
PartnerCarousel = function(n, t, i) {
    var r = [populateCarousel],
        u = function(n, t, i) {
            r.forEach(function(r) {
                r(n, t, i)
            })
        },
        f = function() {
            u(n, t, i)
        };
    return {
        init: f
    }
}($, document, window);
PartnerCarousel.init();
portal = function(n, t) {
    var i = [function(n, t) {
            var i = n("body"),
                r = n(".layout-drawer"),
                u = function(n) {
                    var r = n.createElement("div"),
                        t = {
                            transition: "transitionend",
                            WebkitTransition: "webkitTransitionEnd",
                            MozTransition: "transitionend",
                            OTransition: "otransitionend"
                        };
                    for (var i in t)
                        if (typeof r.style[i] != "undefined") return t[i]
                }(t),
                f = function() {
                    i.addClass("animating");
                    i.addClass("move-" + (i.hasClass("drawer-visible") ? "right" : "left"));
                    r.on(u, function() {
                        i.removeClass("animating move-left move-right").toggleClass("drawer-visible");
                        r.off(u)
                    })
                };
            n(".drawer-button, .drawer-close").on("click", function() {
                f()
            });
            n(".layout-backdrop").on("click", function() {
                i.hasClass("drawer-visible") && f()
            })
        }, function(n) {
            n("a[data-toggle=tab]").click(function() {
                var t = "#" + n(this).attr("aria-controls"),
                    r = n(this).closest(".tab-menu"),
                    i;
                n(r).find("li").removeClass("active");
                n(this).parent().addClass("active");
                n(t).closest(".tab-panel").find(".tab").removeClass("active");
                n(t).addClass("active");
                n(this).data("section") !== undefined && (i = n(this).data("section"), n(t).find(".section-panel").find(".section").removeClass("active"), n(i).addClass("active"))
            })
        }, function(n) {
            n("a[data-toggle=section]").click(function() {
                var t = "#" + n(this).attr("aria-controls");
                n(t).closest(".section-panel").find(".section").removeClass("active");
                n(t).addClass("active")
            })
        }, function(n) {
            n("a[data-toggle=panel]").unbind().click(function() {
                var t = "#" + n(this).attr("aria-controls"),
                    i = n(this).data("idle-label"),
                    r = n(this).data("active-label");
                n(t).hasClass("active") ? (n(t).removeClass("active"), i !== "" && n(this).find("span").text(i)) : (n(t).addClass("active"), r !== "" && n(this).find("span").text(r))
            })
        }, function(n) {
            n("div[data-action=banner]").hover(function() {
                n(this).addClass("show")
            }, function() {
                n(this).removeClass("show")
            })
        }, function(n) {
            n("a.share-article, a.share-sidebar, a.share-button").click(function(t) {
                window.open(n(this).attr("href"), "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");
                t.preventDefault()
            })
        }, function(n) {
            n('a[href*="#"]:not([href="#"], [data-toggle=modal])').click(function() {
                if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") || location.hostname === this.hostname) {
                    var i = n(this).attr("href"),
                        t = n(this.hash);
                    if (i.indexOf("#") === 0 && (t = t.length ? t : n("[name=" + this.hash.slice(1) + "]"), t.length)) return n("html, body").animate({
                        scrollTop: t.offset().top
                    }, 600), !1
                }
            })
        }, function(n) {
            n("a[data-action=elevator]").click(function() {
                return n("html, body").animate({
                    scrollTop: 0
                }, 600), !1
            })
        }, function(n) {
            n(window).scroll(function() {
                n(this).scrollTop() > 280 ? n("a.elevator").fadeIn() : n("a.elevator").fadeOut()
            })
        }, function(n) {
            n(".ranking").each(function() {
                var i = n(this).attr("data-percent"),
                    t = 360 / 100 * i;
                i > 50 ? n(this).find(".slice").addClass("large-slice").append('<span class="pie large-pie"><\/span>') : n(this).find(".slice").removeClass("large-slice");
                n(this).find(".pie").css({
                    "-moz-transform": "rotate(" + t + "deg)",
                    "-webkit-transform": "rotate(" + t + "deg)",
                    "-o-transform": "rotate(" + t + "deg)",
                    transform: "rotate(" + t + "deg)"
                })
            })
        }, function(n) {
            n("[data-toggle=modal]").click(function(t) {
                var u = n(this),
                    r = n("body"),
                    f = u.data("target"),
                    i = n(f);
                i.length === 1 && (r.addClass("modal-open"), i.removeAttr("style"), i.css("width", "100%"), i.addClass("modal-active"), i.siblings(".dialog.visible") && i.siblings(".dialog.visible").removeClass("visible"), n("[data-dismiss]", i).click(function() {
                    r.removeClass("modal-open");
                    i.removeClass("modal-active ajax-posted");
                    i.find("form").length && (i.find("form").get(0).reset(), i.find("form").find(".form-group").removeClass("form-error").find(".form-feedback").remove())
                }), i.focus(), i.keyup(function(t) {
                    t.keyCode == 27 && n("[data-dismiss]", i).trigger("click")
                }));
                t.preventDefault()
            })
        }, function(n) {
            n("[data-dialog]").click(function(t) {
                var i = n("#" + n(this).data("dialog"));
                i.length === 1 && (i.removeAttr("style"), i.addClass("visible"));
                t.preventDefault()
            })
        }, function(n) {
            n("[data-dismiss]").click(function(t) {
                var i = n(this).data("dismiss");
                n(this).closest("." + i).fadeOut(300);
                t.preventDefault()
            })
        }, function(n) {
            var i = function() {
                    var i = n("button[type=submit]", t),
                        u = i.data("label"),
                        r = i.outerWidth();
                    i.text("").attr("disabled", "disabled").append('<strong class="loading"><span><\/span><span><\/span><span><\/span><\/strong>').css({
                        width: r + "px"
                    })
                },
                r = function() {
                    var i = n("button[type=submit]", t),
                        r = i.data("label");
                    i.text(r).removeAttr("disabled").removeAttr("style").find(".loading").remove()
                },
                u = function(t) {
                    var i = t.validate({
                        debug: !0,
                        ignore: "",
                        errorClass: "form-note error",
                        highlight: function(t) {
                            n(t).closest(".form-group").addClass("form-error")
                        },
                        unhighlight: function(t) {
                            n(t).closest(".form-group").removeClass("form-error")
                        },
                        errorPlacement: function(t, i) {
                            i.attr("type") == "checkbox" ? t.insertBefore(n(i).closest("label")) : i.attr("type") == "radio" ? t.insertAfter(n(i).closest("ul")) : t.insertAfter(i)
                        }
                    });
                    n(t).find("[data-valdef]").each(function() {
                        var t = n(this);
                        t.rules("remove", "required");
                        t.rules("remove", "email");
                        t.rules("remove", "number");
                        t.rules("remove", "min_age");
                        t.rules("remove", "max_age");
                        t.rules("remove", "min");
                        t.rules("remove", "max")
                    });
                    n(t).find("[data-valdef]").each(function() {
                        for (var t = n(this), u = t.data("valdef").split("|"), r = t.data("valmsg").split("|"), i = 0; i < u.length; i++) switch (u[i]) {
                            case "required":
                                t.data("valmsg") != null || t.data("valmsg") != "" ? t.rules("add", {
                                    required: !0,
                                    messages: {
                                        required: r[i]
                                    }
                                }) : t.rules("add", {
                                    required: !0
                                });
                                break;
                            case "email":
                                t.data("valmsg") != null || t.data("valmsg") != "" ? t.rules("add", {
                                    email: !0,
                                    messages: {
                                        email: r[i]
                                    }
                                }) : t.rules("add", {
                                    email: !0
                                });
                                break;
                            case "number":
                                t.data("valmsg") != null || t.data("valmsg") != "" ? t.rules("add", {
                                    number: !0,
                                    messages: {
                                        number: r[i]
                                    }
                                }) : t.rules("add", {
                                    number: !0
                                });
                                break;
                            case "max":
                                t.rules("add", {
                                    max: t.data("valmax")
                                });
                                break;
                            case "min":
                                t.rules("add", {
                                    min: t.data("valmin")
                                });
                                break;
                            case "minage":
                                t.rules("add", {
                                    min_age: {
                                        required: !0,
                                        age: t.data("valminage")
                                    },
                                    messages: {
                                        min_age: t.data("valminage") == 0 ? "Enter Valid Birthdate" : "Must be Greater Than " + t.data("valminage") + " Years Old"
                                    }
                                });
                                break;
                            case "maxage":
                                t.rules("add", {
                                    max_age: {
                                        required: !0,
                                        age: t.data("valmaxage")
                                    },
                                    messages: {
                                        max_age: "Must be Less Than " + t.data("valmaxage") + " Years Old"
                                    }
                                });
                                break;
                            case "mobilephone":
                                t.rules("add", {
                                    maxlength: 15,
                                    minlength: 11,
                                    messages: {
                                        maxlength: "Please enter a valid mobile number.",
                                        minlength: "Please enter a valid mobile number."
                                    }
                                })
                        }
                    })
                },
                t = n(".validate-form");
            n(t).each(function() {
                r();
                u(n(this))
            });
            n(t).bind("submit", function(r) {
                r.preventDefault();
                t.valid() && (n(this).unbind().submit(), i())
            })
        }, function(n) {
            
        }, function(n) {
            lists = {
                CC: "GMeKPfzetOCTz1mNpF892KEw",
                CLO: "bfUQXsVhz9I20uHWXR9O0g",
                HLO: "qWcnHIXHWtbnlyhWZ763763Mog",
                VLO: "w892JFFA99BEsGoEmWGAQtgg",
                MOT: "ZSU763GdCA7xvfaF763fDDZjsw",
                TRV: "FMdwvGoLjtb9bilmjUAYuQ",
                PROP: "aCursuqMKRLYzy0YNRfRDA",
                PA: "mU1ugZwReS6AwCmK6AmDQg",
                EEI: "iE4j5BolCr08L6df3skqyg",
                DEP: "AsFowzActDkXm0N7O9vXVw",
                SMEB: "l5UNHl25m5eRQ7TPns4glg",
                SMEI: "zJyVLEghlV3a8cBwQRjd4Q",
                MAIN: "4j98zcFNEPT8ZAOJmL8Cug"
            };
            window.onload = function() {
                var i = Portal.getQStringParameterByName("vertical"),
                    r = Portal.getQStringParameterByName("name"),
                    u = Portal.getQStringParameterByName("email"),
                    e = Portal.getQStringParameterByName("utm_source"),
                    f = Portal.getQStringParameterByName("utm_medium"),
                    o = Portal.getQStringParameterByName("utm_campaign"),
                    t;
                typeof i != "undefined" && typeof r != "undefined" && typeof u != "undefined" && f == "email" && (t = lists[i], Portal.getQStringParameterByName("list") && (t = Portal.getQStringParameterByName("list")), n.ajax({
                    url: "/sendy/subscribe",
                    type: "GET",
                    data: "list=" + t + "&name=" + r + "&email=" + u,
                    success: function() {}
                }))
            }
        }, function(n) {
            var t = [],
                i = function(i) {
                    typeof scrollcheck == "undefined" || scrollcheck === null ? setTimeout(function() {
                        i(i)
                    }, 50) : (n('[data-scroll-modal="true"]').each(function() {
                        var i = n(this);
                        n("div.layout").append(i);
                        t.push({
                            position: i.data("scroll-modal-position"),
                            modal: i.attr("id")
                        })
                    }), t.length && (n("body").data("modals", t), scrollcheck.init()))
                };
            i(i)
        }, function(n) {
            t.PortalName == "CKJ" && n("input.format").length > 0 ? (n("input.format").each(function() {
                var t = n(this);
                n(this).val().length && n(this).val(n(this).val().replace(/\B(?=(\d{3})+(?!\d))/g, "."))
            }), n("input.format").bind("keyup", function(t) {
                t.which >= 37 && t.which <= 40 || n(this).val(function(n, t) {
                    return t.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                })
            }), n("input.format").closest("form").bind("submit", function() {
                var t = n(this).find("input.format").val().replace(/\./g, "");
                n(this).find("input.format").val(t)
            })) : t.PortalName == "ECM" && n("input.pesoformat").length > 0 && (n("input.pesoformat").each(function() {
                var t = n(this);
                n(this).val().length && n(this).val(n(this).val().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
            }), n("input.pesoformat").bind("keyup", function(t) {
                t.which >= 37 && t.which <= 40 || n(this).val(function(n, t) {
                    return t.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                })
            }), n("input.pesoformat").closest("form").bind("submit", function() {
                var t = n(this).find("input.pesoformat").val().replace(/\,/g, "");
                n(this).find("input.pesoformat").val(t)
            }))
        }, function() {
            var n;
            if (Portal.getQStringParameterByName("t") == null) {
                var t = Portal.getQStringParameterByName("utm_source"),
                    i = Portal.getQStringParameterByName("utm_medium"),
                    e = Portal.getQStringParameterByName("utm_term"),
                    o = Portal.getQStringParameterByName("utm_content"),
                    r = Portal.getQStringParameterByName("utm_campaign"),
                    s = CampaignModel(t, i, e, o, r),
                    u = location.hostname.split("."),
                    h = u.shift(),
                    f = u.join(".");
                typeof Cookies != "undefined" && (n = Cookies.withConverter({
                    read: function(n) {
                        return unescape(n)
                    },
                    write: function(n) {
                        return unescape(n)
                    }
                }), t != undefined && i != undefined && r != undefined && n.set("UTM", JSON.stringify(s), {
                    domain: "." + f
                }), Portal.getQStringParameterByName("refcode") != undefined && n.set("refCode", JSON.stringify(Portal.getQStringParameterByName("refcode")), {
                    domain: "." + f
                }))
            }
        }, function(n) {
            var t = "/Account/Login?returnUrl=",
                i = window.location.href.indexOf("?") !== -1 ? window.location.href.split("?")[0] : window.location.href;
            i == t.split("?")[0] ? t = "#" : t += window.location.href;
            n("#login-text, .login-text").attr("href", t)
        }, function(n) {
            n(".showLink").click(function() {
                n(this).find("ul.hide").toggleClass("show");
                n(this).find("i").toggleClass("i-action-minus");
                n(this).find("i").toggleClass("i-action-plus")
            })
        }, function(n) {
            
        }, function() {
            var n = function() {
                localStorage.clear();
                sessionStorage.clear()
            };
            window.location.href == "/log-out" && n()
        }],
        r = function() {
            u()
        },
        u = function() {
            i.forEach(function(i) {
                i(n, t)
            })
        };
    return {
        init: r
    }
}(jQuery, document);
portal.init();
quiz = function(n, t, r) {
    var u = [function(n) {
            if (n("#quiz").length > 0) {
                var f = "/Themes/eCompareMoTheme/Views/parts/quiz/quizAPI.aspx",
                    o = n("#quiz").data("quiz-id"),
                    t = n("#quiz").data("quiz-type") || 0,
                    u = 0,
                    s = [],
                    h = [],
                    c = [],
                    e = [];
                t == 0 ? (n.ajax({
                    method: "get",
                    url: f + "?type=get_ans_sheet&id=" + o,
                    dataType: "json",
                    success: function(n) {
                        s = n[0]
                    }
                }), n.ajax({
                    method: "get",
                    url: f + "?type=get_poll_result&id=" + o,
                    dataType: "json",
                    success: function(n) {
                        h = n[0]
                    }
                }), n.ajax({
                    method: "get",
                    url: f + "?type=get_poll_ans&id=" + o,
                    dataType: "json",
                    success: function(n) {
                        c = n[0]
                    }
                })) : t == 1;
                n(".wizard-grid").each(function() {
                    var a = n(this),
                        w = a.closest(".wizard-panel"),
                        o = a.closest("fieldset"),
                        l = a.closest("form"),
                        b = l.find("[type=submit]"),
                        k = l.find("[type=button]"),
                        ft = l.hasClass("step-wizard-form") ? !0 : !1,
                        v = n(".step-wizard"),
                        nt;
                    a.find("input:checked").closest("label").addClass("selected");
                    n("fieldset:not(:first-child)").addClass("hide");
                    var y = function(n) {
                            a.find(".option").removeClass("selected");
                            a.find("input:checked").closest(".option").addClass("selected");
                            rt();
                            n === o ? g() : it()
                        },
                        tt = function(t) {
                            var i = n("#" + t.data("options"));
                            i.addClass("active");
                            n(".form-control", i).change(function() {
                                var i = n(this).val();
                                a.find(".option[data-options=" + t.data("options") + "]").find("input").val(i);
                                i !== "" ? p(o) : g()
                            })
                        },
                        d = function() {
                            o.find(".option-amend").removeClass("active");
                            o.find(".option-amend").find("select").prop("selectedIndex", 0);
                            o.find(".option-amend").find("input").val("")
                        },
                        p = function(t) {
                            ut();
                            setTimeout(function() {
                                n("#" + t.data("amend")).addClass("active");
                                w.data("wizard") === "scroll" && typeof t.data("amend") != "undefined" && n("html, body").animate({
                                    scrollTop: n("#" + t.data("amend")).offset().top
                                }, 900)
                            }, 600)
                        },
                        g = function() {
                            var t = n("#" + o.data("amend"));
                            t.removeClass("active");
                            n(".wizard-grid", t).find(".option").removeClass("selected");
                            n(".wizard-grid", t).find("input:checked").prop("checked", !1)
                        },
                        it = function() {
                            n(".option", a).each(function() {
                                var t = n("#" + n(this).data("amend"));
                                t.removeClass("active");
                                n(".wizard-grid", t).find(".option").removeClass("selected");
                                n(".wizard-grid", t).find("input:checked").prop("checked", !1)
                            })
                        },
                        rt = function() {
                            n(".wizard-action .btn", o).removeClass("disabled")
                        },
                        ut = function() {
                            n(".wizard-action .btn", n("#" + o.data("amend"))).addClass("disabled")
                        },
                        et = function(n, t) {
                            t || (t = r.location.href);
                            n = n.replace(/[\[\]]/g, "\\$&");
                            var u = new RegExp("[?&]" + n + "(=([^&#]*)|&|#|$)"),
                                i = u.exec(t);
                            return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
                        };
                    n("input[type=radio]", a).on("click", function() {
                        var r = n(this).closest(".option"),
                            h, w;
                        if (r.closest("fieldset[data-question]").length) {
                            if (t == 0) {
                                if (r.closest("ul").find(".selected").length) return;
                                var l = "#FF5757",
                                    a = 0,
                                    f = r.closest("fieldset").data("question"),
                                    v = 0;
                                if (n("input[type=radio]", r).data("val") == s[f]) l = "#32bd43", a = 1, u++;
                                else
                                    for (i = 0; i < 4; i++) r.closest("ul").find("[data-val=" + s[f] + "]").closest(".option").css({
                                        "background-color": "#32bd43",
                                        color: "#fff"
                                    }).fadeTo("slow", .5).fadeTo("slow", 1);
                                for (i = 0; i < 4; i++) r.css({
                                    "background-color": l,
                                    color: "#fff"
                                }).fadeTo("slow", .5).fadeTo("slow", 1);
                                v = Math.round((parseInt(c[f]) + parseInt(a)) / (parseInt(c.total) + 1) * 100);
                                n("#q" + f + " span").text(v + "%")
                            } else t == 1 && (h = parseInt(n("input[type=radio]", r).attr("name")) - 1, e[h] === undefined ? e.push(n("input[type=radio]", r).data("val")) : e[h] = n("input[type=radio]", r).data("val"));
                            t == 0 && (w = n("input[type=radio]", r).attr("name"), n(":radio[name='" + w + "']").attr("disabled", !0));
                            n("input[type=radio]", r).removeAttr("disabled")
                        }(k.removeAttr("disabled"), r.hasClass("selected")) || (o.data("final") === !0 && b.removeAttr("disabled"), typeof r.data("options") != "undefined" ? (y(o), d(), tt(r)) : typeof r.data("amend") != "undefined" ? (y(r), p(r)) : (y(o), d(), p(o)))
                    });
                    nt = function(n) {
                        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n)
                    };
                    n(b).unbind().on("click", function() {
                        l.submit();
                        var t = n(this),
                            i = t.data("label"),
                            r = t.outerWidth();
                        t.text("").attr("disabled", "disabled").append('<strong class="loading"><span><\/span><span><\/span><span><\/span><\/strong>').css({
                            width: r + "px"
                        });
                        setTimeout(function() {
                            t.text(i).removeAttr("disabled").removeAttr("style").find(".loading").remove();
                            l.find(".option").removeClass("selected");
                            l.find(".option-amend").removeClass("active");
                            l.get(0).reset()
                        }, 1600)
                    });
                    n(k).unbind().click(function(i) {
                        var c = n(this),
                            p, r, g, w, b, tt, a, o, s, d, k;
                        if (c.is("[data-check]")) {
                            var rt = c.data("check"),
                                it = rt.split("|"),
                                y = [];
                            for (n(".error-message", l).remove(), p = 0; p <= it.length; p++)
                                if (r = n("#" + it[p]), r.removeClass("error warning"), r.is("[data-validate]"))
                                    for (g = r.data("validate").split("|"), w = 0; w < g.length; w++) switch (g[w]) {
                                        case "required":
                                            (r.val() == null || r.val() == "") && (y.push(r), r.addClass("error").after(n('<div class="form-note error error-message">This field is required.<\/div>')));
                                            break;
                                        case "email":
                                            r.val() != "" && nt(r.val()) == !1 && (y.push(r), r.addClass("warning").after(n('<div class="form-note warning error-message">Invalid email address.<\/div>')));
                                            break;
                                        case "number":
                                            r.val() != "" && n.isNumeric(r.val()) == !1 && (y.push(r), r.addClass("warning").after(n('<div class="form-note warning error-message">This field must be a number.<\/div>')))
                                    }
                                if (y.length) {
                                    y[0].focus();
                                    return
                                }
                        }
                        if (c.is("[data-quiz=show-result]")) {
                            if (t == 0) n("[data-quiz-result]").each(function() {
                                var t = n(this).data("quiz-range"),
                                    f, e, r, o, s, i;
                                for (t = t.split("-"), f = t[0] || t, e = t[1] || t, r = parseInt(f); r <= parseInt(e); r++) u == r && (o = Math.round((parseInt(h[n(this).data("quiz-result")]) + 1) / (parseInt(h.total) + 1) * 100), s = n(this).val().replace("{0}", o), n("#score-result").text(u), n("#score").val(u), n("#quiz-result").html(s), i = n("#fb-share").attr("href"), i = i.replace("{image}", n(this).data("quiz-result-image")), i = i.replace("{score}", u), n("#fb-share").attr("href", i))
                            });
                            else if (t == 1) {
                                function ut(n) {
                                    var r = [],
                                        i = [],
                                        u, t;
                                    for (n.sort(), t = 0; t < n.length; t++) n[t] !== u ? (r.push(n[t]), i.push(1)) : i[i.length - 1]++, u = n[t];
                                    return [r, i]
                                }
                                b = ut(e);
                                console.log(b);

                                function ft(n) {
                                    return n.indexOf(Math.max.apply(Math, n))
                                }
                                tt = n("[data-quiz-result=" + b[0][ft(b[1])] + "]");
                                a = tt.val().split("|");
                                n("#quiz-result-title").html(a[0]);
                                n("#quiz-result").html(a[1]);
                                n("#Result").val(a[0]);
                                o = n("#fb-share").attr("href");
                                o = o.replace("{image}", tt.data("quiz-result-image"));
                                o = o.replace("{title}", a[0] || null);
                                o = o.replace("{desc}", a[1] || null);
                                n("#fb-share").attr("href", o)
                            }
                            console.log(l.serialize());
                            n.ajax({
                                method: "post",
                                url: f,
                                data: l.serialize(),
                                success: function(n) {
                                    console.log(n)
                                }
                            })
                        }
                        c.is("[data-next-step]") ? (s = c.data("next-step"), k = s - 1, n("fieldset[data-step=" + k + "]").removeClass("active").removeClass("show").addClass("hide"), n("fieldset[data-step=" + s + "]").removeClass("hide").addClass("active").addClass("show"), v.find("li").removeClass("active"), v.find("li:nth-child(" + s + ")").addClass("active"), n("fieldset[data-step=" + s + "]").find(".btn[data-next-step]").attr("disabled", "disabled"), n("fieldset[data-step=" + s + "]").find("input[type=radio]:checked").length ? n("fieldset[data-step=" + s + "]").find(".btn[data-next-step]").removeAttr("disabled") : n("fieldset[data-step=" + s + "]").find(".btn[data-next-step]").attr("disabled", "disabled")) : c.is("[data-prev-step]") && (d = c.data("prev-step"), k = d + 1, n("fieldset[data-step=" + k + "]").removeClass("active").removeClass("show").addClass("hide"), n("fieldset[data-step=" + d + "]").removeClass("hide").addClass("active").addClass("show"), v.find("li").removeClass("active"), v.find("li:nth-child(" + d + ")").addClass("active"));
                        i.preventDefault()
                    });
                    n("[data-action=save]").on("click", function(t) {
                        var i = n(this).closest(".wizard-section");
                        setTimeout(function() {
                            i.hide();
                            i.siblings(".wizard-section").hide();
                            i.siblings(".wizard-summary").show();
                            n("html, body").animate({
                                scrollTop: w.offset().top - 100
                            }, 900)
                        }, 600);
                        t.preventDefault()
                    });
                    n("[data-action=change]").on("click", function(t) {
                        var i = n(this).closest(".wizard-summary");
                        setTimeout(function() {
                            i.hide();
                            i.siblings(".wizard-section").show()
                        }, 600);
                        t.preventDefault()
                    })
                })
            }
        }],
        f = function() {
            e(n, t, r)
        },
        e = function(n, t, i) {
            u.forEach(function(r) {
                r(n, t, i)
            })
        };
    return {
        init: f
    }
}(jQuery, document, window);
document.PortalName == "ECM" && quiz.init();
range = function(n, t, i) {
    var r = [function(n) {
            function t(n, t, i) {
                var r = parseInt(n, 10);
                return !isNaN(r) && r >= t && r <= i
            }
            n("input[type=range]").each(function() {
                var i = n(this),
                    r = n("#" + i.data("for")),
                    u = i.closest(".form-group"),
                    f = i.attr("min"),
                    e = i.attr("max"),
                    o = i.data("decimal"),
                    s = i.val();
                i.change(function() {
                    var t = parseFloat(n(this).val()),
                        i = t.toFixed(o).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                    r.is("input") ? r.val(t) : r.find("output").length === 1 ? r.find("output").val(i) : r.text(i)
                });
                r.bind("keyup change click", function() {
                    var r = n(this).val();
                    r === "" ? u.addClass("form-error") : t(r, f, e) ? u.removeClass("form-error") : u.addClass("form-error");
                    i.val(r)
                })
            })
        }],
        u = function() {
            f(n, t, i)
        },
        f = function(n, t, i) {
            r.forEach(function(r) {
                r(n, t, i)
            })
        };
    return {
        init: u
    }
}(jQuery, document, window);
range.init();
requestorder = function(n, t, i) {
    var r = [function(n) {
            function e(t) {
                var i = t.toLowerCase();
                return n(i).html()
            }

            function l(n) {
                for (var r = /\{\{([\w_]+)\}\}/g, i = [], t;
                    (t = r.exec(n)) != null;) i.push({
                    match: t[0],
                    variableName: t[1]
                });
                return i
            }

            function o(n, t, i) {
                var e, u, r, f;
                for (i == null && (i = !0), e = l(n), u = 0; u < e.length; u++) r = e[u], f = t[r.variableName], f != null && f != undefined ? n = n.replace(r.match, f) : i && (n = n.replace(r.match, ""));
                return n
            }
            var s = i.location.pathname,
                ut = URL_AffiliateServiceApi,
                c = n(".order-form-wizard").length >= 1 ? n(".order-form-wizard") : n(".side-order-form"),
                r = 1,
                u, h = function() {
                    n("input[data-picker]").each(function() {
                        var t = n(this);
                        n(".layout").append('<div class="birth-calendar date-dialog date-wizard date-modal" style="z-index: 1051;"><div class="calendar"><div class="date-picker" id="date-picker-modal-calendar-' + t.data("start-field") + '"><\/div><div class="date-action"><a class="btn btn-default btn-block" title="Update calendar"><span>Update<\/span><\/a><\/div><\/div><\/div>')
                    });
                    calendar.init()
                },
                a = function() {
                    var i = n("[name=NumberOfAdult]").val(),
                        t, r, u;
                    for (n("#adult-section").children().not(":first").remove(), t = 1; t <= i; t++) r = {
                        Name: "adult",
                        Index: t,
                        MaxDate: "-18y",
                        MinDate: "-65y",
                        MinAge: "18",
                        MaxAge: "65",
                        Column: 4,
                        OccupationValidation: "required"
                    }, u = o(e("#templates"), r), n("#adult-section").append(u);
                    i > 0 ? n("#adult-section").removeClass("hide") : n("#adult-section").addClass("hide")
                },
                v = function() {
                    var i = n("[name=NumberOfChild]").val(),
                        t, r, u;
                    for (n("#child-section").children().not(":first").remove(), t = 1; t <= i; t++) r = {
                        Name: "child",
                        Index: t,
                        MaxDate: "-1d",
                        MinDate: "-18y",
                        MinAge: "0",
                        MaxAge: "18",
                        HideOccupation: "hide",
                        Column: 6
                    }, u = o(e("#templates"), r), n("#child-section").append(u);
                    i > 0 ? n("#child-section").removeClass("hide") : n("#child-section").addClass("hide")
                },
                y = function(t) {
                    var r = n("[name=NumberOfFamily]").val(),
                        u, i;
                    for (n("input[name=CurrentNumberOfFamily]").val(r), n(".family-container").children().remove(), u = function(i) {
                            var r = {
                                    CurrentFamilyIndex: i
                                },
                                u = o(e("#family-templates"), r);
                            n(".family-container").append(u);
                            n(".family" + i + " [name=NumberOfAdult]").unbind().bind("change", function() {
                                var c = n(this).val(),
                                    r = n(this).closest(".family-section").data("family-index"),
                                    i, u, s;
                                for (n(".family" + r).find(".family-adult-section").children().remove(), i = 1; i <= c; i++) u = {
                                    Name: "family" + r + "adult",
                                    Index: i,
                                    MaxDate: "-18y",
                                    MinDate: "-65y",
                                    MinAge: "18",
                                    MaxAge: "65",
                                    Column: 4,
                                    OccupationValidation: "required"
                                }, s = o(e("#templates"), u), n(".family" + r).find(".family-adult-section").append(s);
                                h();
                                f(t)
                            });
                            n(".family" + i + " [name=NumberOfChild]").unbind().bind("change", function() {
                                var c = n(this).val(),
                                    r = n(this).closest(".family-section").data("family-index"),
                                    i, u, s;
                                for (n(".family" + r).find(".family-child-section").children().remove(), i = 1; i <= c; i++) u = {
                                    Name: "family" + r + "child",
                                    Index: i,
                                    MaxDate: "-1d",
                                    MinDate: "-18y",
                                    MinAge: "0",
                                    MaxAge: "18",
                                    HideOccupation: "hide",
                                    Column: 6
                                }, s = o(e("#templates"), u), n(".family" + r).find(".family-child-section").append(s);
                                h();
                                f(t)
                            });
                            n(".family" + i + " .btn-default").bind("click", function(t) {
                                t.preventDefault();
                                var i = n(this).closest(".family-section").data("family-index");
                                n(".family" + i).remove()
                            })
                        }, i = 1; i <= r; i++) u(i);
                    r > 0 ? (n("#family-section").removeClass("hide"), n("#family-section select").trigger("change")) : n("#family-section").addClass("hide");
                    n("#family-section").find(".btn-primary").bind("click", function(i) {
                        i.preventDefault();
                        var r = parseInt(n("input[name=CurrentNumberOfFamily]").val()) + 1;
                        n("input[name=CurrentNumberOfFamily]").val(r);
                        u(r);
                        n(".family" + r + " select").trigger("change");
                        h();
                        f(t)
                    })
                },
                p = function(t) {
                    var o = n("[name=NumberOfAdult]").val(),
                        s = n("[name=NumberOfChild]").val(),
                        a = n("[name=CurrentNumberOfFamily]").val(),
                        i = 0,
                        f = function(n) {
                            return "₱ " + n + ".00"
                        },
                        h, c, r, e, l;
                    for (o > 0 ? (n("#AdultQuantity").closest("tr").removeClass("hide"), n("#AdultQuantity").text(o), h = o * 150, i = h + i, n("#AdultAmountSum").text(f(h))) : n("#AdultQuantity").closest("tr").addClass("hide"), s > 0 ? (n("#ChildQuantity").closest("tr").removeClass("hide"), n("#ChildQuantity").text(s), c = s * 600, i = c + i, n("#ChildAmountSum").text(f(c))) : n("#ChildQuantity").closest("tr").addClass("hide"), r = 0, e = 1; e <= a; e++) n(".family" + e).length > 0 && (r = ++r);
                    r > 0 ? (n("#FamilyQuantity").closest("tr").removeClass("hide"), n("#FamilyQuantity").text(r), l = r * 1200, i = l + i, n("#FamilyAmountSum").text(f(l))) : n("#FamilyQuantity").closest("tr").addClass("hide");
                    n("#TotalSum").text(f(i));
                    u = i;
                    //ga("send", "event", t, "Compare_wizard", "Cart_value_screen3:" + i, 5)
                },
                w = function() {
                    var e = t.PortalName,
                        i = [],
                        r = "/lookups/getprovince",
                        u = function(t) {
                            n.each(t, function(t, i) {
                                n("#province").append(n("<option><\/option>").val(i.value).html(i.text))
                            })
                        },
                        f = function() {
                            n.ajax({
                                url: r,
                                method: "GET",
                                success: function(n) {
                                    var t = JSON.parse(n.Result);
                                    for (x = 0; x < t.length; x++) i.push({
                                        value: t[x].ProvinceId,
                                        text: t[x].DisplayedName
                                    });
                                    u(i)
                                }
                            })
                        };
                    f()
                },
                b = function(t) {
                    if (t > 0) {
                        var i = [{
                                value: "",
                                text: "Please select..."
                            }],
                            r = function(t) {
                                n("#city").html("");
                                n.each(t, function(t, i) {
                                    n("#city").append(n("<option><\/option>").val(i.value).html(i.text))
                                })
                            },
                            u = function() {
                                n.ajax({
                                    url: "/lookups/getregion?provinceId=" + t,
                                    method: "GET",
                                    type: "JSON",
                                    success: function(n) {
                                        var n = JSON.parse(n.Result);
                                        for (x = 0; x < n.length; x++) i.push({
                                            value: n[x].RegionId,
                                            text: n[x].DisplayedName
                                        });
                                        r(i)
                                    }
                                })
                            };
                        u()
                    }
                },
                k = function(t) {
                    if (t > 0) {
                        var i = [{
                                value: "",
                                text: "Please select..."
                            }],
                            r = function(t) {
                                n("#district").html("");
                                n.each(t, function(t, i) {
                                    n("#district").append(n("<option><\/option>").val(i.value).html(i.text))
                                })
                            },
                            u = function() {
                                n.ajax({
                                    url: "/lookups/getdistrict?regionId=" + t,
                                    method: "GET",
                                    type: "JSON",
                                    success: function(n) {
                                        var n = JSON.parse(n.Result);
                                        for (x = 0; x < n.length; x++) i.push({
                                            value: n[x].DistrictId,
                                            text: n[x].DisplayedName
                                        });
                                        r(i)
                                    }
                                })
                            };
                        u()
                    }
                },
                f = function(t) {
                    var r = t.validate({
                            debug: !0,
                            ignore: "",
                            errorClass: "form-note error",
                            highlight: function(t) {
                                n(t).closest(".form-group").addClass("form-error")
                            },
                            unhighlight: function(t) {
                                n(t).closest(".form-group").removeClass("form-error")
                            },
                            errorPlacement: function(t, i) {
                                i.attr("type") == "checkbox" ? t.insertBefore(n(i).closest("label")) : i.attr("type") == "radio" ? t.insertAfter(n(i).closest("ul")) : t.insertAfter(i)
                            }
                        }),
                        i;
                    n(t).find("fieldset:not(.active) [data-valdef]").each(function() {
                        var t = n(this);
                        t.rules("remove", "required");
                        t.rules("remove", "email");
                        t.rules("remove", "number");
                        t.rules("remove", "min_age");
                        t.rules("remove", "max_age");
                        t.rules("remove", "min");
                        t.rules("remove", "max")
                    });
                    i = {};
                    n(t).find("fieldset.active [data-valdef]").each(function() {
                        for (var t = n(this), r = t.data("valdef").split("|"), i = 0; i < r.length; i++) switch (r[i]) {
                            case "required":
                                t.data("valmsg") != null || t.data("valmsg") != "" ? t.rules("add", {
                                    required: !0,
                                    messages: {
                                        required: t.data("valmsg")
                                    }
                                }) : t.rules("add", {
                                    required: !0
                                });
                                break;
                            case "email":
                                t.rules("add", {
                                    email: !0
                                });
                                break;
                            case "number":
                                t.rules("add", {
                                    number: !0
                                });
                                break;
                            case "max":
                                t.rules("add", {
                                    max: t.data("valmax")
                                });
                                break;
                            case "min":
                                t.rules("add", {
                                    min: t.data("valmin")
                                });
                                break;
                            case "minage":
                                t.rules("add", {
                                    min_age: {
                                        required: !0,
                                        age: t.data("valminage")
                                    },
                                    messages: {
                                        min_age: t.data("valminage") == 0 ? "Enter Valid Birthdate" : "Must be Greater Than " + t.data("valminage") + " Years Old"
                                    }
                                });
                                break;
                            case "maxage":
                                t.rules("add", {
                                    max_age: {
                                        required: !0,
                                        age: t.data("valmaxage")
                                    },
                                    messages: {
                                        max_age: "Must be Less Than " + t.data("valmaxage") + " Years Old"
                                    }
                                });
                                break;
                            case "mobilephone":
                                t.rules("add", {
                                    maxlength: 15,
                                    minlength: 11,
                                    messages: {
                                        maxlength: "Please enter a valid mobile number.",
                                        minlength: "Please enter a valid mobile number."
                                    }
                                });
                                break;
                            case "tinnumber":
                                t.rules("add", {
                                    number: !0,
                                    maxlength: 11,
                                    messages: {
                                        maxlength: "Please enter no more than 11 digits."
                                    }
                                });
                                break;
                            case "manufacturingyear":
                                t.rules("add", {
                                    number: !0,
                                    maxlength: 4,
                                    messages: {
                                        maxlength: "Please enter no more than 4 digits."
                                    }
                                })
                        }
                    })
                },
                d = function(t) {
                    var d = t.data("guid"),
                        ut = t.data("companyproductid") == null ? 552 : t.data("companyproductid"),
                        ft = t.find("button.next"),
                        et = t.find("button.back"),
                        e = t.data("gacategory"),
                        ct = t.data("redirectto") == null ? "thank-you-promo" : t.data("redirectto"),
                        o = n(".step-wizard"),
                        ot = parseInt(n("[name=NumberOfAdult]").val()),
                        st = parseInt(n("[name=NumberOfChild]").val()),
                        ht = parseInt(n("[name=NumberOfFamily]").val()),
                        c, l;
                    n("#FirstPageValidation").val(ot + st + ht).trigger("change");
                    //ga("send", "event", e, "Compare_wizard", "Loaded: true", 5);
                    ft.bind("click", function(i) {
                        var d, g, c, l;
                        if (i.preventDefault(), n(t).valid()) {
                            if (n("fieldset[data-step=" + r + "]").removeClass("active").removeClass("show").addClass("hide"), r = r + 1, 0, n("fieldset[data-step=" + r + "]").removeClass("hide").addClass("active").addClass("show"), d = n("fieldset[data-step=" + r + "]").data("step-indicator"), o.find("li").removeClass("active"), o.find("li:nth-child(" + d + ")").addClass("active"), r == 2)
                                if (s == "/ctpl-order-page") {
                                    g = n("[name=CTPLVehicleType]:checked").val();
                                    c = "";
                                    switch (g) {
                                        case "Private Car":
                                            c = n("#PrivateCarNetPremium .CTPLVehicleTypePrice").attr("value");
                                            break;
                                        case "Commercial Vehicle":
                                            c = n("#CommercialVehicleNetPremium .CTPLVehicleTypePrice").attr("value");
                                            break;
                                        case "Truck":
                                            c = n("#TruckNetPremium .CTPLVehicleTypePrice").attr("value");
                                            break;
                                        case "Trailer/Motorcycle":
                                            c = n("#TrailerMotorcycleNetPremium .CTPLVehicleTypePrice").attr("value")
                                    }
                                    u = c;
                                    n("#province", this.form).length && (w(), n("#city", this.form).length && n("#province", this.form).change(function() {
                                        var t = n(this).val();
                                        b(t)
                                    }), n("#district", this.form).length && n("#city", this.form).change(function() {
                                        var t = n(this).val();
                                        k(t)
                                    }))
                                } else //ga("send", "event", e, "Compare_wizard", "next-steps: 2 data, " + n("[name=NumberOfAdult]").val() + " adults, " + n("[name=NumberOfChild]").val() + " children, " + n("[name=NumberOfFamily]").val() + " family", 5), a(), v(), y(t), h();
                            r == 3 && (s == "/ctpl-order-page" ? (l = n("#col-VehicleManufacturerOther"), n("#VehicleManufacturer", this.form).change(function() {
                                l.addClass("hide");
                                l.find(".error").remove();
                                l.removeClass("form-error");
                                l.find("input").rules("remove", "required");
                                n("#VehicleManufacturerOther").removeAttr("data-valdef");
                                n("#VehicleManufacturer").val() == "OTHERS" && (n("#VehicleManufacturerOther").attr("data-valdef", "required"), l.removeClass("hide"));
                                f(t)
                            })) : p(e));
                            f(t)
                        }
                    });
                    et.bind("click", function(i) {
                        i.preventDefault();
                        console.log(r);
                        n("fieldset[data-step=" + r + "]").removeClass("active").removeClass("show").addClass("hide");
                        r = r - 1;
                        //ga("send", "event", e, "Compare_wizard", "back-steps: " + r, 5);
                        n("fieldset[data-step=" + r + "]").removeClass("hide").addClass("active").addClass("show");
                        var u = n("fieldset[data-step=" + r + "]").data("step-indicator");
                        o.find("li").removeClass("active");
                        o.find("li:nth-child(" + u + ")").addClass("active");
                        f(t)
                    });
                    c = function() {
                        n(t).find("button[type=submit]").attr("disabled", "disabled")
                    };
                    l = function() {
                        n(t).find("button[type=submit]").removeAttr("disabled")
                    };
                    n("fieldset[data-step=1] select").bind("change", function() {
                        var t = parseInt(n("[name=NumberOfAdult]").val()),
                            i = parseInt(n("[name=NumberOfChild]").val()),
                            r = parseInt(n("[name=NumberOfFamily]").val());
                        n("#FirstPageValidation").val(t + i + r)
                    });
                    n(t).bind("submit", function(f) {
                        if (f.preventDefault(), t.valid()) {
                            c();
                            var s = {
                                __RequestVerificationToken: AntiForgeryToken,
                                contract: JSON.stringify({
                                    B2B: d,
                                    CompanyProductId: ut,
                                    Ad: "ecm",
                                    ContractPerson: g(),
                                    CustomerContact: nt(),
                                    CustomerEmployments: tt(),
                                    CustomerAddresses: it(),
                                    GenericClosingDataQuestion: rt()
                                })
                            };
                            //ga("send", "event", e, "Compare_wizard", "next-steps: 5", 5);
                            n.ajax({
                                url: "/order/createorder",
                                method: "POST",
                                data: s,
                                crossDomain: !0
                            }).done(function(t) {
                                if (n("[name=PaymentMode]:checked").val() == "Coins") i.location.href = t, 0 //ga("send", "event", e, "Compare_wizard", "Payment_coins_value: " + u, 5);
                                else if (n("[name=PaymentMode]:checked").val() == "Bank") {
                                    n("fieldset[data-step=" + r + "]").removeClass("active").removeClass("show").addClass("hide");
                                    r = r + 1;
                                    n("fieldset[data-step=" + r + "]").removeClass("hide").addClass("active").addClass("show");
                                    var f = n("fieldset[data-step=" + r + "]").data("step-indicator");
                                    o.find("li").removeClass("active");
                                    o.find("li:nth-child(" + f + ")").addClass("active");
                                    n("#cid").text(t)
                                } else n("[name=PaymentMode]:checked").val() == "CreditCard" && (i.location.href = t, 0)
                                l()
                            })
                        }
                    });
                    n("[name=PaymentMode]").bind("change", function() {
                        //ga("send", "event", e, "Compare_wizard", "Payment_type_selected: " + n(this).val(), 5)
                    })
                };
            n(c).each(function() {
                n.validator.addMethod("max_age", function(n, t, i) {
                    var s = i.age,
                        r = new Date,
                        u = new Date(n),
                        f = r.getFullYear() - u.getFullYear(),
                        e = r.getMonth() - u.getMonth(),
                        o;
                    return (e < 0 || e == 0 && r.getDate() == u.getDate()) && (f = f + 1), o = r.getFullYear() - (r.getFullYear() - s), o >= f
                });
                n.validator.addMethod("min_age", function(n, t, i) {
                    var s = i.age,
                        r = new Date,
                        u = new Date(n),
                        f = r.getFullYear() - u.getFullYear(),
                        e = r.getMonth() - u.getMonth(),
                        o;
                    return (e < 0 || e == 0 && r.getDate() == u.getDate()) && (f = f - 1), o = r.getFullYear() - (r.getFullYear() - s), o <= f
                });
                d(n(this));
                f(n(this))
            });
            var g = function() {
                    return {
                        FirstName: n("#FirstName").val(),
                        MiddleName: n("#MiddleName").val(),
                        LastName: n("#LastName").val(),
                        Email: n("#Email").val(),
                        Telephone2Number: n("#Telephone1Number").val()
                    }
                },
                nt = function() {
                    return {
                        Email: n("#Email").val(),
                        Mobile1Number: n("#Telephone1Number").val()
                    }
                },
                tt = function() {
                    return [{
                        EmployedPosition: n("#CustomerOccupation").val(),
                        IsCurrentEmployment: !0
                    }]
                },
                it = function() {
                    return [{
                        StreetLine1: n("#street").val(),
                        AdditionalAddressInfo3: n("#village").val(),
                        DistrictId: n("#district").val(),
                        ProvinceId: n("#province").val(),
                        RegionId: n("#city").val(),
                        AreaCode: n("#zipcode").val(),
                        AddressTypeId: 1
                    }]
                },
                rt = function() {
                    var t = [],
                        r, i, f, o, v, l;
                    if (s == "/dengue-insurance-order-page") {
                        var h = parseInt(n("[name=NumberOfAdult]").val()),
                            c = parseInt(n("[name=NumberOfChild]").val()),
                            a = parseInt(n("[name=CurrentNumberOfFamily]").val());
                        if (t.push({
                                Name: "PaymentMode",
                                Answer: n("[name=PaymentMode]:checked").val()
                            }), t.push({
                                Name: "TotalAmount",
                                Answer: u
                            }), h > 0)
                            for (t.push({
                                    Name: "AdultsTotal",
                                    Answer: h * 150
                                }), i = 1; i <= h; i++) t.push({
                                Name: "Adult" + i + "_Name",
                                Answer: n("#adult" + i + "-name").val()
                            }), t.push({
                                Name: "Adult" + i + "_Occupation",
                                Answer: n("#adult" + i + "-occupation").val()
                            }), t.push({
                                Name: "Adult" + i + "_Birthdate",
                                Answer: n("#adult" + i + "-birthday").val()
                            });
                        if (c > 0)
                            for (t.push({
                                    Name: "ChildTotal",
                                    Answer: c * 600
                                }), i = 1; i <= c; i++) t.push({
                                Name: "Child" + i + "_Name",
                                Answer: n("#child" + i + "-name").val()
                            }), t.push({
                                Name: "Child" + i + "_Birthdate",
                                Answer: n("#child" + i + "-birthday").val()
                            });
                        if (a > 0)
                            for (t.push({
                                    Name: "FamilyTotal",
                                    Answer: a * 1200
                                }), r = 0, i = 1; i <= a; i++)
                                if (n(".family" + i).length > 0) {
                                    r = ++r;
                                    var e = n(".family" + i),
                                        h = e.find(" [name=NumberOfAdult]").val(),
                                        c = e.find(" [name=NumberOfChild]").val();
                                    for (t.push({
                                            Name: "Family" + r + "_NumberOfAdult",
                                            Answer: h
                                        }), t.push({
                                            Name: "Family" + r + "_NumberOfChild",
                                            Answer: c
                                        }), f = 1; f <= h; f++) t.push({
                                        Name: "Family" + r + "_Adult" + f + "_Name",
                                        Answer: e.find("#family" + i + "adult" + f + "-name").val()
                                    }), t.push({
                                        Name: "Family" + r + "_Adult" + f + "_Birthday",
                                        Answer: e.find("#family" + i + "adult" + f + "-birthday").val()
                                    }), t.push({
                                        Name: "Family" + r + "_Adult" + f + "_Occupation",
                                        Answer: e.find("#family" + i + "adult" + f + "-occupation").val()
                                    });
                                    for (o = 1; o <= c; o++) t.push({
                                        Name: "Family" + r + "_Child" + o + "_Name",
                                        Answer: e.find("#family" + i + "child" + o + "-name").val()
                                    }), t.push({
                                        Name: "Family" + r + "_Child" + o + "_Birthday",
                                        Answer: e.find("#family" + i + "child" + o + "-birthday").val()
                                    })
                                }
                    } else s == "/ctpl-order-page" && (v = n("[name=CTPLVehicleType]:checked").val(), l = n("#VehicleManufacturer").val(), t.push({
                        Name: "CTPLVehicleType",
                        Answer: v
                    }), t.push({
                        Name: "CTPLTINNumber",
                        Answer: n("#TINNumber").val()
                    }), t.push({
                        Name: "CTPLTotalAmount",
                        Answer: u
                    }), l == "OTHERS" ? (t.push({
                        Name: "CTPLVehicleManufacturer",
                        Answer: l
                    }), t.push({
                        Name: "CTPLVehicleManufacturerOther",
                        Answer: n("#VehicleManufacturerOther").val()
                    })) : t.push({
                        Name: "CTPLVehicleManufacturer",
                        Answer: l
                    }), t.push({
                        Name: "CTPLVehicleManufacturerYear",
                        Answer: n("#VehicleManufacturerYear").val()
                    }), t.push({
                        Name: "CTPLVehicleModel",
                        Answer: n("#VehicleModel").val()
                    }), t.push({
                        Name: "CTPLVehicleSeries",
                        Answer: n("#VehicleSeries").val()
                    }), t.push({
                        Name: "CTPLVehicleColor",
                        Answer: n("#VehicleColor").val()
                    }), t.push({
                        Name: "CTPLVehicleEngineNumber",
                        Answer: n("#VehicleEngineNumber").val()
                    }), t.push({
                        Name: "CTPLVehicleChassisNumber",
                        Answer: n("#VehicleChassisNumber").val()
                    }), t.push({
                        Name: "CTPLVehiclePlateConductionNumber",
                        Answer: n("#VehiclePlateConductionNumber").val()
                    }), t.push({
                        Name: "CTPLVehicleMVFileNumber",
                        Answer: n("#VehicleMVFileNumber").val()
                    }), t.push({
                        Name: "CTPLPaymentMode",
                        Answer: n("[name=PaymentMode]:checked").val()
                    }));
                    return t
                }
        }],
        u = function() {
            f(n, t, i)
        },
        f = function(n, t, i) {
            r.forEach(function(r) {
                r(n, t, i)
            })
        };
    return {
        init: u
    }
}(jQuery, document, window);
requestorder.init();
result = function(n, t, i) {
    var r = [function(n) {
            function o(n) {
                var t = new Date,
                    i = t.getFullYear() - n.getFullYear(),
                    r = t.getMonth() - n.getMonth();
                return (r < 0 || r === 0 && t.getDate() < n.getDate()) && i--, i
            }
            var u = n("#card-list"),
                r = {},
                e = "{0}/id-id/product/CC/Mandiri_Prefill?{1}";
            String.prototype.format || (String.prototype.format = function() {
                var n = arguments;
                return this.toString().replace(/{(\d+)}/g, function(t, i) {
                    return typeof n[i] != "undefined" ? n[i] : t
                })
            });
            var s = function() {
                    var i, u, f, t, e;
                    r.MonthlyIncome < 2e7 && n("#card-list").find('.card[data-companyid="664"]').addClass("hide");
                    r.MonthlyIncome < 1e7 && (n("#card-list").find('.card[data-companyid="37"]').addClass("hide"), n("#card-list").find('.card[data-companyid="667"]').addClass("hide"), n("#card-list").find('.card[data-companyid="685"]').addClass("hide"), n("#card-list").find('.card[data-companyid="686"]').addClass("hide"), n("#card-list").find('.card[data-companyid="369"]').addClass("hide"));
                    r.MonthlyIncome < 5e6 && n("#card-list").find('.card[data-companyid="43"]').addClass("hide");
                    i = [6, 5, 4, 2];
                    r.CCEmploymentTypeId == 3 || i.includes(parseInt(r.EmploymentLevelId)) || n("#card-list").find('.card[data-companyid="37"]').addClass("hide");
                    u = [5, 8, 9, 10];
                    r.CCEmploymentTypeId == 3 || u.includes(parseInt(r.EducationId)) || (n("#card-list").find('.card[data-companyid="685"]').addClass("hide"), n("#card-list").find('.card[data-companyid="686"]').addClass("hide"), n("#card-list").find('.card[data-companyid="369"]').addClass("hide"));
                    r.Birthdate != null && (f = new Date(r.Birthdate), t = o(f), (t < 21 || t > 65) && n("#card-list").find(".card").addClass("hide"), (t <= 25 || t > 50) && (n("#card-list").find('.card[data-companyid="685"]').addClass("hide"), n("#card-list").find('.card[data-companyid="686"]').addClass("hide"), n("#card-list").find('.card[data-companyid="369"]').addClass("hide")), t < 30 && n("#card-list").find('.card[data-companyid="37"]').addClass("hide"));
                    [2, 3, 4, 5, 6, 164, 167, 168, 170, 171, 189, 190, 193].includes(parseInt(r.RegionId)) || n("#card-list").find(".card").addClass("hide");
                    e = n("#card-list").closest(".article").data("product");
                    n("#card-list").find(".card.hide").length == 4 ? n("#no-result").removeClass("hide") : n("#result").removeClass("hide")
                },
                h = function() {
                    u.find(".card-data a").bind("click", function(t) {
                        t.preventDefault();
                        var i = n(this).closest(".card").data("companyid");
                        f(i)
                    });
                    n(".modal-content a.btn-default").bind("click", function(t) {
                        t.preventDefault();
                        var i = n("[data-target='#" + n(this).closest(".modal-marketplace").attr("id") + "']").closest(".card").data("companyid");
                        f(i)
                    })
                },
                f = function(n) {
                    var f, u, i, o;
                    r.Birthdate = new Date(r.Birthdate).toISOString("id-id");
                    f = jQuery.extend(r, {
                        CompanyProductId: n
                    });
                    u = "";
                    for (i in f) f.hasOwnProperty(i) && (u += i != "Birthdate" ? "{0}={1}&".format(i, encodeURIComponent(f[i])) : "{0}={1}&".format(i, f[i]));
                    u = u.substring(0, u.length - 1);
                    o = e.format(API_URL, u);
                    t.location = o
                };
            u.length > 0 && (r = function(n) {
                var r, t, i;
                if (n == "") return {};
                for (r = {}, t = 0; t < n.length; ++t)(i = n[t].split("=", 2), i.length == 2) && (r[i[0]] = decodeURIComponent(i[1].replace(/\+/g, " ")));
                return r
            }(i.location.search.substr(1).split("&")), h(), s())
        }],
        u = function() {
            f(n, t, i)
        },
        f = function(n, t, i) {
            r.forEach(function(r) {
                r(n, t, i)
            })
        };
    return {
        init: u
    }
}(jQuery, document, window);
result.init();
result = function(n, t, i) {
    var r = [function(n) {
            function o(n) {
                var t = new Date,
                    i = t.getFullYear() - n.getFullYear(),
                    r = t.getMonth() - n.getMonth();
                return (r < 0 || r === 0 && t.getDate() < n.getDate()) && i--, i
            }
            var u = n("#card-list"),
                r = {},
                e = "{0}/id-id/product/CC/Mandiri_Prefill?{1}";
            String.prototype.format || (String.prototype.format = function() {
                var n = arguments;
                return this.toString().replace(/{(\d+)}/g, function(t, i) {
                    return typeof n[i] != "undefined" ? n[i] : t
                })
            });
            var s = function() {
                    var i, t, u;
                    r.MonthlyIncome < 2e7 && n("#card-list").find('.card[data-companyid="664"]').addClass("hide");
                    r.MonthlyIncome < 1e7 && (n("#card-list").find('.card[data-companyid="37"]').addClass("hide"), n("#card-list").find('.card[data-companyid="667"]').addClass("hide"));
                    r.MonthlyIncome < 5e6 && n("#card-list").find('.card[data-companyid="43"]').addClass("hide");
                    r.Birthdate != null && (i = new Date(r.Birthdate), t = o(i), (t < 21 || t > 65) && n("#card-list").find(".card").addClass("hide"));
                    [2, 3, 4, 5, 6, 164, 167, 168, 170, 171, 189, 190, 193].includes(parseInt(r.RegionId)) || n("#card-list").find(".card").addClass("hide");
                    u = n("#card-list").closest(".article").data("product");
                    n("#card-list").find(".card.hide").length == 3 ? n("#no-result").removeClass("hide") : n("#result").removeClass("hide")
                },
                h = function() {
                    u.find(".card-data a").bind("click", function(t) {
                        t.preventDefault();
                        var i = n(this).closest(".card").data("companyid");
                        f(i)
                    });
                    n(".modal-content a.btn-default").bind("click", function(t) {
                        t.preventDefault();
                        var i = n("[data-target='#" + n(this).closest(".modal-marketplace").attr("id") + "']").closest(".card").data("companyid");
                        f(i)
                    })
                },
                f = function(n) {
                    var f, u, i, o;
                    r.Birthdate = new Date(r.Birthdate).toISOString("id-id");
                    f = jQuery.extend(r, {
                        CompanyProductId: n
                    });
                    u = "";
                    for (i in f) f.hasOwnProperty(i) && (u += i != "Birthdate" ? "{0}={1}&".format(i, encodeURIComponent(f[i])) : "{0}={1}&".format(i, f[i]));
                    u = u.substring(0, u.length - 1);
                    o = e.format(API_URL, u);
                    t.location = o
                };
            u.length > 0 && (r = function(n) {
                var r, t, i;
                if (n == "") return {};
                for (r = {}, t = 0; t < n.length; ++t)(i = n[t].split("=", 2), i.length == 2) && (r[i[0]] = decodeURIComponent(i[1].replace(/\+/g, " ")));
                return r
            }(i.location.search.substr(1).split("&")), h(), s())
        }],
        u = function() {
            f(n, t, i)
        },
        f = function(n, t, i) {
            r.forEach(function(r) {
                r(n, t, i)
            })
        };
    return {
        init: u
    }
}(jQuery, document, window);
result.init();
scrollcheck = function(n, t) {
    var i = [function(n) {
            var i = n("body").data("modals"),
                e, o;
            if (i && i.length !== 0) {
                var r = [],
                    u = [],
                    f = i;
                n.each(f, function(n) {
                    var t = parseInt(f[n].position.replace("%", ""));
                    u.push(t === 100 ? 95 : t);
                    r.push(f[n].modal)
                });
                e = function(t, i) {
                    n.each(t, function(n, t) {
                        i > t && o(n)
                    })
                };
                o = function(t) {
                    var f = n("body"),
                        i = n("#" + r[t]);
                    if (!f.hasClass("modal-open")) {
                        f.addClass("modal-open");
                        i.addClass("modal-active");
                        // var e = i.data("ga-category") || "modal",
                        //     o = i.data("ga-action") || "popup_triggered",
                        //     s = i.data("ga-label") || window.location.pathname;
                        //ga("send", "event", e, o, s, 5);
                        console.log('woop');
                        delete r[t];
                        delete u[t];
                        n("[data-dismiss]", i).click(function() {
                            f.removeClass("modal-open");
                            i.removeClass("modal-active ajax-posted");
                            i.find("form").length && (i.find("form").get(0).reset(), i.find("form").find(".form-group").removeClass("form-error").find(".form-feedback").remove())
                        });
                        i.focus();
                        i.keyup(function(t) {
                            t.keyCode == 27 && n("[data-dismiss]", i).trigger("click")
                        })
                    }
                };
                n(window).scroll(function() {
                    var r = n(window).scrollTop(),
                        f = n(t).height(),
                        o = n(window).height(),
                        i = r / (f - o) * 100;
                    i = i.toFixed(1);
                    e(u, i)
                }).trigger("scroll")
            }
        }],
        r = function() {
            u()
        },
        u = function() {
            i.forEach(function(i) {
                i(n, t)
            })
        };
    return {
        init: r
    }
}(jQuery, document);
tvinternet = function(n, t, i) {
    var r = [function(n) {
            function u(i, r) {
                var u = n("#tv-internet-type").val(),
                    f;
                r != null && (u = r);
                console.log(u);
                t.PortalName == "CKJ" && (n("#tv-internet-type").val(u), n("#myTable thead th:nth-child(7)").addClass("table-hidden"), n("#myTable tbody td:nth-child(7)").addClass("table-hidden"));
                u == 0 ? (n("#myTable thead th:nth-child(3)").addClass("table-hidden"), n("#myTable thead th:nth-child(5)").removeClass("table-hidden"), n("#myTable thead th:nth-child(6)").removeClass("table-hidden"), n("#myTable tbody td:nth-child(3)").addClass("table-hidden"), n("#myTable tbody td:nth-child(5)").removeClass("table-hidden"), n("#myTable tbody td:nth-child(6)").removeClass("table-hidden"), n("#myTable tbody tr").addClass("table-hidden"), n("#myTable tbody tr.cable-tv").removeClass("table-hidden"), r = "cable-tv") : u == 1 ? (n("#myTable thead th:nth-child(3)").removeClass("table-hidden"), n("#myTable thead th:nth-child(5)").addClass("table-hidden"), n("#myTable thead th:nth-child(6)").addClass("table-hidden"), n("#myTable tbody td:nth-child(3)").removeClass("table-hidden"), n("#myTable tbody td:nth-child(5)").addClass("table-hidden"), n("#myTable tbody td:nth-child(6)").addClass("table-hidden"), n("#myTable tbody tr").addClass("table-hidden"), n("#myTable tbody tr.broadband").removeClass("table-hidden"), r = "broadband") : u == 2 ? (n("#myTable thead th:nth-child(3)").removeClass("table-hidden"), n("#myTable thead th:nth-child(5)").removeClass("table-hidden"), n("#myTable thead th:nth-child(6)").removeClass("table-hidden"), n("#myTable tbody td:nth-child(3)").removeClass("table-hidden"), n("#myTable tbody td:nth-child(5)").removeClass("table-hidden"), n("#myTable tbody td:nth-child(6)").removeClass("table-hidden"), n("#myTable tbody tr").addClass("table-hidden"), n("#myTable tbody tr.tv-internet").removeClass("table-hidden"), r = "tv-internet") : u == 3 ? (n("#myTable thead th:nth-child(3)").removeClass("table-hidden"), n("#myTable thead th:nth-child(5)").addClass("table-hidden"), n("#myTable thead th:nth-child(6)").addClass("table-hidden"), n("#myTable tbody td:nth-child(3)").removeClass("table-hidden"), n("#myTable tbody td:nth-child(5)").addClass("table-hidden"), n("#myTable tbody td:nth-child(6)").addClass("table-hidden"), n("#myTable tbody tr").addClass("table-hidden"), n("#myTable tbody tr.internet-landline").removeClass("table-hidden"), r = "internet-landline") : u == 4 && (n("#myTable thead th:nth-child(3)").removeClass("table-hidden"), n("#myTable thead th:nth-child(5)").addClass("table-hidden"), n("#myTable thead th:nth-child(6)").addClass("table-hidden"), n("#myTable tbody td:nth-child(3)").removeClass("table-hidden"), n("#myTable tbody td:nth-child(5)").addClass("table-hidden"), n("#myTable tbody td:nth-child(6)").addClass("table-hidden"), t.PortalName == "CKJ" && (n("#myTable thead th:nth-child(7)").removeClass("table-hidden"), n("#myTable tbody td:nth-child(7)").removeClass("table-hidden")), n("#myTable tbody tr").addClass("table-hidden"), n("#myTable tbody tr.wireless-internet").removeClass("table-hidden"), r = "wireless-internet");
                n("#myTable tbody tr").addClass("table-hidden");
                f = n("#location").val();
                t.PortalName == "CKJ" && i != null && (f = i);
                console.log(f);
                f == "-1" && (f = "");
                n(".details:not(:contains('" + f + "'))").closest("tr").addClass("table-hidden").removeClass("filterProduct");
                n(".details:contains('" + f + "')").closest("tr." + r).removeClass("table-hidden").addClass("filterProduct");
                t.PortalName == "CKJ" && n("#location").val(f);
                n("tr.filterProduct." + r).length == 0 ? n(".no-result").removeClass("hide") : n(".no-result").addClass("hide")
            }
            var o, r, f, s, e;
            n.tablesorter.addParser({
                id: "fancyCurrency",
                is: function(n) {
                    return t.PortalName == "ECM" ? /^PHP\ [\-]?[0-9,\.]*$/.test(n) : /^RP\ [\-]?[0-9,\.]*$/.test(n)
                },
                format: function(t) {
                    return t = t.replace(/[PHP,]/g, ""), n.tablesorter.formatFloat(t)
                },
                type: "numeric"
            });
            o = function(n) {
                return n.childNodes[0].innerHTML || n.innerHTML
            };
            n("#myTable").tablesorter({
                widgets: ["zebra"],
                sortList: [
                    [0, 0],
                    [3, 0]
                ],
                textExtraction: o,
                headers: {
                    2: {
                        sorter: "fancyCurrency"
                    },
                    3: {
                        sorter: "fancyCurrency"
                    },
                    4: {
                        sorter: "fancyCurrency"
                    },
                    5: {
                        sorter: "fancyCurrency"
                    }
                }
            });
            r = function(n) {
                for (var r, f = i.location.search.substring(1), u = f.split("&"), t = 0; t < u.length; t++)
                    if (r = u[t].split("="), r[0] === n) return r[1]
            };
            t.PortalName == "ECM" ? (n(".tablesorter .sorter-details").click(function() {
                n(this).toggleClass("open")
            }), n("[data-toggle]").click(function() {
                var t = n(this).data("toggle");
                n(this).addClass("hide");
                n("#" + t).addClass("show")
            })) : (f = r("promo"), f === "tahunan" ? n(".indovision").find(".details").append('<div><span class="details-bold" style="color:red">Promo Tahunan:<\/span><br><ul style="list-style:circle;margin-left:10px;">Pelanggan Baru:<li>Gratis biaya instalasi dan administrasi senilai Rp200.000,-<\/li><li>Bayar 8 bulan, Gratis 4 Bulan paket apapun yang dipilih dan berlaku di bulan ke 9-12<\/li><br>Pelanggan Existing:<li>Bayar 8 bulan, Gratis 4 Bulan paket apapun yang dipilih dan berlaku di bulan ke 9-12<\/li><\/ul><\/div>') : f == "bulanan" && n(".indovision").find(".details").append('<div><span class="details-bold" style="color:red">Promo Bulanan:<\/span><br><ul style="list-style:circle;margin-left:10px;">Pelanggan Baru:<li>Bayar Rp250.000,-<\/li><li>Gratis Biaya Pasang<\/li><li>Gratis 1 Bulan Cinema 3 + Lifestyle + iConcert<\/li><br>Pelanggan Existing:<li>Bayar Rp250.000<\/li><li>Gratis Open All Channel Selama 1 Bulan (Super Galaxy + Cinema 4 + Sundance + Sport Plus + Vision 2 + NHK + Oriental)<\/li><\/ul><\/div>'), n(".tablesorter .sorter-details").click(function() {
                n(this).toggleClass("open")
            }), n("[data-toggle]").click(function() {
                var t = n(this).data("toggle");
                n(this).addClass("hide");
                n("#" + t).addClass("show")
            }));
            n("#myTable thead th:nth-child(3)").addClass("table-hidden");
            n("#myTable tbody td:nth-child(3)").addClass("table-hidden");
            n("#myTable tbody tr").addClass("table-hidden");
            n("#myTable tbody tr.cable-tv").removeClass("table-hidden");
            e = "cable-tv";
            n(t).on("change", "#location", function() {
                u()
            });
            n("#tv-internet-type").change(function() {
                u()
            });
            n("#compare-tv-internet").click(function(n) {
                u();
                n.preventDefault()
            });
            n(".no-result").addClass("hide");
            t.PortalName == "CKJ" && (s = r("lokasi"), e = r("type"), u(s, e))
        }],
        u = function() {
            f(n, t, i)
        },
        f = function(n, t, i) {
            r.forEach(function(r) {
                r(n, t, i)
            })
        };
    return {
        init: u
    }
}(jQuery, document, window);
$("#myTable").length > 0 && tvinternet.init();
wizard = function(n, t, i) {
    var r = [function(n) {
            function y(n, t) {
                t || (t = i.location.href);
                n = n.replace(/[\[\]]/g, "\\$&");
                var u = new RegExp("[?&]" + n + "(=([^&#]*)|&|#|$)"),
                    r = u.exec(t);
                return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null
            }

            function nt(i) {
                var a = n(this);
                if (!s) {
                    var p = a.data("label"),
                        w = a.outerWidth();
                    a.text("").attr("disabled", "disabled").append('<strong class="loading"><span><\/span><span><\/span><span><\/span><\/strong>').css({
                        width: w + "px"
                    })
                }
                var c = function() {
                        u.submit();
                        setTimeout(function() {
                            a.text(p).removeAttr("disabled").removeAttr("style").find(".loading").remove();
                            u.find(".option").removeClass("selected");
                            u.find(".option-amend").removeClass("active");
                            u.get(0).reset()
                        }, 4600)
                    },
                    e = n("fieldset.active").find(".wizard-section"),
                    v = s ? n(".wizard-section:not(.hide)").length == 1 : !1,
                    y = function() {
                        function t(i) {
                            if (it != null)
                                if (e.hasClass("contact-forcecmr") && 0, e.hasClass("contact-error") && 0, e.hasClass("contact-error") && s && 0, it) u.append('<input type=hidden name=FirstName value="' + l.FirstName + '" >'), u.append('<input type=hidden name=LastName value="' + l.LastName + '" >'), u.append('<input type=hidden name=Email value="' + l.Email + '" >'), n("[name=IsMale]").length == 0 && f == "HEA" ? u.append('<input type=hidden name=IsMale value="' + l.IsMale + '" >') : n("[data-contact=phone]").length != 0 ? u.append('<input type=hidden name=Home1Number value="' + l.TelephoneNumber + '" >') : n("[data-contact=mobilephone]").length != 0 && u.append('<input type=hidden name=Mobile1Number value="' + l.MobilePhoneNumber + '" >'), h(), c();
                                else return;
                            else setTimeout(function() {
                                i(t)
                            }, 500)
                        }
                        s && (e = n(".wizard-plain.contactme-form"));
                        i.preventDefault();
                        it = null;
                        oi(e, a, o);
                        t(t)
                    },
                    h = function() {
                        var a, d, i;
                        if (n(".input-option input:not(.range)").each(function() {
                                var i = n(this),
                                    r = n(this).val();
                                t.PortalName == "CKJ" ? i.val(r.replace(/\./g, "")) : i.val(r.replace(/\,/g, ""))
                            }), f == "MOT") e.closest("fieldset").data("step") != 10 && (r = {}, u.find("[name]").each(function() {
                            (n(this).attr("type") == "radio" && n(this).is(":checked") || n(this).attr("type") != "radio") && (r[n(this).attr("name")] = n(this).val())
                        }), ft("set", "MOTData", r));
                        else if (f == "HEA") {
                            if (n("[name=CoveredPersonTypeId]:checked").val() == 2) {
                                var o = n("#option-insurer-couple").find(".wizard-grid-01:last-child"),
                                    st = o.find(".form-group:nth-child(3)"),
                                    y = o.find("#spouseGender1").val(),
                                    p = o.find("#spouseDay1").val(),
                                    w = o.find("#spouseMonth1").val(),
                                    b = o.find("#spouseYear1").val();
                                u.append('<input type=hidden name="IsMaleQueryString" value="' + y + '" >');
                                u.append('<input type=hidden name="BirthdateQueryString" value="' + p + "/" + w + "/" + b + '" >');
                                u.append('<input type=hidden name="IsSpouseQueryString" value=true>');
                                n("#NumberOfAdults").val(2)
                            } else if (n("[name=CoveredPersonTypeId]:checked").val() == 3) {
                                var s = "",
                                    h = "",
                                    c = "";
                                if (n("#NumberOfAdults").val() > 1)
                                    if (t.PortalName == "CKJ") {
                                        var o = n("#option-insurer-family").find(".wizard-grid-01:nth-child(2)"),
                                            st = o.find("li:nth-child(3) .col-sm-9"),
                                            y = o.find("#spouseGender2").val(),
                                            p = o.find("#spouseDay2").val(),
                                            w = o.find("#spouseMonth2").val(),
                                            b = o.find("#spouseYear2").val();
                                        c = y + ",";
                                        s = p + "/" + w + "/" + b + ",";
                                        h = "true,"
                                    } else {
                                        for (i = 2; i <= n("#NumberOfAdults").val(); i++) {
                                            var k = n("[data-participant-numnber=" + i + "]"),
                                                l = k.find(".form-group:nth-child(3)"),
                                                nt = k.find(".form-group:nth-child(2) select").val(),
                                                tt = l.find("select:nth-child(2)").val(),
                                                it = l.find("select:nth-child(1)").val(),
                                                rt = l.find("select:nth-child(3)").val();
                                            s += it + "/" + tt + "/" + rt;
                                            h += "false";
                                            c += nt;
                                            i != n("#NumberOfAdults").val() && (c += ",", s += ",", h += ",")
                                        }
                                        parseInt(n("#NumberOfAdults").val()) > 1 && (n("#NumberOfChildren").val(parseInt(n("#NumberOfAdults").val()) - 1), n("#NumberOfAdults").val(1))
                                    } else t.PortalName == "ECM" && n("#NumberOfChildren").val(0);
                                if (t.PortalName == "CKJ")
                                    for (a = parseInt(n(".NumberOfChildren").val()) + 1, d = n("#option-insurer-family").find(".wizard-grid-01:nth-child(3)"), i = 2; i < 7; i++)
                                        if (i <= a) {
                                            var g = d.find(" li:nth-child(" + i + ")"),
                                                v = g.find(".form-group:nth-child(3)"),
                                                ut = v.find("select:nth-child(1)").val(),
                                                et = v.find("select:nth-child(2)").val(),
                                                ot = v.find("select:nth-child(3)").val();
                                            s += ut + "/" + et + "/" + ot;
                                            h += "false";
                                            c += g.find(".form-group:nth-child(2) select").val();
                                            i != a && (c += ",", s += ",", h += ",")
                                        }
                                u.append('<input type=hidden name=IsMaleQueryString value="' + c + '" >');
                                u.append('<input type=hidden name=BirthdateQueryString value="' + s + '" >');
                                u.append('<input type=hidden name=IsSpouseQueryString value="' + h + '" >')
                            }
                            r = {};
                            u.find("[name]").each(function() {
                                (n(this).attr("type") === "radio" && n(this).is(":checked") || n(this).attr("type") != "radio") && (r[n(this).attr("name")] = n(this).val())
                            });
                            ft("set", "HEAData", r)
                        } else f == "CC" ? (r = {}, u.find("[name]").each(function() {
                            (n(this).attr("type") == "radio" && n(this).is(":checked") || n(this).attr("type") == "checkbox" && n(this).is(":checked") || n(this).attr("type") != "radio" && n(this).attr("type") != "checkbox") && (r[n(this).attr("name")] = n(this).val())
                        }), ft("set", "CCData", r)) : f == "CLO" && (r = {}, u.find("[name]").each(function() {
                            (n(this).attr("type") == "radio" && n(this).is(":checked") || n(this).attr("type") == "checkbox" && n(this).is(":checked") || n(this).attr("type") != "radio" && n(this).attr("type") != "checkbox") && (r[n(this).attr("name")] = n(this).val())
                        }), r.LoanAmount = n("[name=LoanAmount]").val(), ft("set", "CLOData", r))
                    };
                f == "MOT" ? (e.closest("fieldset").data("step") != 10 && h(), e.data("cmrform") == !0 || v ? y() : c()) : f == "HEA" ? e.data("cmrform") == !0 || v ? y() : (h(), c()) : f == "CC" ? e.data("cmrform") == !0 || v ? (y(), h()) : (h(), c()) : f == "CLO" ? e.data("cmrform") == !0 || v ? (y(), h()) : (h(), c()) : c()
            }

            function ai(i) {
                var r = n(this),
                    v = r.data("label"),
                    y = r.outerWidth(),
                    s, u, l = n(".step-wizard.step-03");
                r.text("").attr("disabled", "disabled").append('<strong class="loading"><span><\/span><span><\/span><span><\/span><\/strong>').css({
                    width: y + "px"
                });
                setTimeout(function() {
                    var i, w, y, tt, p, d, nt;
                    if (r.is("[data-next-step]") ? (i = r.data("next-step"), s = i, u = i - 1, n("fieldset[data-step=" + u + "]").removeClass("active").removeClass("show").addClass("hide"), w = n("fieldset[data-step=" + i + "]"), w.removeClass("hide").addClass("active").addClass("show"), w.find(".btn[data-next-step]").attr("disabled", "disabled"), w.find("input[type=radio]:checked").length && (f === "HEA" && i === 3 && (n(".mustolder:not(.hide)").length !== 0 || n(".mustyounger:not(.hide)").length !== 0) ? console.log() : f === "HEA" && i === 2 && n("[name=RegionId]").val() <= 0 ? console.log() : w.find(".btn[data-next-step]").removeAttr("disabled")), f === "MOT" ? i < 5 ? i = 1 : i == 9 ? (l.addClass("hide"), n(".step-wizard.contactme1").removeClass("hide")) : i <= 6 ? i = 2 : i >= 7 && (i = 3) : f === "CC" ? (p = t.PortalName == "ECM" ? 1 : 0, i <= 3 + p ? i = 1 : i <= 6 + p ? i = 2 : i == 7 + p && (i = 3)) : f == "CLO" && (p = t.PortalName == "ECM" ? 1 : 0, i <= 2 ? i = 1 : i <= 5 + p ? i = 2 : i >= 7 + p && (i = 3)), et.find("li").removeClass("active"), et.find("li:lt(" + i + ")").addClass("active"), i = r.data("next-step")) : r.is("[data-prev-step]") && (y = parseInt(r.attr("data-prev-step")), s = y, u = y + 1, n(".wizard-section.contact-error[data-CMRForm=true]").closest("fieldset").removeClass("active").removeClass("show").addClass("hide"), l.removeClass("hide"), n(".step-wizard.contactme2").addClass("hide"), n("fieldset[data-step=" + u + "]").removeClass("active").removeClass("show").addClass("hide"), n("fieldset[data-step=" + y + "]").removeClass("hide").addClass("active").addClass("show"), tt = n("fieldset[data-step=" + u + "]").find(".wizard-section"), f === "MOT" ? (y < 5 ? y = 1 : y <= 6 ? y = 2 : y >= 7 && (y = 3, l.removeClass("hide"), n(".step-wizard.contactme1").addClass("hide")), c(tt)) : f === "CC" ? (p = t.PortalName == "ECM" ? 1 : 0, y <= 3 + p ? y = 1 : y <= 6 + p ? y = 2 : y == 7 + p && (y = 3)) : f == "CLO" && (p = t.PortalName == "ECM" ? 1 : 0, y <= 2 ? y = 1 : y <= 5 + p ? y = 2 : y >= 7 + p && (y = 3)), et.find("li").removeClass("active"), et.find("li:lt(" + y + ")").addClass("active"), y = r.data("prev-step")), r.text(v).removeAttr("disabled").removeAttr("style").find(".loading").remove(), n(".step-wizard").length > 0 && n("html, body").animate({
                            scrollTop: n(".step-wizard").offset().top
                        }, 400), (f === "CC" || f === "CLO") && (n("fieldset.active[data-initmethod]").length > 0 && (n("fieldset.active").data("initmethod").indexOf("getProvinces") >= 0 && g(), n("fieldset.active").data("initmethod").indexOf("getRegions") >= 0 && b(null, null), n("fieldset.active").data("initmethod").indexOf("initCMR") >= 0 && bt()), n('fieldset.active [data-cmrform="true"]').length == 1 && e.removeAttr("disabled")), f === "MOT" && r.is("[data-next-step]")) switch (s) {
                        case 2:
                            vt(!1);
                            n("b.manufacturer").text(o.VehicleManufacturerId);
                            break;
                        case 3:
                            n("b.vehicleyear").text(o.ManufacturingYear);
                            yt();
                            break;
                        case 4:
                            n("b.model").text(o.VehicleModelId);
                            pt();
                            break;
                        case 5:
                            g(null, !1);
                            break;
                        case 6:
                            b(null, null);
                            n("b.province").text(o.ProvinceId);
                            break;
                        case 7:
                            bt();
                            break;
                        case 8:
                            e.removeAttr("disabled")
                    }
                    if (f === "HEA") switch (s) {
                        case 2:
                            g(null, !0);
                            break;
                        case 3:
                            bt();
                            h.CoveredPersonTypeId > 0 && (d = n('[name="CoveredPersonTypeId"][value="' + h.CoveredPersonTypeId + '"]'), nt = d.closest(".wizard-grid"), nt.hasClass("valueset") || (nt.addClass("grid"), d.prop("checked", "checked"), a(d.closest("label"), nt), k(d.closest("label"), nt), h.isLogin && ti(h)), h.isLogin && w.find(".btn[data-next-step]").removeAttr("disabled"));
                            break;
                        case 4:
                            n("[name=IsMale]").length > 0 && (n("[data-contact=gender]").val(n("[name=IsMale]").val()), n("[data-contact=gender]").prop("disabled", !0), n("[data-contact=gender]").closest("form-group").addClass("form-disabled"));
                            e.removeAttr("disabled")
                    }
                }, 600);
                i.preventDefault()
            }

            function ft(n, t, i) {
                var r = function() {
                    var n = "test";
                    try {
                        return localStorage.setItem(n, n), localStorage.removeItem(n), !0
                    } catch (t) {
                        return !1
                    }
                };
                return n == "set" ? (i = JSON.stringify(i), r ? localStorage.setItem(t, i) : Cookies.set(t, i)) : n == "get" ? (i = r ? localStorage.getItem(t, i) : Cookies.get(t), JSON.parse(i)) : void 0
            }
            var u = n(".smart-search-form"),
                f = u.data("product"),
                e = u.find("[type=submit]"),
                tt = u.find("[type=button]"),
                w = u.find("[type=button][data-next-step]"),
                et = n(".step-wizard"),
                lt, it = null,
                o = {},
                d = !1,
                h, l = {},
                rt = !1,
                at = !1,
                r = ft("get", f + "Data"),
                s = r !== null && y("edit") === "",
                vi = function(n) {
                    n.closest("fieldset").find("button[name=next]").addClass("hide");
                    at = !0
                },
                kt, ii, ct;
            n(".wizard-grid").each(function() {
                var i = n(this);
                i.find("input:checked").prop("checked", !1);
                lt = function(n, t) {
                    typeof n.data("options") != "undefined" ? (a(n, t), ot(t), n.find("input").is(":checked") && k(n, t)) : typeof n.closest(".wizard-section").data("amend") != "undefined" ? (a(n, t), ot(t), wt(n, t)) : (a(n, t), ot(t), wt(n, t))
                };
                n(".select", i).change(function() {
                    var t = n(this);
                    (t.closest(".wizard-section[data-select-amend]").length > 0 || t.data("select-ajax") == !0) && fi(t, i);
                    t.closest(".child-birthdate").length > 0 && ci(t.closest(".child-birthdate"));
                    t.closest(".setup-birthdate").length > 0 && li(t.closest(".setup-birthdate"))
                });
                n(".option", i, ".option input", i).bind("click", function() {
                    var t = n(this);
                    lt(t, i)
                });
                n(".input-option input:not(.range)", i).bind("change", function() {
                    var t = n(this);
                    ei(t, i)
                });
                n(".input-option input:not(.range)", i).bind("keyup", function(i) {
                    var r = n(this);
                    i.which >= 37 && i.which <= 40 || r.val(function(n, i) {
                        return t.PortalName == "CKJ" ? i.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".") : i.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    })
                })
            });
            var yi = function(t, i) {
                    var f = n("#CC-Types .selected").length,
                        r = n("#CC-Types").closest(".wizard-section"),
                        u;
                    if (!t.find("input").is(":disabled")) {
                        if (n("#CC-Types input:not(.filtered):not(:checked)").prop("disabled", !1).closest("label").removeClass("disabled"), f === 0 && t.find("input").not(":checked")) {
                            n("#CC-Types input").prop("disabled", !1).removeClass("filtered").closest("label").removeClass("disabled");
                            n("#CC-Types").addClass("unfilter");
                            n(".noFeaturesSelected").removeClass("hide");
                            n(".secondFeaturesSelected").addClass("hide");
                            n(".firstFeaturesSelected").addClass("hide");
                            return
                        }
                        n("#CC-Types.unfilter").length === 1 || t.find("input.filtered-by:not(:checked)").length === 1 || i ? (n("#CC-Types").removeClass("unfilter"), n("#CC-Types input:checked").addClass("filtered-by"), u = "", n("#CC-Types input").each(function() {
                            n(this).is(":checked") && (u += n(this).attr("name") + "Selected=true&")
                        }), r.removeClass("active"), r.addClass("updating"), c(r), n.ajax({
                            url: "/credit-card/availablefeatures?" + u,
                            method: "Get"
                        }).then(function(i) {
                            var f, u;
                            if (i != "error") {
                                f = JSON.parse(i.Result);
                                setTimeout(function() {
                                    r.removeClass("updating");
                                    r.addClass("active");
                                    p(t, r)
                                }, 500);
                                for (u in f) f[u] === 0 ? n("[data-featurefilter=is" + u.replace("Count", "") + "]").addClass("filtered").prop("disabled", !0).closest("label").addClass("disabled") : n("[data-featurefilter=is" + u.replace("Count", "") + "]").removeClass("filtered").prop("disabled", !1).closest("label").removeClass("disabled")
                            }
                        }, function() {
                            setTimeout(function() {
                                r.removeClass("updating");
                                r.addClass("active");
                                w.removeAttr("disabled")
                            }, 500)
                        })) : (r.removeClass("updating"), r.addClass("active"));
                        f === 2 ? (n("#CC-Types input:not(.filtered):not(:checked)").prop("disabled", !0).closest("label").addClass("disabled"), n(".twoselected").removeClass("hide"), p(t, r)) : n(".twoselected").addClass("hide");
                        n("#CC-Types input.filtered-by:not(:checked)").removeClass("filtered-by");
                        setTimeout(function() {
                            n("#CC-Types .selected").length == 0 && c(r)
                        }, 100)
                    }
                },
                pi = function(n) {
                    var i;
                    i = t.PortalName === "ECM" ? "/credit-card/getprovincewithtopcity?" : "/credit-card/getprovincewithtopregion?";
                    n > 0 ? v(".ccprovinces", i, !1, n) : v(".ccprovinces", i, !1)
                },
                dt = function(n) {
                    v(".mot-manufacturer", "/vehicle/manufacturer", !0, n)
                },
                vt = function(t, i) {
                    var r;
                    r = i > 0 ? "/vehicle/years?vehicleManufacturerId=" + i : "/vehicle/years?vehicleManufacturerId=" + n("input[name=VehicleManufacturerId]:checked").val();
                    v(".mot-year", r, !0, t)
                },
                yt = function(t, i, r) {
                    var u;
                    u = i > 0 && r > 0 ? "/vehicle/model?vehicleManufacturerId=" + i + "&year=" + r : "/vehicle/model?vehicleManufacturerId=" + n("input[name=VehicleManufacturerId]:checked").val() + "&year=" + n("input[name=ManufacturingYear]:checked").val();
                    v(".mot-model", u, !0, t)
                },
                pt = function(t, i, r) {
                    var u;
                    u = i > 0 && r > 0 ? "/vehicle/modelversion?vehicleModelId=" + r + "&year=" + i : "/vehicle/modelversion?vehicleModelId=" + n("input[name=VehicleModelId]:checked").val() + "&year=" + n("input[name=ManufacturingYear]:checked").val();
                    v(".mot-modelseries", u, !0, t)
                },
                g = function(n, t) {
                    var i = "/lookups/getProvince";
                    t ? v("#provinces", i, !1, n, t) : v("#provinces", i, !0, n)
                },
                b = function(t, i, r) {
                    var f;
                    r ? (n("#regions", u).attr("disabled", !0), f = t > 0 ? "/vehicle/region?ProvinceId=" + t : "/vehicle/region?ProvinceId=" + n("select[name=ProvinceId]").val(), v("#regions", f, !0, i, r)) : t > 0 ? (f = "/vehicle/region?ProvinceId=" + t, v("#regions", f, !0, i)) : (f = "/vehicle/region?ProvinceId=" + n("input[name=ProvinceId]:checked").val(), v("#regions", f, !0))
                },
                v = function(t, i, f, e, h) {
                    var v = n(t, u).closest(".wizard-section"),
                        l;
                    s || h ? (n(t, u).removeClass("active"), n(t, u).addClass("updating"), n(t, u).find("input:checked").prop("checked", !1), l = n(t, u).find(".wizard-grid"), ot(l), l.find("label").removeClass("selected")) : n(t, u).addClass("updating");
                    f || n(t + " .wizard-ajax ul", u).children().length === 1 || n("select" + t, u).children().length === 1 ? (f && !h && (n(t + " .wizard-ajax li:not(:last)", u).remove(), n(t + " .wizard-ajax select option:not(:first)", u).remove(), c(v)), n.ajax({
                        url: i,
                        method: "Get"
                    }).then(function(i) {
                        var f = JSON.parse(i.Result);
                        h || n(t, u).removeClass("updating");
                        ri(f, t, null, h);
                        n(t, u).addClass("active");
                        n(t, u).removeClass("error");
                        n(".option", n(t + " .wizard-ajax ul", u).closest(".wizard-grid")).off().on("click", function() {
                            var i = n(this);
                            lt(i, n(t + " .wizard-ajax ul", u).closest(".wizard-grid"))
                        });
                        ga_tracker.init(!0);
                        s && e && (h ? n(t).val(e) : (n(t + " input[type=radio]").each(function() {
                            n(this).val() === r[n(t + " input").attr("name")] && n(this).prop("checked", !0)
                        }), n(t + " [data-options] input:checked").length === 1 && (n(t + " select").val(r[n(t + " input").attr("name")]), n(t + " [data-options] input").val(r[n(t + " input").attr("name")]), o[n(t + " input").attr("name")] = n(t + " select option[value=" + r[n(t + " input").attr("name")] + "]").text()), a(n(t + " input:checked").closest("label"), n(t + " input:checked").closest(".wizard-grid")), n(t + " input:checked").closest("label").data("options") && k(n(t + " input:checked", u).closest("label"), n(t + " input:checked").closest(".wizard-grid")), p(n(t + " input[type=radio]"), v), n(".wizard-panel").removeClass("hide"), n(".edit-loader").addClass("hide")))
                    }, function() {
                        n(t, u).removeClass("updating");
                        n(t, u).addClass("error")
                    })) : (n(t, u).removeClass("updating"), n(t, u).find("input:checked").closest(".option").addClass("selected"))
                },
                ri = function(i, r, f, e) {
                    var l = [],
                        h = [],
                        s = 5,
                        c = !1,
                        a, o;
                    if (i.length <= s && (s = i.length, c = !0), e) {
                        if (e) {
                            n(r + " option:not(:first)", u).remove();
                            switch (r) {
                                case "#provinces":
                                    for (o = 0; o < i.length; o++) h.push('<option value="' + i[o].ProvinceId + '" >' + i[o].DisplayedName + "<\/option>");
                                    n(r, u).removeAttr("disabled");
                                    break;
                                case "#regions":
                                    for (o = 0; o < i.length; o++) h.push('<option value="' + i[o].RegionId + '" >' + i[o].DisplayedName + "<\/option>");
                                    n(r, u).removeAttr("disabled")
                            }
                            n(r, u).append(h.join("\n"))
                        }
                    } else {
                        n(r + " .wizard-ajax ul li:last", u).removeClass("hide");
                        n(r + " .othersoption", u).removeClass("hide");
                        switch (r) {
                            case ".ccprovinces":
                                for (s = s, o = 0; o < s; o++) a = t.PortalName == "ECM" ? i[o].TopCity.CityId : i[o].TopRegion.RegionId, l.push('<li><label class="option"><strong>' + i[o].DisplayedName + '<\/strong><span><input type="radio" id="option-ProvinceId-' + i[o].ProvinceId + '" name="ProvinceId" value="' + i[o].ProvinceId + '" data-regionid="' + a + '" data-ajax-ga-label="ProvinceId"><\/span><\/label><\/li>');
                                if (!c)
                                    for (o = s; o < i.length; o++) t.PortalName == "ECM" ? h.push('<option value="' + i[o].ProvinceId + '" data-regionid="' + i[o].TopCity.CityId + '">' + i[o].DisplayedName + "<\/option>") : h.push('<option value="' + i[o].ProvinceId + '" data-regionid="' + i[o].TopRegion.RegionId + '">' + i[o].DisplayedName + "<\/option>");
                                break;
                            case ".mot-manufacturer":
                                for (o = 0; o < s; o++) l.push('<li><label class="option"><strong>' + i[o].DisplayedName + '<\/strong><span><input type="radio" id="option-vehicle-manufacturer-' + i[o].VehicleManufacturerId + '" name="VehicleManufacturerId" value="' + i[o].VehicleManufacturerId + '" data-ajax-ga-label="VehicleManufacturerId"><\/span><\/label><\/li>');
                                if (!c)
                                    for (o = s; o < i.length; o++) h.push('<option value="' + i[o].VehicleManufacturerId + '" >' + i[o].DisplayedName + "<\/option>");
                                break;
                            case ".mot-year":
                                for (o = 0; o < s; o++) l.push('<li><label class="option"><strong>' + i[o].Year + '<\/strong><span><input type="radio" id="option-vehicle-year-' + i[o].Year + '" name="ManufacturingYear" value="' + i[o].Year + '" data-ajax-ga-label="VehicleManufacturerId"><\/span><\/label><\/li>');
                                if (!c)
                                    for (o = s; o < i.length; o++) h.push('<option value="' + i[o].Year + '" >' + i[o].Year + "<\/option>");
                                break;
                            case ".mot-model":
                                for (o = 0; o < s; o++) l.push('<li><label class="option"><strong>' + i[o].DisplayedName + '<\/strong><span><input type="radio" id="option-vehicle-model-' + i[o].VehicleModelId + '" name="VehicleModelId" value="' + i[o].VehicleModelId + '" data-ajax-ga-label="VehicleModelId"><\/span><\/label><\/li>');
                                if (!c)
                                    for (o = s; o < i.length; o++) h.push('<option value="' + i[o].VehicleModelId + '" >' + i[o].DisplayedName + "<\/option>");
                                break;
                            case ".mot-modelseries":
                                for (o = 0; o < s; o++) l.push('<li><label class="option"><strong>' + i[o].DisplayedName + '<\/strong><span><input type="radio" id="option-vehicle-series-' + i[o].VehicleModelSeriesId + '" name="VehicleModelSeriesId" value="' + i[o].VehicleModelSeriesId + '" data-vehicletypeid="' + i[o].VehicleTypeId + '" data-ajax-ga-label="VehicleModelSeriesId"><\/span><\/label><\/li>');
                                if (!c)
                                    for (o = s; o < i.length; o++) h.push('<option value="' + i[o].VehicleModelSeriesId + '" data-vehicletypeid="' + i[o].VehicleTypeId + '" >' + i[o].DisplayedName + "<\/option>");
                                break;
                            case "#provinces":
                                for (s = s, o = 0; o < s; o++) l.push('<li><label class="option"><strong>' + i[o].DisplayedName + '<\/strong><span><input type="radio" id="option-vehicle-province-' + i[o].ProvinceId + '" name="ProvinceId" value="' + i[o].ProvinceId + '" data-ajax-ga-label="ProvinceId"><\/span><\/label><\/li>');
                                if (!c)
                                    for (o = s; o < i.length; o++) h.push('<option value="' + i[o].ProvinceId + '" >' + i[o].DisplayedName + "<\/option>");
                                break;
                            case "#regions":
                                for (s = s, o = 0; o < s; o++) l.push('<li><label class="option"><strong>' + i[o].DisplayedName + '<\/strong><span><input type="radio" id="option-vehicle-region-' + i[o].RegionId + '" name="RegionId" value="' + i[o].RegionId + '" data-ajax-ga-label="RegionId"><\/span><\/label><\/li>');
                                if (!c)
                                    for (o = s; o < i.length; o++) h.push('<option value="' + i[o].RegionId + '" >' + i[o].DisplayedName + "<\/option>")
                        }
                        n(r + " .wizard-ajax ul", u).prepend(l.join("\n"));
                        c ? (n(r + " li:last", u).addClass("hide"), n(r + " .othersoption", u).addClass("hide")) : n(r + " .wizard-ajax select", u).append(h.join("\n"))
                    }
                },
                a = function(n, t) {
                    var i = t.closest(".wizard-section");
                    t.find(".option").removeClass("selected");
                    t.find("input").closest("label").removeClass("selected");
                    t.find("input:checked").closest(".option").addClass("selected");
                    n.is("[data-options]") || p(n, i);
                    n.is("[data-options]") && f != "HEA" || (o[n.find("input").attr("name")] = n.text());
                    n === i ? st(i) : ui(t)
                },
                k = function(i, u) {
                    function v() {
                        var y = n(this).val(),
                            v, l, b, a, k, r, d;
                        if (y > 0) {
                            if (v = u.find(".option[data-options=" + i.data("options") + "]").find("input"), n("input[name='CoveredPersonTypeId']:checked").length === 0 && v.val(y), f != "HEA" && h != n("#wizard-section row") && (p(i, h), o[v.attr("name")] = n(h).find("select option[value=" + n(this).val() + "]").text()), y !== "" ? wt(v.closest("label"), u) : st(h), i.find("input").attr("name") === "CoveredPersonTypeId" && i.find("input").val() == 3) {
                                if (l = n(".NumberOfAdults").val(), n("#NumberOfAdults").val(l), t.PortalName == "CKJ")
                                    for (b = n("#option-insurer-family").find(".wizard-grid-01:nth-child(2) li:nth-child(3)"), l == 2 ? b.removeClass("hide") : b.addClass("hide"), a = n(".NumberOfChildren").val(), n("#NumberOfChildren").val(a), a = parseInt(a) + 1, k = n("#option-insurer-family").find(".wizard-grid-01:nth-child(3)"), r = 3; r < 8; r++) r <= a ? k.find(" li:nth-child(" + r + ")").removeClass("hide") : k.find(" li:nth-child(" + r + ")").addClass("hide");
                                else
                                    for (l = parseInt(l) + 1, n("[data-participant-numnber]").addClass("hide"), r = 0; r < l; r++) n("[data-participant-numnber=" + r + "]").removeClass("hide");
                                d = ht(i.find("input").val());
                                d && n(".mustolder:visible").length < 1 && n(".mustyounger:visible").length < 1 ? n(w).attr("disabled", !1) : n(w).attr("disabled", !0)
                            }
                        } else s || f == "HEA" ? (st(h), n(e).attr("disabled", !0)) : c(h)
                    }
                    var h = u.closest(".wizard-section"),
                        l = n("#" + i.data("options")),
                        a;
                    l.addClass("active");
                    c(h);
                    s && f == "MOT" && !rt && st(h);
                    (f == "MOT" || f == "CC" || f == "CLO") && n(".form-control", l).unbind("change");
                    n(".form-control", l).bind("change", v);
                    (f == "CC" || f == "CLO") && i.find("input").attr("name") == "ProvinceId" && s && i.find("input").data("options") == null && n("#regions").removeClass("active");
                    (f == "CC" || f == "CLO") && i.find("input").attr("name") == "ProvinceId" && i.find("input").data("options") == null && console.log("hhaa");
                    f == "HEA" && i.find("input").attr("name") == "CoveredPersonTypeId" && i.find("input").val() == 1 && (r.Birthdate && d && (a = ht(i.find("input").val()), a ? n(e).attr("disabled", !1) : n(e).attr("disabled", !0)), t.PortalName == "ECM" && n("#option-insurer-individual").removeClass("hide"))
                },
                ot = function(n) {
                    var t = n.closest(".wizard-section");
                    t.find(".option-amend").removeClass("active");
                    f != "HEA" && t.find(".option-amend").find("select").prop("selectedIndex", 0);
                    t.find(".option-amend").find("input").val("")
                },
                p = function(i, r) {
                    var w = r.closest("fieldset").find("[type=button][data-next-step]"),
                        l, p, a, v, o, y, u, h;
                    if (w.removeAttr("disabled"), f === "TRV") n("input[name='TripTypeId']:checked").length === 1 && (l = n("input[name='TripTypeId']:checked").val(), p = s ? "0" : "", n("[name=DateDeparture]").removeAttr("name"), n("#DateDeparture" + l + p).attr("name", "DateDeparture"), n(".triptype-message").html(n(".triptype-message").data("text" + l))), n("input[name='CoveredPersonTypeId']:checked").val() == 3 && c(r), n("input[name='CoveredPersonTypeId']:checked").val() == 2 && n("#NumberOfChildrenId").val() === 0 && (n("#NumberOfChildrenId").val(1), n("[name=NumberOfChildren]").val(1));
                    else if (f === "HEA") {
                        if (i.find("input").attr("name") === "PolicyTypeId" && (n(".policy-text").text(n(".policy-text").data("text" + i.find("input").val())), n(".policy-help-text").html(n(".policy-help-text").data("text" + i.find("input").val())), t.PortalName == "ECM" && (n('[name="CoverAmountId"] option').hide(), n('[name="CoverAmountId"] option[data-covertype=' + i.find("input").val() + "]").show(), n('[name="CoverAmountId"]').val(-1))), i.find("input").attr("name") === "CoveredPersonTypeId" && i.find("input").val() == 3)
                            for (a = n(".NumberOfAdults").val(), n("#NumberOfAdults").val(a), v = n("#option-insurer-family").find(".wizard-grid-01:nth-child(2) li:nth-child(3)"), a == 2 ? v.removeClass("hide") : v.addClass("hide"), o = n(".NumberOfChildren").val(), n("#NumberOfChildren").val(o), o = parseInt(o) + 1, y = n("#option-insurer-family").find(".wizard-grid-01:nth-child(3)"), u = 3; u < 8; u++) u <= o ? y.find(" li:nth-child(" + u + ")").removeClass("hide") : y.find(" li:nth-child(" + u + ")").addClass("hide");
                        i.find("input").attr("name") == "CoveredPersonTypeId" && i.find("input").val() == 2 && (n(".child-birthdate select").attr("disabled", !1), n("#NumberOfAdults").val(2), n("#NumberOfChildren").val(0), n(".mustyounger").addClass("hide"));
                        i.find("input").attr("name") == "CoveredPersonTypeId" && i.find("input").val() == 1 && (n(".child-birthdate select").attr("disabled", !1), n("#NumberOfAdults").val(1), n("#NumberOfChildren").val(0), n(".mustyounger").addClass("hide"))
                    } else f === "CC" ? (n("#CC-Types .selected").length === 0 && i.closest("#CC-Types").length === 1 && c(r), s ? n("[name=RegionId]").val() < 1 && n("[name=ProvinceId]").val() < 1 ? c(r) : e.removeAttr("disabled") : gt(i, r)) : f === "MOT" ? i.find("input").attr("name") == "VehicleModelSeriesId" && (h = i.find("input").data("vehicletypeid"), typeof h == "undefined" && (h = n("#motselectmodelseries option[value=" + i.find("input").val() + "]").data("vehicletypeid")), n("#VehicleTypeId").val(h)) : f === "CLO" && (s ? n("[name=RegionId]").val() < 1 && n("[name=ProvinceId]").val() < 1 ? c(r) : e.removeAttr("disabled") : gt(i, r));
                    i.find("input").data("diabled-action") == !0 && (f === "HEA" && parseInt(n("[name=CoverAmountId]").val()) > 0 && i.closest("fieldset").data("step") === 1 ? console.log() : f === "HEA" && n("[name=RegionId]").val() > 0 && i.closest("fieldset").data("step") === 2 ? console.log() : f === "CLO" && n("[name=TermsId]").val() > 0 && i.closest("fieldset").data("step") === 1 ? console.log() : c(r));
                    r.data("final") === !0 && f != "HEA" && e.removeAttr("disabled")
                },
                gt = function(i, r) {
                    var y = n(e, ":[enabled]")[0],
                        v = i.is("select") ? !0 : i.is("input") ? !0 : i.hasClass("selected"),
                        o, h, l, a;
                    if (n(w, ":[enabled]").length > 0 && v || (n(y).length > 0, v)) {
                        var u = r.closest("fieldset"),
                            c = r.find(".option.selected").length,
                            s = function(n) {
                                setTimeout(function() {
                                    var t = ut();
                                    n && !ut() ? u.find("button[type=submit]").trigger("click") : u.find("button[name=next]").trigger("click")
                                }, 50)
                            };
                        f === "CC" && (o = u.closest("form").find("fieldset").length, c == 1 && u.data("step") < o - 2 && u.data("step") <= o - 4 ? s() : u.data("step") >= o - 3 && i.find("input").val() > 0 ? s() : c == 1 && s(!0));
                        f === "CLO" && (o = u.closest("form").find("fieldset").length, u.data("step") == 1 && (h = u.find("input[name=LoanAmount]").val(), t.PortalName == "CKJ" ? (h = h.replace(/\./g, ""), l = 3e6, a = 3e9) : (h = h.replace(/\,/g, ""), l = 5e3, a = 2e6), (h > l || a < 3e9) && s()), c == 1 && u.data("step") >= 2 && u.data("step") <= o - 3 ? s() : u.data("step") == o - 2 && i.find("input").val() > 0 ? s() : u.data("step") == o - 1 && i.find("input").val() > 0 && s(!0))
                    }
                },
                st = function(t) {
                    var i = n("#" + t.data("amend"));
                    i.removeClass("active");
                    n(".wizard-grid", i).find(".option").removeClass("selected");
                    n(".wizard-grid", i).find("input:checked").prop("checked", !1)
                },
                ui = function(t) {
                    n(".option", t).each(function() {
                        var t = n("#" + n(this).data("amend"));
                        t.removeClass("active");
                        n(".wizard-grid", t).find(".option").removeClass("selected");
                        n(".wizard-grid", t).find("input:checked").prop("checked", !1)
                    })
                },
                wt = function(i) {
                    var r = i.closest(".wizard-section"),
                        u;
                    s && i.find("input").is(":checked") && f == "MOT" && (n(e).attr("disabled", !0), (i.find("input").attr("name") == "VehicleManufacturerId" && i.find("input").val() > 0 || i.is("[data-options=option-manufacturer-optional]")) && (vt(!1), n("b.manufacturer").text(o.VehicleManufacturerId), n(".mot-model").removeClass("active"), n(".mot-modelseries").removeClass("active")), (i.find("input").attr("name") == "ManufacturingYear" && i.find("input").val() > 0 || i.is("[data-options=option-year-optional]")) && (yt(), n("b.vehicleyear").text(o.ManufacturingYear), n(".mot-modelseries").removeClass("active")), (i.find("input").attr("name") == "VehicleModelId" && i.find("input").val() > 0 || i.is("[data-options=option-model-optional]")) && (pt(), n("b.model").text(o.VehicleModelId)), i.find("input").attr("name") == "VehicleModelSeriesId" && (u = n("input[name='VehicleModelSeriesId']:checked").data("vehicletypeid") > 0 ? n("input[name='VehicleModelSeriesId']:checked").data("vehicletypeid") : n(".mot-modelseries select option[value=" + i.find("input").val() + "]").data("vehicletypeid"), n("#VehicleTypeId").val(u), n("b.modelseries").text(o.VehicleModelSeriesId), setTimeout(function() {
                        n(e).removeAttr("disabled")
                    }, 600)), n(".wizard-help").addClass("hide"), n(".wizard-amend").each(function() {
                        n(this).hasClass("active") && n(this).next().removeClass("hide")
                    }));
                    s && i.find("input").is(":checked") && (f == "CC" || f == "CLO") && (i.find("input").attr("name") == "ProvinceId" && i.find("input").val() > 0 || i.is("[data-options=option-province-optional]")) && b();
                    setTimeout(function() {
                        var t = r.closest(".wizard-panel");
                        i.data("amend") != null ? n("#" + i.data("amend")).addClass("active") : n("#" + r.data("amend")).addClass("active");
                        t.data("wizard") === "scroll" && typeof r.data("amend") != "undefined" && n("html, body").animate({
                            scrollTop: n(r).offset().top + n(r).height()
                        }, 900)
                    }, 10);
                    t.PortalName == "ECM" && (i.find("input").attr("name") == "PolicyTypeId" || i.find("input").attr("name") == "CoveredPersonTypeId") && (o[i.find("input").attr("name")] = i.find("input").val(), i.find("input").attr("name") == "PolicyTypeId" ? o.PolicyType = i.closest("label").text() : i.find("input").attr("name") == "CoveredPersonTypeId" && (o.CoveredPersonType = i.closest("label").text()))
                },
                fi = function(i) {
                    var r = i.closest(".wizard-section");
                    setTimeout(function() {
                        var t = r.closest(".wizard-panel");
                        i.data("amend") != null ? n("#" + i.data("amend")).addClass("active") : n("#" + r.data("select-amend")).addClass("active")
                    }, 10);
                    i.attr("name") == "ProvinceId" && (b(null, null, !0), c(i.closest(".wizard-section")));
                    i.attr("name") == "RegionId" && (n("[name=CoverageAreaId]:checked").length > 0 || t.PortalName == "ECM") && i.closest("fieldset").find("button[data-next-step]").removeAttr("disabled");
                    i.attr("name") == "CoverAmountId" && i.val() > 0 ? w.removeAttr("disabled") : i.attr("name") == "CoverAmountId" && i.val() < 1 ? c(i.closest(".wizard-section")) : i.attr("name") == "TermsId" && i.val() < 1 && c(i.closest(".wizard-section"));
                    t.PortalName == "ECM" && (i.attr("name") == "ProvinceId" || i.attr("name") == "RegionId" || i.attr("name") == "CoverAmountId") ? (o[i.attr("name")] = i.val(), i.attr("name") == "RegionId" ? o.Region = i.find("option[value=" + i.val() + "]").text() : i.attr("name") == "ProvinceId" ? o.Province = i.find("option[value=" + i.val() + "]").text() : i.attr("name") == "CoverAmountId" && (o.CoverAmount = i.find("option[value=" + i.val() + "]").text())) : o[i.attr("name")] = i.find("option[value=" + i.val() + "]").text()
                },
                ei = function(n, i) {
                    var e = i.closest(".wizard-section"),
                        r, u, f;
                    n.attr("name") == "LoanAmount" && (r = n.val(), t.PortalName == "CKJ" ? (r = r.replace(/\./g, ""), u = 3e6, f = 3e9) : (r = r.replace(/\,/g, ""), u = 5e3, f = 2e6), r < u || r > f ? s ? console.log("er") : c(e) : p(n, e));
                    o[n.attr("name")] = n.val()
                },
                c = function(t) {
                    var i = t.closest("fieldset"),
                        r = i.find("[type=button][data-next-step]");
                    r.attr("disabled", "disabled");
                    (t.data("final") === !0 || s) && e.attr("disabled", "disabled");
                    f == "CC" && i.data("step") == 1 && (n(".noFeaturesSelected").removeClass("hide"), n(".secondFeaturesSelected").addClass("hide"), n(".firstFeaturesSelected").addClass("hide"))
                };
            var ut = function() {
                    return f !== "MOT" || d ? f !== "HEA" || d ? f !== "CC" && f !== "CLO" || d ? !1 : y("forcecmr") == "true" : HEA_CMREnabled : MOT_CMREnabled
                },
                bt = function() {
                    ut() ? (at || n("#linkCRM").find(".cmr-enabled-true").removeClass("hide"), n("#linkCRM").find(".cmr-enabled-false").remove()) : (at || n("#linkCRM").find(".cmr-enabled-false").removeClass("hide"), n("#linkCRM").find(".cmr-enabled-true").remove())
                },
                oi = function(r, u, o) {
                    var b = r.data("serviceguid"),
                        k = r.data("serviceurl"),
                        d = r.data("vertical"),
                        s = !0,
                        c = r.closest("fieldset").find(".cmr-agreement"),
                        p = function(n) {
                            n.closest(".form-group").removeClass("form-error").find(".form-note.error").remove()
                        },
                        a, v, y, h, w;
                    if (n(r).find("[data-validate]").each(function() {
                            var r, t, i;
                            for (p(n(this)), r = n(this).data("validate").split("|"), t = 0; t < r.length; t++) switch (r[t]) {
                                case "required":
                                    (n(this).val() === null || n(this).val() === "") && (n(this).closest(".form-group").addClass("form-error"), n(this).closest(".form-group").append("<span class='form-note error required'>This field is required.<\/span>"), s = !1);
                                    break;
                                case "lettersonly":
                                    n(this).val() !== "" && (i = /^[a-zA-Z.'\-_\s]/, i.test(n(this).val()) === !1 && (n(this).closest(".form-group").addClass("form-error"), n(this).closest(".form-group").append("<span class='form-note error'>This field only accepts letters (A-z) and the following symbols ( - . ' ).<\/span>"), s = !1));
                                    break;
                                case "email":
                                    n(this).val() !== "" && (i = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, i.test(n(this).val()) === !1 && (n(this).closest(".form-group").addClass("form-error"), n(this).closest(".form-group").append("<span class='form-note error'>Please enter a valid email address.<\/span>"), s = !1));
                                    break;
                                case "number":
                                    n(this).val() !== "" && isNaN(n(this).val()) && (n(this).closest(".form-group").addClass("form-error"), n(this).closest(".form-group").append("<span class='form-note error'>This field must be a number.<\/span>"), s = !1);
                                    break;
                                case "telephonenumber":
                                    n(this).val() !== "" && n(this).val().length < 7 && (n(this).closest(".form-group").addClass("form-error"), n(this).closest(".form-group").append("<span class='form-note error'>Please enter a valid mobile number.<\/span>"), s = !1)
                            }
                            s && p(n(this))
                        }), n(c).is(":checked") ? n(c).closest(".checkbox").find(".form-note.error").remove() : (n(c).closest(".checkbox").find("span").remove(), n(c).closest(".checkbox").prepend("<span class='form-note error'>You have to check this box to continue.<\/span>"), s = !1), a = {}, f == "MOT" ? (v = o, v.NumberOfCreditCards = r.find("[data-contact=NumberOfCreditCards]").val(), a = r.find("[data-contact=vehicle]").length == 0 ? v : {
                            "Vehicle Description": r.find("[data-contact=vehicle]").val(),
                            "Problem Experience": r.find("[data-contact=problem]").val(),
                            NumberOfCreditCards: r.find("[data-contact=NumberOfCreditCards]").val()
                        }) : f == "HEA" && t.PortalName == "ECM" ? (y = o, y.Occupation = r.find("[data-contact=occupation]").val(), a = y) : a = o, s) {
                        l = {
                            AffiliateGuid: b,
                            VerticalId: d,
                            FirstName: r.find("[data-contact=firstname]").val(),
                            LastName: r.find("[data-contact=lastname]").val(),
                            Email: r.find("[data-contact=email]").val(),
                            IsMale: r.find("[data-contact=gender]").val() == "true" ? !0 : !1,
                            TelephoneNumber: r.find("[data-contact=phone]").val(),
                            MobilePhoneNumber: r.find("[data-contact=mobilephone]").val(),
                            Remarks: JSON.stringify(a),
                            FormUrl: i.location.href
                        };
                        try {
                            h = Cookies.getJSON("UTM");
                            typeof h != "undefined" && (l.utm_source = h.utm_source, l.utm_medium = h.utm_medium, l.utm_term = h.utm_term, l.utm_content = h.utm_content)
                        } catch (g) {
                            console.error(g)
                        }
                        n.ajax({
                            url: k + "/api/CallSchedules/AddCallSchedule",
                            method: "POST",
                            data: l,
                            crossDomain: !0
                        }).always(function() {
                            if (r.hasClass("contact-error")) {
                                n(".contactme-thankyou", r).find("ul").addClass("hide");
                                n(".contactme-thankyou", r).find("div").removeClass("hide");
                                n(".contactme-thankyou h1 span", r).text(l.FirstName);
                                n(".contactme-thankyou p span", r).text(l.TelephoneNumber);
                                e.text("Return Home");
                                e.on("click", function() {
                                    i.location.href = "/"
                                });
                                e.removeAttr("disabled")
                            }
                            n(c).closest(".checkbox").addClass("hide");
                            it = r.hasClass("contact-forcecmr") ? !0 : !1
                        })
                    } else w = u.data("label"), u.text(w).removeAttr("disabled").removeAttr("style").find(".loading").remove()
                },
                si = function() {
                    var t = function(n) {
                            var u = {},
                                i = n.split("&"),
                                t, r;
                            if (i.length != 0) {
                                for (t = 0; t < i.length; t++) r = i[t].split("="), u[r[0]] = r[1];
                                return u
                            }
                            return 0
                        },
                        n = i.location.search.substr(1);
                    return n != null && n != "" ? t(n) : {}
                },
                ni = function(i, l) {
                    var ri, it, ot, ui, lt, wt, bt, gt, fi, et, ct, ht, ni, st, li, ut, ft, v, w, ai, vi, ii;
                    if (h = si(), d = h.t != null, ri = !1, d)
                        if (n("body").prepend("<div class=agent-mode>AGENT MODE<\/div>"), h.t != null)
                            if (ri = !0, r = h, r.PolicyTypeId > 0 || r.VehicleModelSeriesId > 0 || r.DestinationTypeId > 0 || r.CustomerTypeId > 0 || r.TermsId > 0) {
                                s = ri;
                                for (it in r) it === "b2b" ? n("[name=b2b]").val(r[it]) : n("[name=" + it + "]").length == 0 && r[it] != "null" && it.indexOf("String") === -1 && n(".edit-smart-search-form").append("<input type='hidden' name='" + it + "' value='" + decodeURIComponent(r[it]) + "' />")
                            } else {
                                n(u).find("fieldset[data-step=1] .wizard-section:nth-child(1)").removeClass("updating");
                                for (it in r) it === "b2b" ? n("[name=b2b]").val(r[it]) : it === "Birthdate" && n("[name='" + it + "']").length > 0 ? n("[name=Birthdate]").val(r[it]) : n("[name='" + it + "']").length == 0 && u.append("<input type='hidden' name='" + it + "' value=" + decodeURIComponent(r[it]) + " />")
                            } else
                        for (it in r) it === "b2b" ? n("[name=b2b]").val(r[it]) : u.append("<input type='hidden' name='" + it + "' value='" + r[it] + "' />");
                    else if (n(u).find("fieldset[data-step=1] .wizard-section:nth-child(1)").removeClass("updating"), i && l) {
                        for (ot in l) ot === "b2b" ? n("[name=b2b]").val(l[ot]) : ot === "PersonList" || n("[name='" + ot + "']").length == 0 && u.append("<input type='hidden' name='" + ot + "' value='" + l[ot] + "' />"), n("[data-contact=" + ot.toLowerCase() + "]").val(l[ot]);
                        n("[data-contact=gender]").val(l.IsMale ? "true" : "false");
                        n("[data-contact=phone]").val(l.Telephone1Number);
                        n("[data-contact=mobilephone]").val(l.Telephone2Number)
                    }
                    switch (f) {
                        case "MOT":
                            if (ui = y("VehicleTypeId"), n("input[name=VehicleTypeId]").val(ui), s) {
                                rt = !rt;
                                n(".step-wizard-form").addClass("hide");
                                n(".step-wizard").addClass("hide");
                                n(".edit-smart-search-form").removeClass("hide");
                                u.remove();
                                n(".edit-smart-search-form").removeClass("edit-smart-search-form").addClass("smart-search-form");
                                u = n(".smart-search-form");
                                e = u.find("[type=submit]");
                                n(e).on("click", nt);
                                dt(r.VehicleManufacturerId);
                                vt(!0, r.VehicleManufacturerId);
                                yt(!0, r.VehicleManufacturerId, r.ManufacturingYear);
                                pt(!0, r.ManufacturingYear, r.VehicleModelId);
                                for (lt in r) r.hasOwnProperty(lt) && (v = n('[name="' + lt + '"]'), v.attr("type") == "radio" ? v.prop("checked", "checked") : v.length == 0 && u.append("<input type='hidden' name='" + lt + "' value=" + r[lt] + " />"));
                                wt = function(t) {
                                    setTimeout(function() {
                                        n(".mot-modelseries input").length > 1 ? (n(".edit-loader").addClass("hide"), n(".wizard-panel.wizard-plain.hide").removeClass("hide"), n("b.manufacturer").text(o.VehicleManufacturerId), n("b.vehicleyear").text(o.ManufacturingYear), n("b.model").text(o.VehicleModelId), n("b.modelseries").text(o.VehicleModelSeriesId), rt = !rt, n(e).removeAttr("disabled")) : t(wt)
                                    }, 100)
                                };
                                wt(wt)
                            } else n(".edit-smart-search-form").remove(), dt(), bt = function(t) {
                                setTimeout(function() {
                                    n(".mot-manufacturer input").length > 2 ? (n(".mot-manufacturer").closest("fieldset").find("button").trigger("click"), n(".mot-manufacturer input").each(function() {
                                        var t = n(this);
                                        y("VehicleManufacturerId") == t.val() ? (t.prop("checked", "checked"), t.closest("label.option").addClass("selected"), o.VehicleManufacturerId = t.closest("label.option").text(), tt.removeAttr("disabled")) : t.closest("label").data("options") != "vehicle-manufacturer-optional" || hi(y("VehicleManufacturerId"), t.closest(".wizard-grid")) || (t.prop("checked", "checked").click(), t.closest("label.option").addClass("selected"), n('#vehicle-manufacturer-optional select option[value="' + y("VehicleManufacturerId") + '"]').prop("selected", !0).change(), tt.removeAttr("disabled"), o.VehicleManufacturerId = n(".mot-manufacturer select option[value=" + y("VehicleManufacturerId") + "]").text())
                                    })) : t(bt)
                                }, 100)
                            }, y("VehicleManufacturerId") > 0 && bt(bt);
                            break;
                        case "HEA":
                            if (s) {
                                n(".step-wizard-form").addClass("hide");
                                n(".step-wizard").addClass("hide");
                                n(".edit-smart-search-form").removeClass("hide");
                                u.remove();
                                n(".edit-smart-search-form").removeClass("edit-smart-search-form").addClass("smart-search-form");
                                u = n(".smart-search-form");
                                e = u.find("[type=submit]");
                                n(e).on("click", nt);
                                g(r.ProvinceId, !0);
                                b(r.ProvinceId, r.RegionId, !0);
                                for (gt in r) r.hasOwnProperty(gt) && (v = n('[name="' + gt + '"][value="' + r[gt] + '"]'), v.attr("type") == "radio" && (v.prop("checked", "checked"), a(v.closest("label"), v.closest(".wizard-grid")), k(v.closest("label"), v.closest(".wizard-grid"))));
                                n("#option-cover-amount").addClass("active");
                                n("select[name=CoverAmountId]").val(r.CoverAmountId);
                                n(".NumberOfAdults").val(r.NumberOfAdults);
                                n(".NumberOfAdults").trigger("change");
                                n("#Gender").val(r.IsMale);
                                n("#gender" + r.CoveredPersonTypeId).val(r.IsMale);
                                ti(r);
                                e.removeAttr("disabled")
                            } else {
                                if (n(".edit-smart-search-form").remove(), h.Birthdate || l && l.Birthdate) {
                                    for (st = h.Birthdate ? h.Birthdate.split("/") : l.Birthdate.split("/"), et = 0; et <= 3; et++) n("#birthday" + et).val(st[0]), n("#birthmonth" + et).val(st[1]), n("#birthyear" + et).val(st[2]);
                                    fi = l.Birthdate ? l.IsMale ? "true" : "false" : h.IsMale == "True" ? "true" : "false";
                                    n(".setgender").val(fi)
                                }
                                if (l && l.PersonList.length > 0) {
                                    var ei = !1,
                                        at = 0,
                                        oi = [],
                                        ci = l.PersonList.length;
                                    for (l.PersonList.length > 5 && (ci = 6), et = 0; et < ci; et++) ct = l.PersonList[et], ct.PersonalRelationshipId == 1 && (l.hasSpouse = ei = !0, l.NumberOfAdults = 2), ct.PersonalRelationshipId > 1 && (at = at + 1), ct.Birthdate = kt(ct.Birthdate), oi.push(ct);
                                    l.PersonsList = oi;
                                    l.isLogin = i;
                                    l.numberOfChildren = at;
                                    l.CoveredPersonTypeId = ei && at < 1 ? 2 : at > 0 ? 3 : 1;
                                    h = l
                                }
                            }
                            break;
                        case "TRV":
                            if (s) {
                                n(".step-wizard-form").addClass("hide");
                                n(".step-wizard").addClass("hide");
                                n(".edit-smart-search-form").removeClass("hide");
                                u.remove();
                                n(".edit-smart-search-form").removeClass("edit-smart-search-form").addClass("smart-search-form");
                                u = n(".smart-search-form");
                                e = u.find("[type=submit]");
                                n(e).on("click", nt);
                                for (ht in r) r.hasOwnProperty(ht) && (v = n('[name="' + ht + '"]'), v.length == 0 ? u.append("<input type='hidden' name='" + ht + "' value=" + r[ht] + " />") : v.attr("type") == "radio" ? (v = n('[name="' + ht + '"][value="' + r[ht] + '"]'), v.prop("checked", "checked"), a(v.closest("label"), v.closest(".wizard-grid")), k(v.closest("label"), v.closest(".wizard-grid"))) : v.val(r[ht]));
                                ni = n("[name=TripTypeId]:checked").closest("label").data("amend");
                                n("#" + ni).addClass("active");
                                n("#" + ni).find("[data-ga-label=DateDeparture]").val(r.DateDeparture);
                                n("#" + ni).find("[data-ga-label=DateReturn]").val(r.DateReturn);
                                st = r.Birthdate.split("/");
                                n("#birthday" + r.CoveredPersonTypeId).val(parseInt(st[0]));
                                n("#birthmonth" + r.CoveredPersonTypeId).val(parseInt(st[1]));
                                n("#birthyear" + r.CoveredPersonTypeId).val(parseInt(st[2]));
                                li = n("[name=CoveredPersonTypeId]:checked").closest(".wizard-section");
                                p(n("[name=CoveredPersonTypeId]:checked").closest("label"), li)
                            } else n(".edit-smart-search-form").remove();
                            break;
                        case "CC":
                            if (s) {
                                n(".step-wizard-form").addClass("hide");
                                n(".step-wizard").addClass("hide");
                                n(".edit-smart-search-form").removeClass("hide");
                                u.remove();
                                n(".edit-smart-search-form").removeClass("edit-smart-search-form").addClass("smart-search-form");
                                u = n(".smart-search-form");
                                e = u.find("[type=submit]");
                                n(e).on("click", nt);
                                g(r.ProvinceId);
                                b(r.ProvinceId, r.RegionId);
                                for (ut in r) r.hasOwnProperty(ut) && (v = n('[name="' + ut + '"]'), v.length == 0 ? u.append("<input type='hidden' name='" + ut + "' value=" + r[ut] + " />") : v.attr("type") == "radio" || v.attr("type") == "checkbox" ? (v = n('[name="' + ut + '"][value="' + r[ut] + '"]'), ut == "ProvinceId" && v.length == 0 ? (n("[data-options=option-province-optional]").trigger("click").find("input").prop("checked", "checked"), n("#option-resident-optional select").val(r[ut])) : ut == "RegionId" && v.length == 0 ? (n("[data-options=option-region-optional]").trigger("click").find("input").prop("checked", "checked"), n("#option-region-optional select").val(r[ut])) : (v.prop("checked", "checked"), a(v.closest("label"), v.closest(".wizard-grid")), k(v.closest("label"), v.closest(".wizard-grid")))) : v.val(r[ut]));
                                w = parseInt(r.minNetIncome);
                                t.PortalName == "CKJ" ? w <= 2999999 ? n("[name=minNetIncome][value=2999999]").attr("checked", !0) : w < 4999999 && w >= 3e6 ? n("[name=minNetIncome][value=4999000]").attr("checked", !0) : w < 9999999 && w >= 5e6 ? n("[name=minNetIncome][value=9999999]").attr("checked", !0) : w >= 1e7 && n("[name=minNetIncome][value=30000000]").attr("checked", !0) : w <= 14999 ? n("[name=minNetIncome][value=14999]").attr("checked", !0) : w < 19999 && w >= 15e3 ? n("[name=minNetIncome][value=18000]").attr("checked", !0) : w < 29999 && w >= 2e4 ? n("[name=minNetIncome][value=25000]").attr("checked", !0) : w < 49999 && w >= 3e4 ? n("[name=minNetIncome][value=40000]").attr("checked", !0) : w < 99999 && w >= 5e4 ? n("[name=minNetIncome][value=80000]").attr("checked", !0) : w >= 1e5 && n("[name=minNetIncome][value=30000000]").attr("checked", !0);
                                a(n("[name=minNetIncome]:checked").closest("label"), n("[name=minNetIncome]:checked").closest(".wizard-grid"))
                            } else n(".edit-smart-search-form").remove(), n("[data-cctype]").each(function() {
                                var t = n(this),
                                    i = t.data("cctype");
                                y(i) && (t.prop("checked", "checked"), t.closest("label.option").addClass("selected"))
                            });
                            break;
                        case "CLO":
                            if (n("#input-option-other").closest("label").bind("click", function() {
                                    var t = n(this).find("input"),
                                        i = t.closest(".wizard-grid");
                                    i.find("input:checked").prop("checked", !1);
                                    a(t, i);
                                    t.closest("label").addClass("selected");
                                    (t.val() <= 3e6 || t.val() > 7e8) && c(i.closest(".wizard-section"))
                                }), n("#input-option-other").bind("change", function() {
                                    var t = n(this),
                                        i = t.closest(".wizard-grid");
                                    (t.val() <= 3e6 || t.val() > 7e8) && n("[name=TermsId]").val() > 0 ? c(i.closest(".wizard-section")) : n("[name=TermsId]").val() > 0 && p(t.closest("label"), i.closest(".wizard-section"))
                                }), s) {
                                n(".step-wizard-form").addClass("hide");
                                n(".step-wizard").addClass("hide");
                                n(".edit-smart-search-form").removeClass("hide");
                                u.remove();
                                n(".edit-smart-search-form").removeClass("edit-smart-search-form").addClass("smart-search-form");
                                u = n(".smart-search-form");
                                e = u.find("[type=submit]");
                                n(e).on("click", nt);
                                g(r.ProvinceId);
                                b(r.ProvinceId, r.RegionId);
                                for (ft in r) r.hasOwnProperty(ft) && (v = n('[name="' + ft + '"]'), v.length == 0 ? u.append("<input type='hidden' name='" + ft + "' value=" + r[ft] + " />") : ft == "ProvinceId" && n("[name=ProvinceId]:checked").length == 0 ? (n("[data-options=option-province-optional]").trigger("click").find("input").prop("checked", "checked"), n("#option-resident-optional select").val(r[ft])) : ft == "RegionId" && n("[name=RegionId]:checked").length == 0 ? (n("[data-options=option-region-optional]").trigger("click").find("input").prop("checked", "checked"), n("#option-region-optional select").val(r[ft])) : v.attr("type") == "radio" ? (v = n('[name="' + ft + '"][value="' + r[ft] + '"]'), v.prop("checked", "checked"), a(v.closest("label"), v.closest(".wizard-grid")), k(v.closest("label"), v.closest(".wizard-grid"))) : v.val(r[ft]));
                                n("#option-terms-id").addClass("active");
                                w = parseInt(r.minNetIncome);
                                t.PortalName == "CKJ" ? w <= 2999999 ? n("[name=minNetIncome][value=2999999]").attr("checked", !0) : w < 4999999 && w >= 3e6 ? n("[name=minNetIncome][value=4999000]").attr("checked", !0) : w < 9999999 && w >= 5e6 ? n("[name=minNetIncome][value=9999999]").attr("checked", !0) : w >= 1e7 && n("[name=minNetIncome][value=30000000]").attr("checked", !0) : w <= 14999 ? n("[name=minNetIncome][value=14999]").attr("checked", !0) : w < 19999 && w >= 15e3 ? n("[name=minNetIncome][value=18000]").attr("checked", !0) : w < 29999 && w >= 2e4 ? n("[name=minNetIncome][value=25000]").attr("checked", !0) : w < 49999 && w >= 3e4 ? n("[name=minNetIncome][value=40000]").attr("checked", !0) : w < 99999 && w >= 5e4 ? n("[name=minNetIncome][value=80000]").attr("checked", !0) : w >= 1e5 && n("[name=minNetIncome][value=30000000]").attr("checked", !0);
                                a(n("[name=minNetIncome]:checked").closest("label"), n("[name=minNetIncome]:checked").closest(".wizard-grid"));
                                ii = t.PortalName == "CKJ" ? r.LoanAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ".") : r.LoanAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                n("input[name=LoanAmount]").val(ii).trigger("change");
                                n(".edit-loader").addClass("hide");
                                range.init()
                            } else n(".edit-smart-search-form").remove(), ai = t.PortalName == "CKJ" ? 3e6 : 5e3, vi = t.PortalName == "CKJ" ? 3e9 : 2e6, h.TermsId > 0 && h.LoanAmount >= ai && h.LoanAmount <= vi && (ii = t.PortalName == "CKJ" ? h.LoanAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ".") : h.LoanAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ","), n("input[name=LoanAmount]").val(ii).trigger("change"), n("[name=TermsId]").each(function() {
                                n(this).val() == h.TermsId && (n(this).prop("checked", "checked"), a(n(this).closest("label"), n(this).closest(".wizard-grid")))
                            }))
                    }
                },
                hi = function(t, i) {
                    return n(i).find("input[value=" + t + "]").length > 0
                },
                ti = function(i) {
                    var h, y, o, l, d, g, c, nt, it, w, r, b, rt, ut, u, f;
                    if (console.log(i), h = i.Birthdate.split("/"), i.CoveredPersonTypeId == 1)
                        for (y = n("#option-insurer-individual").find(".wizard-grid"), o = y.find(".form-group:nth-child(3)"), r = 0; r < 3; r++) o.find("select:nth-child(" + (r + 1) + ")").val(parseInt(h[r]));
                    else if (i.CoveredPersonTypeId == 2) {
                        f = i.isLogin ? i.PersonsList[0].Birthdate : i.BirthdateQueryString.split(",");
                        c = i.isLogin ? i.PersonsList[0].IsMale : i.IsMaleQueryString.split(",");
                        f = i.isLogin ? f.split("/") : f[0].split("/");
                        var k = n("#option-insurer-couple").find(".wizard-grid:nth-child(3)"),
                            y = n("#option-insurer-couple").find(".wizard-grid:nth-child(2)"),
                            l = k.find(".form-group:nth-child(3)");
                        for (k.find(".form-group:nth-child(2) select").val(i.isLogin ? c.toString() : c[0]), o = y.find(".form-group:nth-child(3)"), r = 0; r < 3; r++) l.find("select:nth-child(" + (r + 1) + ")").val(parseInt(f[r])), o.find("select:nth-child(" + (r + 1) + ")").val(parseInt(h[r]))
                    } else if (i.CoveredPersonTypeId == 3) {
                        n("#option-insurer-individual").addClass("hide");
                        var s = i.isLogin ? null : i.BirthdateQueryString.split(","),
                            p = i.isLogin ? null : i.IsMaleQueryString.split(","),
                            a, e = 0,
                            v = n("#option-insurer-family").find(".wizard-grid-01"),
                            o = v.find("li:nth-child(2) .form-group:nth-child(3)");
                        if (t.PortalName == "CKJ") {
                            if (i.NumberOfAdults == 2) {
                                if (l = v.find("li:nth-child(3) .form-group:nth-child(3)"), i.isLogin)
                                    for (n(".NumberOfAdults").val(i.NumberOfAdults), r = 0; r < i.PersonsList.length; r++) i.PersonsList[r].PersonalRelationshipId == 1 && (d = i.PersonsList[r].IsMale ? "true" : "false", g = i.PersonsList[r].Birthdate);
                                for (c = v.find("li:nth-child(3) .form-group:nth-child(2) select").val(i.isLogin ? d : p[0]), f = i.isLogin ? g.split("/") : s[0].split("/"), r = 0; r < 3; r++) l.find("select:nth-child(" + (r + 1) + ")").val(parseInt(f[r])), o.find("select:nth-child(" + (r + 1) + ")").val(parseInt(h[r]));
                                a = (i.isLogin ? i.PersonsList.length : s.length) - 1;
                                e = 1
                            } else
                                for (a = i.isLogin ? i.PersonsList.length : s.length, r = 0; r < 3; r++) l.find("select:nth-child(" + (r + 1) + ")").val(parseInt(f[r]));
                            for (n(".NumberOfChildren").val(a).trigger("change"), nt = n("#option-insurer-family").find(".wizard-grid-01:nth-child(3)"), r = 2; r < a + 2; r++) {
                                if (i.isLogin && i.PersonsList[e].PersonalRelationshipId != 1) {
                                    var tt = nt.find(" li:nth-child(" + r + ")"),
                                        ft = i.isLogin ? i.PersonsList[e].IsMale ? "true" : "false" : p[e],
                                        et = i.isLogin ? i.PersonsList[e].Birthdate.split("/") : s[e].split("/");
                                    for (tt.find(".form-group:nth-child(2) select").val(ft), it = tt.find(".form-group:nth-child(3)"), u = 1; u < 4; u++) it.find("select:nth-child(" + u + ")").val(parseInt(et[u - 1]))
                                }
                                e = e + 1
                            }
                        } else {
                            for (w = parseInt(i.NumberOfAdults) + parseInt(i.NumberOfChildren), n(".NumberOfAdults").val(w), r = 0; r < 3; r++) o.find("select:nth-child(" + (r + 1) + ")").val(parseInt(h[r]));
                            for (r = 2; r <= w; r++) {
                                for (b = v.find("li:nth-child(" + (r + 1) + ")"), b.find(".form-group:nth-child(2) select").val(p[r - 2]), rt = s[r - 2].split("/"), ut = b.find(".form-group:nth-child(3)"), u = 1; u < 4; u++) ut.find("select:nth-child(" + u + ")").val(parseInt(rt[u - 1]));
                                f = s[0].split("/")
                            }
                        }
                    }
                    n(".setbirhdate").trigger("change")
                },
                ci = function(t) {
                    var f = s ? e : ut() ? w : e.not("data-final:true"),
                        p = t.find("select:nth-child(1)").val(),
                        b = t.find("select:nth-child(2)").val(),
                        k = t.find("select:nth-child(3)").val(),
                        d = new Date(b + "/" + p + "/" + k),
                        o = parseFloat(((Date.now() - d) / 315576e5).toFixed(4)),
                        i, u, v, y;
                    if (o > 0) {
                        var h = 0,
                            c = 0,
                            g = n(".NumberOfChildren").val(),
                            r = t.closest("li");
                        for (i = 1; i <= g; i++) {
                            var l = i + 1,
                                nt = t.closest("ul").find("li:nth-child(" + l + ") .form-group:nth-child(3) select:nth-child(1)").val(),
                                tt = t.closest("ul").find("li:nth-child(" + l + ") .form-group:nth-child(3) select:nth-child(2)").val(),
                                it = t.closest("ul").find("li:nth-child(" + l + ") .form-group:nth-child(3) select:nth-child(3)").val(),
                                rt = new Date(tt + "/" + nt + "/" + it),
                                a = parseFloat(((Date.now() - rt) / 315576e5).toFixed(4));
                            a > 0 && (u = r.index(), o < a && u < i ? h = i : o > a && u > i && (c = i))
                        }
                        v = ["", "First", "Second", "Third", "Fourth", "Fifth"];
                        h > 0 ? (r.find(".mustolder").removeClass("hide").find("b.olderthan").text(v[h]), n(".child-birthdate:gt(" + (u - 1) + ") select").attr("disabled", !0)) : r.find(".mustolder").addClass("hide");
                        c > 0 ? (r.find(".mustyounger").removeClass("hide").find("b.youngerthan").text(v[c]), n(".child-birthdate:lt(" + (u - 1) + ") select").attr("disabled", !0)) : r.find(".mustyounger").addClass("hide");
                        n(".mustolder:not(.hide)").length == 0 && n(".mustyounger:not(.hide)").length == 0 ? (n(".child-birthdate select").attr("disabled", !1), y = ht(3), y ? n(f).attr("disabled", !1) : n(f).attr("disabled", !0)) : n(f).attr("disabled", !0)
                    }
                },
                li = function(i) {
                    var u = s ? e : ut() ? w : e,
                        c = t.PortalName == "CKJ" ? i.find("div:nth-child(1) select").val() : i.find("div:nth-child(2) select").val(),
                        r = t.PortalName == "CKJ" ? parseInt(i.find("div:nth-child(2) select").val()) : parseInt(i.find("div:nth-child(1) select").val()),
                        l = i.find("div:nth-child(3) select").val(),
                        o;
                    i.find("select:nth-child(1) option").show();
                    (r === 2 || r === 4 || r === 6 || r === 9 || r === 11) && (i.find("select:nth-child(1) option[value=31]").hide(), i.find("select:nth-child(1)").val() == 31 && i.find("select:nth-child(1)").val(-1));
                    r === 2 && (i.find("select:nth-child(1) option[value=30]").hide(), i.find("select:nth-child(1)").val() == 30 && i.find("select:nth-child(1)").val(-1));
                    var a = new Date(r + "/" + c + "/" + l),
                        h = parseFloat(((Date.now() - a) / 315576e5).toFixed(4)),
                        f = n("[name=CoveredPersonTypeId]:checked").val();
                    h > 0 && f == 1 ? u.removeAttr("disabled") : h > 0 && f != 1 && (o = ht(f), o && f == 2 ? u.removeAttr("disabled") : o && f == 3 ? t.PortalName == "CKJ" ? n(".mustolder:not(.hide)").length == 0 && n(".mustyounger:not(.hide)").length == 0 ? u.removeAttr("disabled") : u.attr("disabled", !0) : u.removeAttr("disabled") : u.attr("disabled", !0))
                },
                ht = function(i) {
                    var u = !0,
                        r;
                    return r = n(".NumberOfAdults").val() == 1 && i == 3 ? n(".option-amend.active").find(".inline-option:nth-child(2) select:visible") : n(".option-amend.active").closest(".option-amend").find(".inline-option select:visible"), t.PortalName == "ECM" && (r = r.filter(":visible")), r.each(function() {
                        n(this).val() == "-1" && (u = !1)
                    }), u
                };
            n("[data-trvdesttype]").each(function() {
                var t = n(this);
                y("DestinationTypeId") == t.val() && (t.prop("checked", "checked"), t.closest("label.option").addClass("selected"), tt.removeAttr("disabled"))
            });
            n(".setbirhdate").bind("change", function() {
                var i = n("input[name='CoveredPersonTypeId']:checked").val(),
                    r = n(this);
                setTimeout(function() {
                    var u = n("#birthday" + i).val(),
                        s = n("#birthmonth" + i).val(),
                        h = n("#birthyear" + i).val(),
                        a = new Date(s + "/" + u + "/" + h),
                        l = parseFloat(((Date.now() - a) / 315576e5).toFixed(4));
                    l > 0 ? (t.PortalName == "ECM" ? n("#Birthdate").val(s + "/" + u + "/" + h) : n("#Birthdate").val(u + "/" + s + "/" + h), t.PortalName == "ECM" && (o.Birthdate = n("#Birthdate").val(), o.Age = Math.round(l)), n("#Birthdate").trigger("change"), i != 3 && f != "HEA" && e.removeAttr("disabled")) : c(r.closest(".wizard-section"))
                }, 10)
            });
            n(".setgender").unbind().bind("change", function() {
                var r = n("input[name='CoveredPersonTypeId']:checked").val(),
                    i = n("#gender" + r).val();
                r > 1 && (t.PortalName == "ECM" ? n(".spousegender").val(i != "true" ? "true" : "false") : n(".spousegender").val(i != "true" ? "true" : "false").attr("disabled", !0));
                n("#Gender").val(i);
                n("#Gender").trigger("change")
            });
            n(e).on("click", nt);
            n(tt).on("click", ai);
            n(".calendar .date-action a").on("click", function() {
                n("input[name='TripTypeId']:checked").val() != 2 ? tt.removeAttr("disabled") : n("input[name='DurationTypeId']:checked").length !== 1 && c(n("input[name='DurationTypeId']:checked").closest(".wizard-section"));
                n("[name=DateDeparture]").trigger("change");
                n("[name=DateReturn]").trigger("change")
            });
            n(".contactme").on("click", function() {
                if (s) n(".wizard-section").removeClass("active").addClass("hide"), n(".contactme-form").removeClass("hide"), n(".wizard-help").addClass("hide"), n(".checkbox").removeClass("hide"), n("h1").remove(), n(e).removeAttr("disabled", !0), n(e).text("Submit").attr("data-label", "Submit");
                else {
                    n("fieldset").removeClass("active").removeClass("show").addClass("hide");
                    var t = n(".wizard-section.contact-error[data-CMRForm=true]").closest("fieldset");
                    t.removeClass("hide").addClass("active").addClass("show");
                    t.find("button[type=button]").attr("data-prev-step", n(this).closest("fieldset").data("step"));
                    n(".step-wizard.step-03").addClass("hide");
                    n(".step-wizard.contactme2").removeClass("hide");
                    t.find("button[type=submit]").removeAttr("disabled", !0)
                }
            });
            n("#NumberOfChildrenId").change(function() {
                n("[name=NumberOfChildren]").val(n(this).val())
            });
            kt = function(n) {
                var r = /Date\(([^)]+)\)/.exec(n),
                    i = new Date(parseFloat(r[1]));
                return (t.PortalName == "CKJ" ? i.getDate() : i.getMonth() + 1) + "/" + (t.PortalName == "CKJ" ? i.getMonth() + 1 : i.getDate()) + "/" + i.getFullYear()
            };
            ii = function() {
                n.ajax({
                    url: "/Account/External/GetCustomerPersonAndPersonsList",
                    type: "GET",
                    xhrFields: {
                        withCredentials: !0
                    },
                    cache: !1
                }).done(function(n) {
                    n.Birthdate = kt(n.Birthdate);
                    ni(!0, n)
                })
            };
            ct = function() {
                t.IsLoggedIn == null ? setTimeout(function() {
                    ct(ct)
                }, 500) : t.IsLoggedIn && !s ? ii() : ni(!1)
            };
            u.length > 0 && ct()
        }],
        u = function() {
            f(n, t, i)
        },
        f = function(n, t, i) {
            r.forEach(function(r) {
                r(n, t, i)
            })
        };
    return {
        init: u
    }
}(jQuery, document, window);
wizard.init()