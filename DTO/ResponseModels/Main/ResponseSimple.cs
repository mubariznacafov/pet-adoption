using animal.adoption.api.DTO.HelperModels;

namespace animal.adoption.api.DTO.ResponseModels.Main
{
    public class ResponseSimple
    {
        public StatusModel Status { get; set; }
        public string TraceID { get; set; }
    }
}
