import Principal "mo:base/Principal";
import Text "mo:base/Text";
module {
    public type Post = {
        creationDateOfPost : Text;
        images : [[Nat8]];
        category : Text;
        subcategory : Text;
        productTitle : Text;
        amount : Text;
        productDescription : Text;
        condition : Text;
        productSpecification : {
            //Remove the optional values that are null. From being saved in the database

            // specification for vehicles, electronics, mobile phones and tablets
            yearOfManufacture : Int;
            model : Text;
            nameOfManufacturer : Text;
            // specification for health and beauty
            gender : Text;
            // specification for houses and apartments for rent
            isFurnished : Bool;
            hasParkingSpace : Bool;
            durationOfRenting : Int;
            //land & plots for sale
            numberOfPlots : Int;
        };
    };

    public type Profile = {
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
