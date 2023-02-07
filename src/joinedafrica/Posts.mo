import Trie "mo:base/Trie";
import Type "types";
import Text "mo:base/Text";
import Option "mo:base/Option";
import List "mo:base/List";

module {
    type Category = Text;
    type Subcategory = Text;
    type Post = Type.Post;
    type Database = Type.Database;
    // type ViewCategory = Type.ViewCategory;

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

        // given the category name, we return all the posts in that category alongside with their names
        // public func get_all_subcategory_in_a_category(categoryName : CategoryName) : [ViewCategory] {
        //     let subcategory : ?Trie.Trie<CategoryName, List.List<Post>> = Trie.get(joined_africa_category, key(categoryName), Text.equal);
        //     return Trie.toArray<CategoryName, List.List<Post>, ViewCategory>(
        //         Option.get(subcategory, Trie.empty()),
        //         func(key : CategoryName, value : List.List<Post>) {
        //             let category : ViewCategory = {
        //                 name = key; //subcategory name.
        //                 posts = List.toArray(value);
        //             };
        //         },
        //     );

        // };

    };

    func key(t : Category) : Trie.Key<Category> {
        { key = t; hash = Text.hash(t) };
    };
};
