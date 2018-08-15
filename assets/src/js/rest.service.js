export default {

    getPosts(callback) {
        $.ajax({
            url: wp.rest_url + 'wp/v2/posts?_embed'
        }).done(function(data) {
            let posts = data.map((post) => {
                return {
                    id: post.id,
                    slug: post.slug,
                    link: post.link,
                    title: post.title.rendered,
                    content: post.content.rendered,
                    excerpt: post.excerpt.rendered,
                    featured_image: post._embedded['wp:featuredmedia']['0'].source_url,
                    thumbnail: post._embedded['wp:featuredmedia'][0]['media_details']['sizes']['thumbnail'].source_url
                }
            });
            callback(posts);
        });
    },

    getPost(slug, callback) {
        $.ajax({
            url: wp.rest_url + 'wp/v2/posts?slug' + slug
        }).done(function(data) {
            callback(data[0]);
        });
    }
    
}