import Cat "types";
module {
    public let Database : [Cat.Database] = [
        {
            name = "Vehicles";
            subcategory = [
                "Cars",
                "Buses",
                "Trucks_and_trailers",
                "Vehicle_parts_and_assessories",
                "Motocycle_and_bicycles",
            ];
        },
        {
            name = "Electronics";
            subcategory = [
                "Computers_and_laptops",
                "Electronic_supplies",
                "Audio_and_music_equipments",
                "Computer_accessories",
                "Radio_and_home_audio",
                "Tv_and_dvd_equipment",
            ];
        },
        {
            name = "Health_and_beauty";
            subcategory = [
                "Skincare",
                "Hair_products",
                "Bath_and_body",
                "Fragrances",
                "Vitamins_and_supplements",
            ];
        },
        {
            name = "Mobile_phones_and_tablets";
            subcategory = [
                "Phones",
                "Tablets",
                "Accessories_for_mobile_phones_and_tablets",
            ];
        },
        {
            name = "Properties";
            subcategory = [
                "Houses_and_apartments_for_rent",
                "Houses_and_apartments_for_sale",
                "Land_and_plots_for_sale",
            ];
        },
        {
            name = "Fashion";
            subcategory = [
                "Bags",
                "Clothing_and_clothing_accessories",
                "Jewelries",
                "Shoes",
            ];
        },
    ];
};
