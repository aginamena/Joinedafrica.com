import Trie "mo:base/Trie";
import List "mo:base/List";
import Type "types";

module {
    type Post = Type.Post;
    type UserId = Type.UserId;
    // stores all the posts created by a user
    public class MyPostings() {
        var myPostings : Trie.Trie<UserId, List.List<Post>> = Trie.empty();
    };
};
