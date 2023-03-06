import Types "types";
import Trie "mo:base/Trie";
import Principal "mo:base/Principal";
import Text "mo:base/Text";
import List "mo:base/List";
import DatabaseStructure "DatabaseStructure";
module {
    type UserId = Types.UserId;
    type Category = Types.Category;
    type Subcategory = Types.Subcategory;
    type Database = Types.Database;
    type Post = Types.Post;

    //hashing the user id
    // public func myPostingsKey(t : UserId) : Trie.Key<UserId> {
    //     { hash = Principal.hash(t); key = t };
    // };

    // public func myPostingsEqual(t1 : UserId, t2 : UserId) : Bool {
    //     Principal.equal(t1, t2);
    // };
    // public func postsIdsKey(t : PostId) : Trie.Key<PostId> {
    //     { hash = Text.hash(t); key = t };
    // };
    // public func postsIdsEqual(t1 : PostId, t2 : PostId) : Bool {
    //     Text.equal(t1, t2);
    // };
    public func createDatabase(allCategories : [Database]) : Trie.Trie<Category, Trie.Trie<Subcategory, List.List<Post>>> {
        var database : Trie.Trie<Category, Trie.Trie<Subcategory, List.List<Post>>> = Trie.empty();
        for (category in allCategories.vals()) {
            var allSubCategories : Trie.Trie<Subcategory, List.List<Post>> = Trie.empty();
            for (subcategory in category.subcategory.vals()) {
                allSubCategories := Trie.put(allSubCategories, key(subcategory), Text.equal, List.nil()).0;
            };
            database := Trie.put(database, key(category.name), Text.equal, allSubCategories).0;
        };
        return database;
    };
    func key(t : Category) : Trie.Key<Category> {
        { key = t; hash = Text.hash(t) };
    };
};
