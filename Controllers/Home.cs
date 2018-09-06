using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.Prerendering;
using Newtonsoft.Json;

namespace HomeFoodie.Controllers
{
    public class HomeController : Controller
    {
        //TODO: get this info from the SEO Module
        [
            Route("/"),
            Route("/fetchdata"),
            Route("/counter")
        ]
        public async Task<IActionResult> Index([FromServices] ISpaPrerenderer prerenderer)
        {
            var initialState = JsonConvert.SerializeObject(new { counter = new { count = 99 } });

            //Note: Pass any custom data in through here

            var prerenderResult = await prerenderer.RenderToString(
                "./ClientApp/server/bootstrap",
                customDataParameter: initialState
            );

            return Content(prerenderResult.Html, "text/html");
        }
    }
}