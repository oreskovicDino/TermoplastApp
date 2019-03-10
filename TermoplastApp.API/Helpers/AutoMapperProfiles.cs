using System.Linq;
using AutoMapper;
using TermoplastApp.API.Dtos;
using TermoplastApp.API.Models;

namespace TermoplastApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Admin, AdminsForListDto>();
            CreateMap<User, UserForListDto>();
            CreateMap<Posts, PostForListDto>().ForMember(dest => dest.PhotoUrl, opt =>
            {
                opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
            });
            CreateMap<Posts, PostForDetailedDto>().ForMember(dest => dest.PhotoUrl, opt =>
            {
                opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
            });
            CreateMap<Photo, PhotosForDetailedDto>();
            CreateMap<PostForUpdateDto, Posts>();
            CreateMap<AdminsForUpdateDto, Admin>();
            CreateMap<Photo, PhotoForReturnDto>();
            CreateMap<Item, ItemForReturnDto>();
            CreateMap<PhotoForCreationDto, Photo>();
            CreateMap<ItemForCreationDto, Item>();
        }
    }
}