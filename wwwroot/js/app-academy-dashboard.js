"use strict";
! function() {
    let e, s, a, t;
    t = isDarkStyle ? (e = config.colors_dark.textMuted, s = config.colors_dark.headingColor, a = config.colors_dark.borderColor, "dark") : (e = config.colors.textMuted, s = config.colors.headingColor, a = config.colors.borderColor, "light");
    var r = {
            donut: {
                series1: "#49AC00",
                series2: "#4DB600",
                series3: config.colors.success,
                series4: "#78D533",
                series5: "#9ADF66",
                series6: "#BBEA99"
            }
        },
        i = document.querySelector("#leadsReportChart"),
        r = {
            chart: {
                height: 157,
                width: 130,
                parentHeightOffset: 0,
                type: "donut",
                opacity: 1
            },
            labels: ["36h", "56h", "16h", "32h", "56h", "16h"],
            series: [23, 35, 10, 20, 35, 23],
            colors: [r.donut.series1, r.donut.series2, r.donut.series3, r.donut.series4, r.donut.series5, r.donut.series6],
            stroke: {
                width: 0
            },
            dataLabels: {
                enabled: !1,
                formatter: function(e, a) {
                    return parseInt(e) + "%"
                }
            },
            legend: {
                show: !1
            },
            tooltip: {
                theme: t
            },
            grid: {
                padding: {
                    top: 0
                }
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: "75%",
                        labels: {
                            show: !0,
                            value: {
                                fontSize: "1.125rem",
                                fontFamily: "Inter",
                                color: s,
                                fontWeight: 500,
                                offsetY: -15,
                                formatter: function(e) {
                                    return parseInt(e) + "%"
                                }
                            },
                            name: {
                                offsetY: 20,
                                fontFamily: "Inter"
                            },
                            total: {
                                show: !0,
                                fontSize: ".9375rem",
                                label: "Total",
                                color: e,
                                formatter: function(e) {
                                    return "231h"
                                }
                            }
                        }
                    }
                }
            }
        };
    null !== i && new ApexCharts(i, r).render();
    const o = document.querySelector("#horizontalBarChart"),
        n = {
            chart: {
                height: 270,
                type: "bar",
                toolbar: {
                    show: !1
                }
            },
            fill: {
                opacity: 1
            },
            plotOptions: {
                bar: {
                    horizontal: !0,
                    barHeight: "70%",
                    distributed: !0,
                    startingShape: "rounded",
                    borderRadius: 7
                }
            },
            grid: {
                strokeDashArray: 10,
                borderColor: a,
                xaxis: {
                    lines: {
                        show: !0
                    }
                },
                yaxis: {
                    lines: {
                        show: !1
                    }
                },
                padding: {
                    top: -35,
                    bottom: -12
                }
            },
            colors: [config.colors.primary, config.colors.info, config.colors.success, config.colors.secondary, config.colors.danger, config.colors.warning],
            dataLabels: {
                enabled: !0,
                style: {
                    colors: ["#fff"],
                    fontWeight: 200,
                    fontSize: "13px",
                    fontFamily: "Inter"
                },
                formatter: function(e, a) {
                    return n.labels[a.dataPointIndex]
                },
                offsetX: 0,
                dropShadow: {
                    enabled: !1
                }
            },
            labels: ["UI Design", "UX Design", "Music", "Animation", "React", "SEO"],
            series: [{
                data: [35, 20, 14, 12, 10, 9]
            }],
            xaxis: {
                categories: ["6", "5", "4", "3", "2", "1"],
                axisBorder: {
                    show: !1
                },
                axisTicks: {
                    show: !1
                },
                labels: {
                    style: {
                        colors: e,
                        fontFamily: "Inter",
                        fontSize: "13px"
                    },
                    formatter: function(e) {
                        return e + "%"
                    }
                }
            },
            yaxis: {
                max: 35,
                labels: {
                    style: {
                        colors: [e],
                        fontFamily: "Inter",
                        fontSize: "13px"
                    }
                }
            },
            tooltip: {
                enabled: !0,
                style: {
                    fontFamily: "Inter",
                    fontSize: "13px"
                },
                onDatasetHover: {
                    highlightDataSeries: !1
                },
                custom: function({
                    series: e,
                    seriesIndex: a,
                    dataPointIndex: t
                }) {
                    return '<div class="px-3 py-2"><span>' + e[a][t] + "%</span></div>"
                }
            },
            legend: {
                show: !1
            }
        };
    null !== o && new ApexCharts(o, n).render();
    var l, i = document.querySelectorAll(".chart-progress"),
        r = (i && i.forEach(function(e) {
            var a = config.colors[e.dataset.color],
                t = e.dataset.series,
                r = e.dataset.progress_variant,
                a = (a = a, t = t, {
                    chart: {
                        height: "true" == (r = r) ? 58 : 55,
                        width: "true" == r ? 58 : 45,
                        type: "radialBar"
                    },
                    plotOptions: {
                        radialBar: {
                            hollow: {
                                size: "true" == r ? "45%" : "25%"
                            },
                            dataLabels: {
                                show: "true" == r,
                                value: {
                                    offsetY: -10,
                                    fontSize: "15px",
                                    fontWeight: 500,
                                    fontFamily: "Inter",
                                    color: s
                                }
                            },
                            track: {
                                background: config.colors_label.secondary
                            }
                        }
                    },
                    stroke: {
                        lineCap: "round"
                    },
                    colors: [a],
                    grid: {
                        padding: {
                            top: "true" == r ? -12 : -15,
                            bottom: "true" == r ? -17 : -15,
                            left: "true" == r ? -17 : -5,
                            right: -15
                        }
                    },
                    series: [t],
                    labels: "true" == r ? [""] : ["Progress"]
                });
            new ApexCharts(e, a).render()
        }), $(".datatables-academy-course")),
        d = {
            angular: '<div class="avatar"><div class="avatar-initial bg-label-danger rounded"><i class="ri-angularjs-line ri-28px"></i></div></div>',
            figma: '<div class="avatar"><div class="avatar-initial bg-label-warning rounded"><i class="ri-pencil-line ri-28px"></i></div></div>',
            react: '<div class="avatar"><div class="avatar-initial bg-label-info rounded"><i class="ri-reactjs-line ri-28px"></i></div></div>',
            art: '<div class="avatar"><div class="avatar-initial bg-label-success rounded"><i class="ri-palette-line ri-28px"></i></div></div>',
            fundamentals: '<div class="avatar"><div class="avatar-initial bg-label-primary rounded"><i class="ri-star-smile-line ri-28px"></i></div></div>'
        };
    r.length && (l = r.DataTable({
        ajax: assetsPath + "json/app-academy-dashboard.json",
        columns: [{
            data: ""
        }, {
            data: "id"
        }, {
            data: "course name"
        }, {
            data: "time"
        }, {
            data: "progress"
        }, {
            data: "status"
        }],
        columnDefs: [{
            className: "control",
            searchable: !1,
            orderable: !1,
            responsivePriority: 2,
            targets: 0,
            render: function(e, a, t, r) {
                return ""
            }
        }, {
            targets: 1,
            orderable: !1,
            searchable: !1,
            checkboxes: !0,
            checkboxes: {
                selectAllRender: '<input type="checkbox" class="form-check-input">'
            },
            render: function() {
                return '<input type="checkbox" class="dt-checkboxes form-check-input">'
            }
        }, {
            targets: 2,
            responsivePriority: 2,
            render: function(e, a, t, r) {
                var s = t.logo,
                    i = t.course,
                    o = t.user,
                    n = t.image;
                return t = n ? '<img src="' + assetsPath + "img/avatars/" + n + '" alt="Avatar" class="rounded-circle">' : '<span class="avatar-initial rounded-circle bg-label-' + ["success", "danger", "warning", "info", "dark", "primary", "secondary"][Math.floor(6 * Math.random())] + '">' + (n = (((n = t.user.match(/\b\w/g) || []).shift() || "") + (n.pop() || "")).toUpperCase()) + "</span>", '<div class="d-flex align-items-center"><span class="me-4">' + d[s] + '</span><div><a href="app-academy-course-details.html"><span class="text-heading mb-2 text-wrap fw-medium">' + i + '</span></a><div class="d-flex align-items-center mt-1"><div class="avatar-wrapper me-2"><div class="avatar avatar-xs">' + t + '</div></div><span class="text-nowrap small text-heading">' + o + "</span></div></div></div>"
            }
        }, {
            targets: 3,
            responsivePriority: 3,
            render: function(e, a, t, r) {
                var e = moment.duration(e),
                    s = Math.floor(e.asHours());
                return '<h6 class="mb-0 text-nowrap">' + (s + "h " + (Math.floor(e.asMinutes()) - 60 * s) + "m") + "</h6>"
            }
        }, {
            targets: 4,
            render: function(e, a, t, r) {
                var s = t.status;
                return '<div class="d-flex align-items-center gap-4"><h6 class="mb-0">' + s + '</h6><div class="progress w-100 rounded-pill" style="height: 8px;"><div class="progress-bar" style="width: ' + s + '" aria-valuenow="' + s + '" aria-valuemin="0" aria-valuemax="100"></div></div><small>' + t.number + "</small></div>"
            }
        }, {
            targets: 5,
            render: function(e, a, t, r) {
                return '<div class="d-flex align-items-center justify-content-between"><div class="w-px-50 d-flex align-items-center"><i class="ri-group-line ri-24px me-1_5 text-primary"></i>' + t.user_number + '</div><div class="w-px-50 d-flex align-items-center"><i class="ri-computer-line ri-24px me-1_5 text-info" ></i>' + t.note + '</div><div class="w-px-50 d-flex align-items-center"><i class="ri-video-upload-line ri-24px me-1_5 text-danger scaleX-n1-rtl" ></i>' + t.view + "</div></div>"
            }
        }],
        order: [
            [2, "desc"]
        ],
        dom: '<"card-header pb-0 py-md-0 flex-column flex-md-row"<"head-label text-center">f>t<"row mx-4"<"col-md-6 col-12 text-center text-md-start pb-2 pb-md-0 px-0"i><"col-md-6 col-12 d-flex justify-content-center justify-content-md-end px-0"p>>',
        lengthMenu: [5],
        language: {
            sLengthMenu: "_MENU_",
            search: "",
            searchPlaceholder: "Course name"
        },
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function(e) {
                        return "Details of " + e.data().user_number
                    }
                }),
                type: "column",
                renderer: function(e, a, t) {
                    t = $.map(t, function(e, a) {
                        return "" !== e.title ? '<tr data-dt-row="' + e.rowIndex + '" data-dt-column="' + e.columnIndex + '"><td>' + e.title + ":</td> <td>" + e.data + "</td></tr>" : ""
                    }).join("");
                    return !!t && $('<table class="table"/><tbody />').append(t)
                }
            }
        }
    }), $("div.head-label").html('<h5 class="card-title mb-0 text-nowrap">Course you are taking</h5>')), $(".datatables-orders tbody").on("click", ".delete-record", function() {
        l.row($(this).parents("tr")).remove().draw()
    })
}();