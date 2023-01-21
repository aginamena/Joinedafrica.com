import Trie "mo:base/Trie";
import Type "types";
import Text "mo:base/Text";

module {
    type CategoryName = Text;
    type Post = Type.Post;
    public func create_category() {
        var joined_africa_category : Trie.Trie<CategoryName, Trie.Trie<CategoryName, Post>> = Trie.empty();
        let categories : [CategoryName] = ["Vehicles", "Electronics", "Health & Beauty", "Mobile Phones & Tables", "Property", "Fashion"];
        for (category in categories.vals()) {
            joined_africa_category := Trie.put(joined_africa_category, key(category), Text.equal, Trie.empty()).0;
        };
    };
    public func create_subcategory() {

    };
    func key(t : CategoryName) : Trie.Key<CategoryName> {
        { key = t; hash = Text.hash t };
    };
};
