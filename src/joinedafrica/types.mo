import Principal "mo:base/Principal";
import Text "mo:base/Text";
module {
    public type Post = {
        creatorsId : Principal;
        firstName : Text;
        lastName : Text;
        creation_date_of_Post : Text;
        description : Text;
        images : [Nat8];
    };

    //the strucutre of how the posts are organised in the database
    public type Category = {
        name : Text;
        subCategory : [Category];
    };

    //the structure of how the posts are viewed in the frontend
    public type ViewCategory = {
        name : Text;
        posts : [Post];
    };

};
