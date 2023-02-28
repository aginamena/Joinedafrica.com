import Trie "mo:base/Trie";
import List "mo:base/List";
import Type "types";
import Utils "utils";
import Result "mo:base/Result";
import Principal "mo:base/Principal";
import Debug "mo:base/Debug";

/**
    This module is responsible for managing all posts created by me. Including creating, deleting, editing and so on
*/
module {
    type Post = Type.Post;
    type UserId = Type.UserId;
    type Result<T, E> = Result.Result<T, E>;
    type PostId = Type.PostId;

    public class MyPostings() {
        var myPostings : Trie.Trie<UserId, List.List<Post>> = Trie.empty();
        var postsIds : Trie.Trie<PostId, Post> = Trie.empty();
        public func createPost(newPost : Post, userId : UserId) {
            //if the user doesn't have an account, tell them to create an account
            //with Profile details before they can create a post
            if (userHasCreatedAnAccount(userId)) {
                let userPostings : List.List<Post> = switch (Trie.get(myPostings, Utils.myPostingsKey(userId), Utils.myPostingsEqual)) {
                    case null List.nil();
                    case (?posts) posts;
                };
                myPostings := Trie.put(myPostings, Utils.myPostingsKey(userId), Utils.myPostingsEqual, List.push(newPost, userPostings)).0;
                // Debug.print(debug_show (newPost));
                postsIds := Trie.put(postsIds, Utils.postsIdsKey(newPost.postId), Utils.postsIdsEqual, newPost).0;
            } else {

                //..tell them to create an account
            };
        };
        public func getAllMyPostings(userId : UserId) : [Post] {
            switch (Trie.get(myPostings, Utils.myPostingsKey(userId), Utils.myPostingsEqual)) {
                case null [];
                case (?myPosts) List.toArray(myPosts);
            };
        };
        public func getPost(id : PostId) : ?Post {
            Trie.get(postsIds, Utils.postsIdsKey(id), Utils.postsIdsEqual);
        };
        private func userHasCreatedAnAccount(userId : UserId) : Bool {
            //to be implemented
            return true;
        };

    };
};
