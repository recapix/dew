using System.Threading.Tasks;

namespace dew.site.Services
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string message);
    }
}
