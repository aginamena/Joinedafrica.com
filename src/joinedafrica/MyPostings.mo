import Trie "mo:base/Trie";
import List "mo:base/List";
import Type "types";
import Utils "utils";

module {
    type Post = Type.Post;
    type UserId = Type.UserId;

    // stores all the posts created by a user
    public class MyPostings() {
        var myPostings : Trie.Trie<UserId, List.List<Post>> = Trie.empty();
        public func createPost(newPost : Post, userId : UserId) {
            //if the user doesn't have an account, tell them to create an account
            //with Profile details before they can create a post
            if (userHasCreatedAnAccount(userId)) {
                let userPostings : List.List<Post> = switch (Trie.get(myPostings, Utils.key(userId), Utils.equal)) {
                    case null List.nil();
                    case (?posts) posts;
                };
                myPostings := Trie.put(myPostings, Utils.key(userId), Utils.equal, List.push(newPost, userPostings)).0;

            } else {
                //..tell them to create an account
            };
        };
        private func userHasCreatedAnAccount(userId : UserId) : Bool {
            //to be implemented
            return true;
        };
    };
};
