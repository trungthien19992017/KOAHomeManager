using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using AspnetCoreMvcFull.Models;
using KOAHome.EntityFramework;
using KOAHome.Services;
using Newtonsoft.Json.Linq;
using OfficeOpenXml.FormulaParsing.Excel.Functions.Database;
using System;
using OfficeOpenXml.FormulaParsing.Excel.Functions.DateTime;
using Humanizer;
using System.Collections.Generic;
using Microsoft.SqlServer.Server;

namespace AspnetCoreMvcFull.Controllers;

public class DashboardsController : Controller
{
  private readonly ILogger<DashboardsController> _logger;
  private readonly QLKCL_NEWContext _db;
  private readonly IHsCustomerService _cus;
  private readonly IWidgetService _widget; 


  public DashboardsController(ILogger<DashboardsController> logger, IHsCustomerService cus, IWidgetService widget)
  {
    _logger = logger;
    _cus = cus;
    _widget = widget;
  }

  public async Task<IActionResult> Index()
  {
    return View();
  }

  public async Task<IActionResult> KoaDashboard([FromQuery] Dictionary<string, string> parameters)
  {
    // xu ly bo loc
    // chuyen parameters thanh Idictionary<string, object>
    Dictionary<string, object> objParameters = parameters.ToDictionary(kvp => kvp.Key, kvp => (object)kvp.Value);

    // xu ly lay du lieu cho tung widget
    //khai bao phan tu chua data

    ////////widget simple card Chuc mung
    ////Tổng doanh thu tháng
    var SimpleCard_ChucMung = await _widget.Widget_GetObject(objParameters, "HS_Widget_SimpleCard_ChucMung", null);
    ViewBag.SimpleCard_ChucMung = SimpleCard_ChucMung;

    ////////widget simple cart So lieu trong thang
    //Doanh thu, luot book, so gio, chi
    var SimpleCard_SoLieuTrongThang = await _widget.Widget_GetObject(objParameters, "HS_Widget_SimpleCard_SoLieuTrongThang", null);
    ViewBag.SimpleCard_SoLieuTrongThang = SimpleCard_SoLieuTrongThang;

    ////////line chart doanh thu 6 thang gan day
    var LineChart_DoanhThuCacThang = await _widget.Widget_GetObject(objParameters, "HS_Widget_LineChart_DoanhThuCacThang", null);
    ViewBag.LineChart_DoanhThuCacThang = LineChart_DoanhThuCacThang;

    ////////Column chart chi phi 6 thang gan day
    var ColumnChart_ChiPhiCacThang = await _widget.Widget_GetObject(objParameters, "HS_Widget_ColumnChart_ChiPhiCacThang", null);
    ViewBag.ColumnChart_ChiPhiCacThang = ColumnChart_ChiPhiCacThang;

    //////// List item Top 5 dịch vụ tháng
    var ListItem_TopDichVuThang = await _widget.Widget_GetList(objParameters, "HS_Widget_ListItem_TopDichVuThang", null);
    ViewBag.ListItem_TopDichVuThang = ListItem_TopDichVuThang;

    //////// Widget List item ty le kin phong trong tuan
    var ListItem_TyLeKinPhongTuan = await _widget.Widget_GetList(objParameters, "HS_Widget_ListItem_TyLeKinPhongTuan", null);
    ViewBag.ListItem_TyLeKinPhongTuan = ListItem_TyLeKinPhongTuan;

    //////// Widget list item Top 5 khách hàng gần đây nhất
    var ListItem_TopKhachHangGanDay = await _widget.Widget_GetList(objParameters, "HS_Widget_ListItem_TopKhachHangGanDay", null);
    ViewBag.ListItem_TopKhachHangGanDay = ListItem_TopKhachHangGanDay;

    //////// Column chart Doanh thu tuần
    var ColumnChart_DoanhThuTuan = await _widget.Widget_GetObject(objParameters, "HS_Widget_ColumnChart_DoanhThuTuan", null);
    ViewBag.ColumnChart_DoanhThuTuan = ColumnChart_DoanhThuTuan;

    return View();
  }


  [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
  public IActionResult Error()
  {
    return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
  }
}
