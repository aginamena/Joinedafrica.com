import Principal "mo:base/Principal";
import Text "mo:base/Text";
module {
    public type Post = {
        creatorsId : Principal;
        creationDateOfPost : Text;
        description : Text;
        images : [Nat8];
    };

    public type Profile = {
        id : UserId;
        firstName : Text;
        lastName : Text;
        profilePicture : [Nat8];
        email : Text;
    };

    //the strucutre of how the posts are organised in the database
    public type Database = {
        name : Text;
        subcategory : [Text];
    };

    //the structure of how the posts are viewed in the frontend
    public type ViewCategory = {
        name : Text;
        posts : [Post];
    };
    public type UserId = Principal;

};
