import Cat "types";
module {
    type Database = Cat.Database;

    public let Database : [Database] = [
        {
            name = "Vehicles";
            subcategory = [
                "cars",
                "buses",
                "trucks & trailers",
                "vehicle parts & assessories",
                "motocycles",
            ];
        },
        {
            name = "Electronics";
            subcategory = [
                "computers & laptops",

                "electronic supplies",
                "audio & music equipment",

                "computer accessories",

                "radio & home audio",
                "tv & dvd equipment",
            ];
        },
        {
            name = "Health & Beauty";
            subcategory = [
                "skincare",

                "hair products",

                "bath & body",

                "fragrances",

                "vitamins & supplements",
            ];
        },
        {
            name = "Mobile phones & Tablets";
            subcategory = [
                "phones",

                "tablets",

                "accessories for mobile phones & tablets",
            ];
        },
        {
            name = "Property";
            subcategory = [
                "houses & apartments for rent",

                "houses & apartments for sale",

                "land & plots for sale",
            ];
        },
        {
            name = "Fashion";
            subcategory = [
                "bags",

                "clothing & clothing-accessories",

                "jewelry",

                "shoes",
            ];
        },
    ];
};
