using Gifter.Models;
using System;
using System.Collections.Generic;

namespace Gifter.Repositories
{
    public interface IPostRepository
    {
        void Add(Post post);
        void Delete(int id);
        List<Post> GetAll();
        Post GetById(int id);
        void Update(Post post);

        public List<Post> GetAllWithComments();
        public List<Post> Search(string q, bool sortDesc);
        public List<Post> GetPostsByDate(DateTime since);

        public Post GetPostIdWithComments(int id);
    }
}