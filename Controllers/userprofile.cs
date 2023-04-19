
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.SqlClient;
using Newtonsoft.Json;
using System.Data;
using System.Reflection;


namespace admin_tool_demo.Controllers
{
    public class userprofile : Controller
    {
        // GET: userprofile
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult profile()
        {
            return View();
        }



        public ActionResult Resultdashboard(string Email)
        {
            JsonResult result = new JsonResult();
            using (var db = new )
            {
                var temp = db.admin_subDashboard().ToList();
                result = Json(temp);
            }
            return result;
        }


    }
}