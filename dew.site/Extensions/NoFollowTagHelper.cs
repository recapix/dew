using dew.site.Models;
using Microsoft.AspNetCore.Razor.TagHelpers;
using Microsoft.Extensions.Options;

[HtmlTargetElement("a", Attributes = "href")]
public class NoFollowTagHelper : TagHelper
{
    private readonly IOptions<ConfigModel> _options;

    public NoFollowTagHelper(IOptions<ConfigModel> _Options)
    {
        _options = _Options;
    }

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        var href = output.Attributes["href"];
        if (!href.Value.ToString().Contains(_options.Value.NoFollowLink))
        {
            output.Attributes.Add("rel", "nofollow");
        }

        base.Process(context, output);
    }
}