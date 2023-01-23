import Trie "mo:base/Trie";
import Type "types";
import Text "mo:base/Text";
import Option "mo:base/Option";
import List "mo:base/List";

module {
    type CategoryName = Text;
    type Post = Type.Post;
    type Category = Type.Category;
    type ViewCategory = Type.ViewCategory;

    public class PostingCategory() {
        var joined_africa_category : Trie.Trie<CategoryName, Trie.Trie<CategoryName, List.List<Post>>> = Trie.empty();

        //initialise the database with the category and subcategory names
        public func create_category(allCategories : [Category]) {
            for (category in allCategories.vals()) {
                var newCategory : Trie.Trie<CategoryName, List.List<Post>> = Trie.empty();
                for (subCategory in category.subCategory.vals()) {
                    newCategory := Trie.put(newCategory, key(subCategory.name), Text.equal, List.nil()).0;
                };
                joined_africa_category := Trie.put(joined_africa_category, key(category.name), Text.equal, newCategory).0;
            };
        };
        public func get() : Trie.Trie<CategoryName, Trie.Trie<CategoryName, List.List<Post>>> {
            return joined_africa_category;
        };

        // given the category name, we return all the posts in that category alongside with their names
        public func get_all_subcategory_to_a_category(categoryName : CategoryName) : [ViewCategory] {
            let subCategory : ?Trie.Trie<CategoryName, List.List<Post>> = Trie.get(joined_africa_category, key(categoryName), Text.equal);
            return Trie.toArray<CategoryName, List.List<Post>, ViewCategory>(
                Option.get(subCategory, Trie.empty()),
                func(key : CategoryName, value : List.List<Post>) {
                    let category : ViewCategory = {
                        name = key; //subcategory name.
                        posts = List.toArray(value);
                    };
                },
            );

        };

    };

    func key(t : CategoryName) : Trie.Key<CategoryName> {
        { key = t; hash = Text.hash t };
    };
};
