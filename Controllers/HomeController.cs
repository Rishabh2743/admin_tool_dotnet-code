using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace admin_tool_demo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult LoginUser(string Email, string password)
        {
            JsonResult result = new JsonResult();
            using (var db = new())
            {
                var temp = db.loginuser(Email,password).Tostring();
                result = Json(temp);
            }
            return result;
        }
    }
}