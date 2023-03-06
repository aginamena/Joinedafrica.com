import Trie "mo:base/Trie";
import Types "types";
import Text "mo:base/Text";
import Option "mo:base/Option";
import List "mo:base/List";
import Util "utils";
import DatabaseStructure "DatabaseStructure";
import Principal "mo:base/Principal";

/**
    This module is reponsible all published posts. 
*/
module {
    type Post = Types.Post;
    type Database = Types.Database;
    type PostId = Types.PostId;
    type UserId = Types.UserId;
    type Category = Types.Category;
    type Subcategory = Types.Subcategory;

    public class Posts() {
        var publishedPosts = Util.createDatabase(DatabaseStructure.Database);

        var singlePosts : Trie.Trie<PostId, Post> = Trie.empty();

        //stores all the posts created by a user
        var myPostings : Trie.Trie<UserId, List.List<Post>> = Trie.empty();

        public func createPost(newPost : Post, userId : UserId) {
            let userPostings : List.List<Post> = switch (Trie.get(myPostings, hashKey(userId), Principal.equal)) {
                case null List.nil();
                case (?posts) posts;
            };
            myPostings := Trie.put(myPostings, hashKey(userId), Principal.equal, List.push(newPost, userPostings)).0;
            singlePosts := Trie.put(singlePosts, textHash(newPost.postId), Text.equal, newPost).0;
        };
        public func getAllMyPostings(userId : UserId) : [Post] {
            switch (Trie.get(myPostings, hashKey(userId), Principal.equal)) {
                case null [];
                case (?myPosts) List.toArray(myPosts);
            };

        };
        public func getPost(id : PostId) : ?Post {
            Trie.get(singlePosts, textHash(id), Text.equal);
        };
        func hashKey(t : UserId) : Trie.Key<UserId> {
            { hash = Principal.hash(t); key = t };
        };
        func textHash(t : PostId) : Trie.Key<PostId> {
            { hash = Text.hash(t); key = t };
        };
    };

};
