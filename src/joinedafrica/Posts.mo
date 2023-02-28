import Trie "mo:base/Trie";
import Type "types";
import Text "mo:base/Text";
import Option "mo:base/Option";
import List "mo:base/List";

/**
    This module is reponsible all published posts. 
*/
module {
    type Category = Text;
    type Subcategory = Text;
    type Post = Type.Post;
    type Database = Type.Database;
    type PostId = Type.PostId;

    public class PublishedPosts() {
        var postStructure : Trie.Trie<Category, Trie.Trie<Subcategory, List.List<Post>>> = Trie.empty();
        var publishedPosts : Trie.Trie<PostId, Post> = Trie.empty();

        //initialie the database with the category and subcategory names
        public func createDatabase(allCategories : [Database]) {
            for (category in allCategories.vals()) {
                var allSubCategories : Trie.Trie<Subcategory, List.List<Post>> = Trie.empty();
                for (subcategory in category.subcategory.vals()) {
                    allSubCategories := Trie.put(allSubCategories, key(subcategory), Text.equal, List.nil()).0;
                };
                postStructure := Trie.put(postStructure, key(category.name), Text.equal, allSubCategories).0;
            };
        };
        public func get() : Trie.Trie<Category, Trie.Trie<Subcategory, List.List<Post>>> {
            return postStructure;
        };

    };

    func key(t : Category) : Trie.Key<Category> {
        { key = t; hash = Text.hash(t) };
    };
};
