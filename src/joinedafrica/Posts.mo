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

    public class PublishedPosts() {
        var allPublishedPosts : Trie.Trie<Category, Trie.Trie<Subcategory, List.List<Post>>> = Trie.empty();

        //initialie the database with the category and subcategory names
        public func createDatabase(allCategories : [Database]) {
            for (category in allCategories.vals()) {
                var allSubCategories : Trie.Trie<Subcategory, List.List<Post>> = Trie.empty();
                for (subcategory in category.subcategory.vals()) {
                    allSubCategories := Trie.put(allSubCategories, key(subcategory), Text.equal, List.nil()).0;
                };
                allPublishedPosts := Trie.put(allPublishedPosts, key(category.name), Text.equal, allSubCategories).0;
            };
        };
        public func get() : Trie.Trie<Category, Trie.Trie<Subcategory, List.List<Post>>> {
            return allPublishedPosts;
        };

    };

    func key(t : Category) : Trie.Key<Category> {
        { key = t; hash = Text.hash(t) };
    };
};
