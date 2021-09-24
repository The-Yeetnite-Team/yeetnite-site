export default function catalog(req, res) {
    if (req.query.rvn) {
        switch (req.query.rvn) {
            case '1':
                res.json(
                    {
                        "refreshIntervalHrs": 9999999,
                        "dailyPurchaseHrs": 9999999,
                        "expiration": "9999-12-02T01:12:00Z",
                        "storefronts": [
                            {
                                "name": "BRDailyStorefront",
                                "catalogEntries": [
                                    {
                                        "devName": "AthenaCharacter:CID_017_Athena_Commando_M",
                                        "offerId": "v2:/dfgfdgdfg-gf-fdggfgfd-fggf-dgfgf",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "MtxCurrency",
                                                "currencySubType": "",
                                                "regularPrice": 0,
                                                "finalPrice": 0,
                                                "saleExpiration": "9999-12-02T01:12:00Z",
                                                "basePrice": 0
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [
                                            {
                                                "requirementType": "DenyOnItemOwnership",
                                                "requiredId": "AthenaCharacter:CID_017_Athena_Commando_M",
                                                "minQuantity": 1
                                            }
                                        ],
                                        "offerType": "StaticPrice",
                                        "giftInfo": {
                                            "bIsEnabled": false,
                                            "forcedGiftBoxTemplateId": "",
                                            "purchaseRequirements": [],
                                            "giftRecordIds": []
                                        },
                                        "refundable": true,
                                        "metaInfo": [],
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "AthenaCharacter:CID_017_Athena_Commando_M",
                                                "quantity": 1
                                            }
                                        ],
                                        "sortPriority": 0,
                                        "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": "AthenaCharacter:CID_028_Athena_Commando_F",
                                        "offerId": "v2:/fg-gf-dgfgfgddggfdfsfdsa-ddsffsd-dsfds",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "MtxCurrency",
                                                "currencySubType": "",
                                                "regularPrice": 0,
                                                "finalPrice": 0,
                                                "saleExpiration": "9999-12-02T01:12:00Z",
                                                "basePrice": 0
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [
                                            {
                                                "requirementType": "DenyOnItemOwnership",
                                                "requiredId": "AthenaCharacter:CID_028_Athena_Commando_F",
                                                "minQuantity": 1
                                            }
                                        ],
                                        "offerType": "StaticPrice",
                                        "giftInfo": {
                                            "bIsEnabled": false,
                                            "forcedGiftBoxTemplateId": "",
                                            "purchaseRequirements": [],
                                            "giftRecordIds": []
                                        },
                                        "refundable": true,
                                        "metaInfo": [],
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "AthenaCharacter:CID_028_Athena_Commando_F",
                                                "quantity": 1
                                            }
                                        ],
                                        "sortPriority": 0,
                                        "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": "AthenaDance:EID_Worm",
                                        "offerId": "v2:/gffdgfggfgf-ggfddgdggafdsdqwewr-gfgfdwfqwe",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "MtxCurrency",
                                                "currencySubType": "",
                                                "regularPrice": 0,
                                                "finalPrice": 0,
                                                "saleExpiration": "9999-12-02T01:12:00Z",
                                                "basePrice": 0
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [
                                            {
                                                "requirementType": "DenyOnItemOwnership",
                                                "requiredId": "AthenaDance:EID_Worm",
                                                "minQuantity": 1
                                            }
                                        ],
                                        "offerType": "StaticPrice",
                                        "giftInfo": {
                                            "bIsEnabled": false,
                                            "forcedGiftBoxTemplateId": "",
                                            "purchaseRequirements": [],
                                            "giftRecordIds": []
                                        },
                                        "refundable": true,
                                        "metaInfo": [],
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "AthenaDance:EID_Worm",
                                                "quantity": 1
                                            }
                                        ],
                                        "sortPriority": 0,
                                        "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": "AthenaGlider:Glider_Warthog",
                                        "offerId": "v2:/dffdf-fdadfsadqa-dffasd-adfdfg-rrws",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "MtxCurrency",
                                                "currencySubType": "",
                                                "regularPrice": 0,
                                                "finalPrice": 0,
                                                "saleExpiration": "9999-12-02T01:12:00Z",
                                                "basePrice": 0
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [
                                            {
                                                "requirementType": "DenyOnItemOwnership",
                                                "requiredId": "AthenaGlider:Glider_Warthog",
                                                "minQuantity": 1
                                            }
                                        ],
                                        "offerType": "StaticPrice",
                                        "giftInfo": {
                                            "bIsEnabled": false,
                                            "forcedGiftBoxTemplateId": "",
                                            "purchaseRequirements": [],
                                            "giftRecordIds": []
                                        },
                                        "refundable": true,
                                        "metaInfo": [],
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "AthenaGlider:Glider_Warthog",
                                                "quantity": 1
                                            }
                                        ],
                                        "sortPriority": 0,
                                        "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": "AthenaGlider:Glider_ID_001",
                                        "offerId": "v2:/dfsdsfwe809fef-8wef-wef89dfswd-wwfd",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "MtxCurrency",
                                                "currencySubType": "",
                                                "regularPrice": 0,
                                                "finalPrice": 0,
                                                "saleExpiration": "9999-12-02T01:12:00Z",
                                                "basePrice": 0
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [
                                            {
                                                "requirementType": "DenyOnItemOwnership",
                                                "requiredId": "AthenaGlider:Glider_ID_001",
                                                "minQuantity": 1
                                            }
                                        ],
                                        "offerType": "StaticPrice",
                                        "giftInfo": {
                                            "bIsEnabled": false,
                                            "forcedGiftBoxTemplateId": "",
                                            "purchaseRequirements": [],
                                            "giftRecordIds": []
                                        },
                                        "refundable": true,
                                        "metaInfo": [],
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "AthenaGlider:Glider_ID_001",
                                                "quantity": 1
                                            }
                                        ],
                                        "sortPriority": 0,
                                        "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": "AthenaPickaxe:Pickaxe_Lockjaw",
                                        "offerId": "v2:/d89fdsa89sdaf87ffae0fdf-dffefwefwe-fwdfdw",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "MtxCurrency",
                                                "currencySubType": "",
                                                "regularPrice": 0,
                                                "finalPrice": 0,
                                                "saleExpiration": "9999-12-02T01:12:00Z",
                                                "basePrice": 0
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [
                                            {
                                                "requirementType": "DenyOnItemOwnership",
                                                "requiredId": "AthenaPickaxe:Pickaxe_Lockjaw",
                                                "minQuantity": 1
                                            }
                                        ],
                                        "offerType": "StaticPrice",
                                        "giftInfo": {
                                            "bIsEnabled": false,
                                            "forcedGiftBoxTemplateId": "",
                                            "purchaseRequirements": [],
                                            "giftRecordIds": []
                                        },
                                        "refundable": true,
                                        "metaInfo": [],
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "AthenaPickaxe:Pickaxe_Lockjaw",
                                                "quantity": 1
                                            }
                                        ],
                                        "sortPriority": 0,
                                        "catalogGroupPriority": 0
                                    }
                                ]
                            },
                            {
                                "name": "BRWeeklyStorefront",
                                "catalogEntries": [
                                    {
                                        "devName": "AthenaPickaxe:Pickaxe_ID_013_Teslacoil",
                                        "offerId": "v2:/dsf-fsdfd-fds-fd-sf-fqae-effqef",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "MtxCurrency",
                                                "currencySubType": "",
                                                "regularPrice": 0,
                                                "finalPrice": 0,
                                                "saleExpiration": "9999-12-02T01:12:00Z",
                                                "basePrice": 0
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [
                                            {
                                                "requirementType": "DenyOnItemOwnership",
                                                "requiredId": "AthenaPickaxe:Pickaxe_ID_013_Teslacoil",
                                                "minQuantity": 1
                                            }
                                        ],
                                        "offerType": "StaticPrice",
                                        "giftInfo": {
                                            "bIsEnabled": false,
                                            "forcedGiftBoxTemplateId": "",
                                            "purchaseRequirements": [],
                                            "giftRecordIds": []
                                        },
                                        "refundable": true,
                                        "metaInfo": [],
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "AthenaPickaxe:Pickaxe_ID_013_Teslacoil",
                                                "quantity": 1
                                            }
                                        ],
                                        "sortPriority": -1,
                                        "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": "AthenaDance:EID_Floss",
                                        "offerId": "v2:/dsfsdfffaefasd-dafadfdsafsdf-fadfasdf-adfds",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "MtxCurrency",
                                                "currencySubType": "",
                                                "regularPrice": 0,
                                                "finalPrice": 0,
                                                "saleExpiration": "9999-12-02T01:12:00Z",
                                                "basePrice": 0
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [
                                            {
                                                "requirementType": "DenyOnItemOwnership",
                                                "requiredId": "AthenaDance:EID_Floss",
                                                "minQuantity": 1
                                            }
                                        ],
                                        "offerType": "StaticPrice",
                                        "giftInfo": {
                                            "bIsEnabled": false,
                                            "forcedGiftBoxTemplateId": "",
                                            "purchaseRequirements": [],
                                            "giftRecordIds": []
                                        },
                                        "refundable": true,
                                        "metaInfo": [],
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "AthenaDance:EID_Floss",
                                                "quantity": 1
                                            }
                                        ],
                                        "sortPriority": -2,
                                        "catalogGroupPriority": 0
                                    }
                                ]
                            },
                            {
                                "name": "CardPackStorePromo",
                                "catalogEntries": [
                                    {
                                        "offerId": "C060A6539A1743CA94C35D132EA91F4D",
                                        "devName": "Bonus.WeaponsPack.02",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "MtxCurrency",
                                                "currencySubType": "",
                                                "regularPrice": 200,
                                                "finalPrice": 200,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 200
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": 3,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "RequiredTag",
                                                "value": "Account.Buff.BonusStoreOffer"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Assault/DoubleShot/SID_Assault_Doubleshot_VR_Ore_T01.SID_Assault_Doubleshot_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Sword_Light/SID_Edged_Sword_Light_R_Ore_T01.SID_Edged_Sword_Light_R_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Shotgun/Standard/SID_Shotgun_Standard_R_Ore_T01.SID_Shotgun_Standard_R_Ore_T01'"
                                                ],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze_Weapons.CardPack_Bronze_Weapons'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Weapon Llama",
                                        "shortDescription": "",
                                        "description": "What comes out is as heavy as a sack of broken glass and just as much fun to play with. Contains at least 6 safety-guaranteed items.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_bronze_weapons",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "3EDCB81A3EAB41099BB51920750BD8B0",
                                        "devName": "Fixed.Single.16",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "MtxCurrency",
                                                "currencySubType": "",
                                                "regularPrice": 500,
                                                "finalPrice": 500,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 500
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": 4,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Sniper/TripleShot/SID_Sniper_TripleShot_VR_Ore_T01.SID_Sniper_TripleShot_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Piercing/Spear_High/SID_Piercing_Spear_SR_Ore_T01.SID_Piercing_Spear_SR_Ore_T01'",
                                                    "FortHeroType'/Game/Heroes/Outlander/ItemDefinition/HID_Outlander_ZonePistol_R_T01.HID_Outlander_ZonePistol_R_T01'"
                                                ],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Jackpot.CardPack_Jackpot'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Legendary Troll Stash Llama",
                                        "shortDescription": "",
                                        "description": "An entire suite of goodies, direct from your local troll's stash! Contains at least 8 definitely-not-stolen items.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_jackpot",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "8339003D26B24F70878EE280B70C340D",
                                        "devName": "Fixed.Single.23",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "MtxCurrency",
                                                "currencySubType": "",
                                                "regularPrice": 50,
                                                "finalPrice": 0,
                                                "saleType": "Strikethrough",
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 0
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": 2,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Assault/Raygun/SID_Assault_Raygun_VR_Ore_T01.SID_Assault_Raygun_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Blunt/Tools/Hammer_Heavy/SID_Blunt_Hammer_Heavy_R_Ore_T01.SID_Blunt_Hammer_Heavy_R_Ore_T01'",
                                                    "FortWorkerType'/Game/Items/Workers/Managers/ManagerDoctor_R_T01.ManagerDoctor_R_T01'"
                                                ],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze.CardPack_Bronze'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Upgrade Llama (Seasonal Sale Freebie!)",
                                        "shortDescription": "",
                                        "description": "The old faithful llama, packed with a variety of goodies and upgrade materials. Contains at least 4 items, including a rare item or a hero! Has a high chance to upgrade.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_bronze",
                                                "quantity": 1
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "name": "CurrencyStorefront",
                                "catalogEntries": [
                                    {
                                        "offerId": "425FDD804D9D61AC2530CE8F31398BCD",
                                        "devName": "Large Currency Pack",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "RealMoney",
                                                "currencySubType": "",
                                                "regularPrice": 0,
                                                "finalPrice": 0,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 0
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "3b4c5df9efa5415b941cf74262865e4e",
                                            "ios_vbucks_large",
                                            "10300",
                                            "google_vbucks_large",
                                            "",
                                            "MTX08K0000000000",
                                            "d299e00d-811e-4b57-85c1-ec06cbc40074",
                                            "c-virtualcurrency0-MTX7500"
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "MtxQuantity",
                                                "value": "7500"
                                            },
                                            {
                                                "key": "MtxBonus",
                                                "value": "1500"
                                            }
                                        ],
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 3,
                                        "title": "Large Currency Pack",
                                        "shortDescription": "",
                                        "description": "This in-game currency can be used to purchase new customization items for your Hero, glider, or pickaxe.",
                                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack7500.DA_MtxPack7500",
                                        "itemGrants": []
                                    },
                                    {
                                        "offerId": "A094F1D14BAE8DA77114DAAE76AFCA83",
                                        "devName": "Medium Currency Pack",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "RealMoney",
                                                "currencySubType": "",
                                                "regularPrice": 0,
                                                "finalPrice": 0,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 0
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "559f2ba95f874ec987d0ebfd2cc9c70a",
                                            "ios_vbucks_medium",
                                            "10200",
                                            "google_vbucks_medium",
                                            "",
                                            "MTX03K0000000000",
                                            "cee19aa0-5238-4656-9e52-c8bd0765eb53",
                                            "c-virtualcurrency0-MTX2800"
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "MtxQuantity",
                                                "value": "2800"
                                            },
                                            {
                                                "key": "MtxBonus",
                                                "value": "300"
                                            }
                                        ],
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 4,
                                        "title": "Medium Currency Pack",
                                        "shortDescription": "",
                                        "description": "This in-game currency can be used to purchase new customization items for your Hero, glider, or pickaxe.",
                                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack2800.DA_MtxPack2800",
                                        "itemGrants": []
                                    },
                                    {
                                        "offerId": "50DC69A74BC4B8D10AF8D5B17A4BF8D4",
                                        "devName": "Jumbo Currency Pack",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "RealMoney",
                                                "currencySubType": "",
                                                "regularPrice": 0,
                                                "finalPrice": 0,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 0
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "4daadb392f1c4ee2b5a3af443e614d2a",
                                            "ios_vbucks_jumbo",
                                            "10400",
                                            "google_vbucks_jumbo",
                                            "",
                                            "MTX14K0000000000",
                                            "d15248c0-acf6-48b7-9632-c9638cba4b37",
                                            "c-virtualcurrency0-MTX13500"
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "MtxQuantity",
                                                "value": "13500"
                                            },
                                            {
                                                "key": "MtxBonus",
                                                "value": "3500"
                                            }
                                        ],
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 2,
                                        "title": "Jumbo Currency Pack",
                                        "shortDescription": "",
                                        "description": "This in-game currency can be used to purchase new customization items for your Hero, glider, or pickaxe.",
                                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack13500.DA_MtxPack13500",
                                        "itemGrants": []
                                    },
                                    {
                                        "offerId": "E2BD4F70498AF13ADAA071B04F885292",
                                        "devName": "Small Currency Pack",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "RealMoney",
                                                "currencySubType": "",
                                                "regularPrice": 0,
                                                "finalPrice": 0,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 0
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "ede05b3c97e9475a8d9be91da65750f0",
                                            "ios_vbucks_small",
                                            "10100",
                                            "google_vbucks_small",
                                            "",
                                            "MTX01K0000000000",
                                            "6caed040-72dc-499a-9337-a165f1ec0a26",
                                            "c-virtualcurrency0-MTX1000"
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "MtxQuantity",
                                                "value": "1000"
                                            },
                                            {
                                                "key": "MtxBonus",
                                                "value": "0"
                                            }
                                        ],
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 5,
                                        "title": "Small Currency Pack",
                                        "shortDescription": "",
                                        "description": "This in-game currency can be used to purchase new customization items for your Hero, glider, or pickaxe.",
                                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
                                        "itemGrants": []
                                    }
                                ]
                            },
                            {
                                "name": "CardPackStore",
                                "catalogEntries": [
                                    {
                                        "offerId": "30A676BCF19B4D179F11D59079C69B6D",
                                        "devName": "Always.DailyLoginPack.01",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_custom_firecracker_r",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "100"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze_Ranged.CardPack_Bronze_Ranged'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Rare Firecracker Pistol",
                                        "shortDescription": "",
                                        "description": "One random Firecracker schematic.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_custom_firecracker_r",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "C710C9D5F83C4CEB8A0CC74DF58DE748",
                                        "devName": "Always.GenericToken.21",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_generic_trap_vr",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "20"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze_Traps.CardPack_Bronze_Traps'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Epic Trap",
                                        "shortDescription": "",
                                        "description": "One random trap schematic.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_trap_vr",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "6AB9A79C8799495B970FAD05E416292B",
                                        "devName": "Always.GenericToken.16",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_generic_schematic_r",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "10"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze.CardPack_Bronze'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Rare Schematic",
                                        "shortDescription": "",
                                        "description": "One random weapon schematic.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_schematic_r",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "E462F5DDBCC94BF296BF349891B0F02C",
                                        "devName": "Always.GenericToken.15",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_generic_ranged_vr",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "20"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze_Ranged.CardPack_Bronze_Ranged'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Epic Ranged Weapon",
                                        "shortDescription": "",
                                        "description": "One random ranged weapon schematic.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_ranged_vr",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "E0B561C888AA460DB1B17E2B51721DC3",
                                        "devName": "Always.GenericToken.36",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_founders_outlander_weapon_vr",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "1070"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Assault/SemiAuto_High/SID_Assault_SemiAuto_Founders_VR_Ore_T01.SID_Assault_SemiAuto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Shotgun/Auto_High/SID_Shotgun_Auto_Founders_VR_Ore_T01.SID_Shotgun_Auto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Sniper/Auto_High/SID_Sniper_Auto_Founders_VR_Ore_T01.SID_Sniper_Auto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Blunt/Tools/Hammer_Heavy_High/SID_Blunt_Hammer_Heavy_Founders_VR_Ore_T01.SID_Blunt_Hammer_Heavy_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Axe_Medium_High/SID_Edged_Axe_Medium_Founders_VR_Ore_T01.SID_Edged_Axe_Medium_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Sword_Heavy_High/SID_Edged_Sword_Heavy_Founders_VR_Ore_T01.SID_Edged_Sword_Heavy_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Sword_Light/SID_Edged_Sword_Light_Founders_VR_Ore_T01.SID_Edged_Sword_Light_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Sniper/Standard_High/SID_Sniper_Standard_Founders_VR_Ore_T01.SID_Sniper_Standard_Founders_VR_Ore_T01'"
                                                ],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/Events/Release/CardPack_Event_Founders.CardPack_Event_Founders'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Founder's Outlander Weapon",
                                        "shortDescription": "",
                                        "description": "An Epic Machine Pistol, with unique properties!",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_founders_outlander_weapon_vr",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "49492CC272D349D5AD853F8E71485E63",
                                        "devName": "Always.GenericToken.26",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_generic_worker_sr",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "30"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze_Personnel.CardPack_Bronze_Personnel'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Legendary Survivor",
                                        "shortDescription": "",
                                        "description": "One random survivor.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_worker_sr",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "81C6FECC2B9547A3BBBE2788DE5F0F50",
                                        "devName": "Always.GenericToken.33",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_founders_ninja_weapon_vr",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "1070"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Assault/SemiAuto_High/SID_Assault_SemiAuto_Founders_VR_Ore_T01.SID_Assault_SemiAuto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Shotgun/Auto_High/SID_Shotgun_Auto_Founders_VR_Ore_T01.SID_Shotgun_Auto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Sniper/Auto_High/SID_Sniper_Auto_Founders_VR_Ore_T01.SID_Sniper_Auto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Blunt/Tools/Hammer_Heavy_High/SID_Blunt_Hammer_Heavy_Founders_VR_Ore_T01.SID_Blunt_Hammer_Heavy_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Axe_Medium_High/SID_Edged_Axe_Medium_Founders_VR_Ore_T01.SID_Edged_Axe_Medium_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Sword_Heavy_High/SID_Edged_Sword_Heavy_Founders_VR_Ore_T01.SID_Edged_Sword_Heavy_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Sword_Light/SID_Edged_Sword_Light_Founders_VR_Ore_T01.SID_Edged_Sword_Light_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Sniper/Standard_High/SID_Sniper_Standard_Founders_VR_Ore_T01.SID_Sniper_Standard_Founders_VR_Ore_T01'"
                                                ],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/Events/Release/CardPack_Event_Founders.CardPack_Event_Founders'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Founder's Ninja Weapon",
                                        "shortDescription": "",
                                        "description": "An Epic Sword, with unique properties!",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_founders_ninja_weapon_vr",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "EAC0A204E09C4387A65328A5CF50B58B",
                                        "devName": "Always.GenericToken.02",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_generic_defender_sr",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "30"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze_Personnel.CardPack_Bronze_Personnel'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Legendary Defender",
                                        "shortDescription": "",
                                        "description": "One random defender.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_defender_sr",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "BFA387909C434031A30244336C250B03",
                                        "devName": "Always.GenericToken.39",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_founders_soldier_weapon_vr",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "1070"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Assault/SemiAuto_High/SID_Assault_SemiAuto_Founders_VR_Ore_T01.SID_Assault_SemiAuto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Shotgun/Auto_High/SID_Shotgun_Auto_Founders_VR_Ore_T01.SID_Shotgun_Auto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Sniper/Auto_High/SID_Sniper_Auto_Founders_VR_Ore_T01.SID_Sniper_Auto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Blunt/Tools/Hammer_Heavy_High/SID_Blunt_Hammer_Heavy_Founders_VR_Ore_T01.SID_Blunt_Hammer_Heavy_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Axe_Medium_High/SID_Edged_Axe_Medium_Founders_VR_Ore_T01.SID_Edged_Axe_Medium_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Sword_Heavy_High/SID_Edged_Sword_Heavy_Founders_VR_Ore_T01.SID_Edged_Sword_Heavy_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Sword_Light/SID_Edged_Sword_Light_Founders_VR_Ore_T01.SID_Edged_Sword_Light_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Sniper/Standard_High/SID_Sniper_Standard_Founders_VR_Ore_T01.SID_Sniper_Standard_Founders_VR_Ore_T01'"
                                                ],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/Events/Release/CardPack_Event_Founders.CardPack_Event_Founders'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Founder's Soldier Weapon",
                                        "shortDescription": "",
                                        "description": "An Epic Assault Rifle, with unique properties!",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_founders_soldier_weapon_vr",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "83D720DE6CA1414BB659E3BD31BD7C02",
                                        "devName": "Always.GenericToken.20",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_generic_trap_sr",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "30"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze_Traps.CardPack_Bronze_Traps'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Legendary Trap",
                                        "shortDescription": "",
                                        "description": "One random trap schematic.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_trap_sr",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "E3EF3F84EC714C61B8184E8BBC0CEEA1",
                                        "devName": "Always.GenericToken.35",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_founders_outlander_weapon_sr",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "1080"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Assault/SemiAuto_High/SID_Assault_SemiAuto_Founders_VR_Ore_T01.SID_Assault_SemiAuto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Shotgun/Auto_High/SID_Shotgun_Auto_Founders_VR_Ore_T01.SID_Shotgun_Auto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Sniper/Auto_High/SID_Sniper_Auto_Founders_VR_Ore_T01.SID_Sniper_Auto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Blunt/Tools/Hammer_Heavy_High/SID_Blunt_Hammer_Heavy_Founders_VR_Ore_T01.SID_Blunt_Hammer_Heavy_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Axe_Medium_High/SID_Edged_Axe_Medium_Founders_VR_Ore_T01.SID_Edged_Axe_Medium_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Sword_Heavy_High/SID_Edged_Sword_Heavy_Founders_VR_Ore_T01.SID_Edged_Sword_Heavy_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Sword_Light/SID_Edged_Sword_Light_Founders_VR_Ore_T01.SID_Edged_Sword_Light_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Sniper/Standard_High/SID_Sniper_Standard_Founders_VR_Ore_T01.SID_Sniper_Standard_Founders_VR_Ore_T01'"
                                                ],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/Events/Release/CardPack_Event_Founders.CardPack_Event_Founders'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Founder's Outlander Weapon",
                                        "shortDescription": "",
                                        "description": "An Epic Machine Pistol, with unique properties!",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_founders_outlander_weapon_sr",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "30E6BCE674E84D29BBAA403B974E8624",
                                        "devName": "Always.GenericToken.05",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_generic_hero_sr",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "30"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze_Personnel.CardPack_Bronze_Personnel'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Legendary Hero",
                                        "shortDescription": "",
                                        "description": "One random hero.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_hero_sr",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "599DAB5694C64C209271CF1EFFD3107A",
                                        "devName": "Always.GenericToken.01",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_generic_defender_r",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "10"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze_Personnel.CardPack_Bronze_Personnel'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Rare Defender",
                                        "shortDescription": "",
                                        "description": "One random defender.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_defender_r",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "4632609272CB4FA797F4C1EAF10B0D0A",
                                        "devName": "Always.GenericToken.19",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_generic_trap_r",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "10"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze_Traps.CardPack_Bronze_Traps'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Rare Trap",
                                        "shortDescription": "",
                                        "description": "One random trap schematic.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_trap_r",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "315CEA822F60428DB4B75367D39B3EF9",
                                        "devName": "Always.GenericToken.25",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_generic_worker_r",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "10"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze_Personnel.CardPack_Bronze_Personnel'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Rare Survivor",
                                        "shortDescription": "",
                                        "description": "One random survivor.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_worker_r",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "03AE8D365EBB4416AAAF6A43827D30AC",
                                        "devName": "Always.GenericToken.18",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_generic_schematic_vr",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "20"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze.CardPack_Bronze'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Epic Schematic",
                                        "shortDescription": "",
                                        "description": "One random weapon schematic.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_schematic_vr",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "FBD03BB391274448AE21EB6797964E6D",
                                        "devName": "Always.GenericToken.34",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_founders_outlander_bundle",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "1099"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Assault/SemiAuto_High/SID_Assault_SemiAuto_Founders_VR_Ore_T01.SID_Assault_SemiAuto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Shotgun/Auto_High/SID_Shotgun_Auto_Founders_VR_Ore_T01.SID_Shotgun_Auto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Sniper/Auto_High/SID_Sniper_Auto_Founders_VR_Ore_T01.SID_Sniper_Auto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Blunt/Tools/Hammer_Heavy_High/SID_Blunt_Hammer_Heavy_Founders_VR_Ore_T01.SID_Blunt_Hammer_Heavy_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Axe_Medium_High/SID_Edged_Axe_Medium_Founders_VR_Ore_T01.SID_Edged_Axe_Medium_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Sword_Heavy_High/SID_Edged_Sword_Heavy_Founders_VR_Ore_T01.SID_Edged_Sword_Heavy_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Sword_Light/SID_Edged_Sword_Light_Founders_VR_Ore_T01.SID_Edged_Sword_Light_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Sniper/Standard_High/SID_Sniper_Standard_Founders_VR_Ore_T01.SID_Sniper_Standard_Founders_VR_Ore_T01'"
                                                ],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/Events/Release/CardPack_Event_Founders.CardPack_Event_Founders'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Founder's Outlander Bundle",
                                        "shortDescription": "",
                                        "description": "Two Legendary Outlander Heroes and one rare Weapon.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_founders_outlander_bundle",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "FDE7BAF76B8B4EA8847AF7B5B3A42E8C",
                                        "devName": "Always.GenericToken.31",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_founders_constructor_weapon_vr",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "1070"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Assault/SemiAuto_High/SID_Assault_SemiAuto_Founders_VR_Ore_T01.SID_Assault_SemiAuto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Shotgun/Auto_High/SID_Shotgun_Auto_Founders_VR_Ore_T01.SID_Shotgun_Auto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Sniper/Auto_High/SID_Sniper_Auto_Founders_VR_Ore_T01.SID_Sniper_Auto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Blunt/Tools/Hammer_Heavy_High/SID_Blunt_Hammer_Heavy_Founders_VR_Ore_T01.SID_Blunt_Hammer_Heavy_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Axe_Medium_High/SID_Edged_Axe_Medium_Founders_VR_Ore_T01.SID_Edged_Axe_Medium_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Sword_Heavy_High/SID_Edged_Sword_Heavy_Founders_VR_Ore_T01.SID_Edged_Sword_Heavy_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Sword_Light/SID_Edged_Sword_Light_Founders_VR_Ore_T01.SID_Edged_Sword_Light_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Sniper/Standard_High/SID_Sniper_Standard_Founders_VR_Ore_T01.SID_Sniper_Standard_Founders_VR_Ore_T01'"
                                                ],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/Events/Release/CardPack_Event_Founders.CardPack_Event_Founders'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Founder's Constructor Weapon",
                                        "shortDescription": "",
                                        "description": "An Epic Shotgun, with unique properties!",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_founders_constructor_weapon_vr",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "924B6E3726B24C1B95A7DA89D1CD4FEE",
                                        "devName": "Always.GenericToken.09",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_generic_manager_vr",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "20"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze_Personnel.CardPack_Bronze_Personnel'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Epic Lead Survivor",
                                        "shortDescription": "",
                                        "description": "One random lead survivor.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_manager_vr",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "6E18529E191E45C0885B549FACA1B133",
                                        "devName": "Always.GenericToken.28",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_founders_ninja_bundle",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "1099"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Assault/SemiAuto_High/SID_Assault_SemiAuto_Founders_VR_Ore_T01.SID_Assault_SemiAuto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Shotgun/Auto_High/SID_Shotgun_Auto_Founders_VR_Ore_T01.SID_Shotgun_Auto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Sniper/Auto_High/SID_Sniper_Auto_Founders_VR_Ore_T01.SID_Sniper_Auto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Blunt/Tools/Hammer_Heavy_High/SID_Blunt_Hammer_Heavy_Founders_VR_Ore_T01.SID_Blunt_Hammer_Heavy_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Axe_Medium_High/SID_Edged_Axe_Medium_Founders_VR_Ore_T01.SID_Edged_Axe_Medium_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Sword_Heavy_High/SID_Edged_Sword_Heavy_Founders_VR_Ore_T01.SID_Edged_Sword_Heavy_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Sword_Light/SID_Edged_Sword_Light_Founders_VR_Ore_T01.SID_Edged_Sword_Light_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Sniper/Standard_High/SID_Sniper_Standard_Founders_VR_Ore_T01.SID_Sniper_Standard_Founders_VR_Ore_T01'"
                                                ],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/Events/Release/CardPack_Event_Founders.CardPack_Event_Founders'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Founders Ninja Bundle",
                                        "shortDescription": "",
                                        "description": "Two Legendary Ninja Heroes and one upgradeable weapon!",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_founders_ninja_bundle",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "B9B0CE758A5049F898773C1A47A69ED4",
                                        "devName": "Always.UpgradePack.03",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "MtxCurrency",
                                                "currencySubType": "",
                                                "regularPrice": 50,
                                                "finalPrice": 0,
                                                "saleType": "Strikethrough",
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 0
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": 1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [
                                            {
                                                "requirementType": "DenyOnFulfillment",
                                                "requiredId": "63BE689248CAF1251C84B4B3574F90EF",
                                                "minQuantity": 1
                                            }
                                        ],
                                        "metaInfo": [],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Assault/Raygun/SID_Assault_Raygun_VR_Ore_T01.SID_Assault_Raygun_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Blunt/Tools/Hammer_Heavy/SID_Blunt_Hammer_Heavy_R_Ore_T01.SID_Blunt_Hammer_Heavy_R_Ore_T01'",
                                                    "FortWorkerType'/Game/Items/Workers/Managers/ManagerDoctor_R_T01.ManagerDoctor_R_T01'"
                                                ],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze.CardPack_Bronze'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Upgrade Llama",
                                        "shortDescription": "",
                                        "description": "The old faithful llama, packed with a variety of goodies and upgrade materials. Contains at least 4 items, including a rare item or a hero! Has a high chance to upgrade.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_bronze",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "2F0AA2835643407789712F5DFFA96E85",
                                        "devName": "Always.GenericToken.14",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_generic_ranged_sr",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "30"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze_Ranged.CardPack_Bronze_Ranged'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Legendary Ranged Weapon",
                                        "shortDescription": "",
                                        "description": "One random ranged weapon schematic.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_ranged_sr",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "D5A4D4197D414836AED3AFFCBE912852",
                                        "devName": "Always.GenericToken.12",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_generic_melee_vr",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "20"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze_Melee.CardPack_Bronze_Melee'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Epic Melee Weapon",
                                        "shortDescription": "",
                                        "description": "One random melee weapon schematic.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_melee_vr",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "4D64CBE3618D41FBB5CAD0E472F4610A",
                                        "devName": "Always.UpgradePack.01",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "MtxCurrency",
                                                "currencySubType": "",
                                                "regularPrice": 50,
                                                "finalPrice": 50,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 50
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": 50,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [
                                            {
                                                "requirementType": "RequireFulfillment",
                                                "requiredId": "63BE689248CAF1251C84B4B3574F90EF",
                                                "minQuantity": 1
                                            }
                                        ],
                                        "metaInfo": [
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "1"
                                            },
                                            {
                                                "key": "bUseUpgradeDisplay",
                                                "value": "True"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Assault/Raygun/SID_Assault_Raygun_VR_Ore_T01.SID_Assault_Raygun_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Blunt/Tools/Hammer_Heavy/SID_Blunt_Hammer_Heavy_R_Ore_T01.SID_Blunt_Hammer_Heavy_R_Ore_T01'",
                                                    "FortWorkerType'/Game/Items/Workers/Managers/ManagerDoctor_R_T01.ManagerDoctor_R_T01'"
                                                ],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze.CardPack_Bronze'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Upgrade Llama",
                                        "shortDescription": "",
                                        "description": "The old faithful llama, packed with a variety of goodies and upgrade materials. Contains at least 4 items, including a rare item or a hero! Has a high chance to upgrade.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_bronze",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "5366E22A41C8428682737CF99513DC5F",
                                        "devName": "Always.JackpotVoucher.01",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_cardpack_jackpot",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "100"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Sniper/TripleShot/SID_Sniper_TripleShot_VR_Ore_T01.SID_Sniper_TripleShot_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Piercing/Spear_High/SID_Piercing_Spear_SR_Ore_T01.SID_Piercing_Spear_SR_Ore_T01'",
                                                    "FortHeroType'/Game/Heroes/Outlander/ItemDefinition/HID_Outlander_ZonePistol_R_T01.HID_Outlander_ZonePistol_R_T01'"
                                                ],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Jackpot.CardPack_Jackpot'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Legendary Troll Stash Llama",
                                        "shortDescription": "",
                                        "description": "An entire suite of goodies, direct from your local troll's stash! Contains at least 8 definitely-not-stolen items.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_jackpot",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "72757393A8EA423D84E69BC835B26AEC",
                                        "devName": "Always.GenericToken.40",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_founders_starterweapons_bundle",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "1095"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Assault/SemiAuto_High/SID_Assault_SemiAuto_Founders_VR_Ore_T01.SID_Assault_SemiAuto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Shotgun/Auto_High/SID_Shotgun_Auto_Founders_VR_Ore_T01.SID_Shotgun_Auto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Sniper/Auto_High/SID_Sniper_Auto_Founders_VR_Ore_T01.SID_Sniper_Auto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Blunt/Tools/Hammer_Heavy_High/SID_Blunt_Hammer_Heavy_Founders_VR_Ore_T01.SID_Blunt_Hammer_Heavy_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Axe_Medium_High/SID_Edged_Axe_Medium_Founders_VR_Ore_T01.SID_Edged_Axe_Medium_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Sword_Heavy_High/SID_Edged_Sword_Heavy_Founders_VR_Ore_T01.SID_Edged_Sword_Heavy_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Sword_Light/SID_Edged_Sword_Light_Founders_VR_Ore_T01.SID_Edged_Sword_Light_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Sniper/Standard_High/SID_Sniper_Standard_Founders_VR_Ore_T01.SID_Sniper_Standard_Founders_VR_Ore_T01'"
                                                ],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/Events/Release/CardPack_Event_Founders.CardPack_Event_Founders'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Founder's StarterWeapons Bundle",
                                        "shortDescription": "",
                                        "description": "Assault Weapon: Fully Automatic. Flexible assault rifle capable of handling all types of combat scenarios. High rate of fire with solid accuracy when aiming down sights and firing in controlled bursts.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_founders_starterweapons_bundle",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "60E0D2DD6937410D8B86D629D3D8D8F7",
                                        "devName": "Always.GenericToken.11",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_generic_melee_sr",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "30"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze_Melee.CardPack_Bronze_Melee'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Legendary Melee Weapon",
                                        "shortDescription": "",
                                        "description": "One random melee weapon schematic.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_melee_sr",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "36ECDB53F12E4639A0471ABE49593F0E",
                                        "devName": "Always.GenericToken.04",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_generic_hero_r",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "10"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze_Personnel.CardPack_Bronze_Personnel'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Rare Hero",
                                        "shortDescription": "",
                                        "description": "One random hero.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_hero_r",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "7D99ACBD974D45C4840C583C60A6EAE3",
                                        "devName": "Always.GenericToken.29",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_founders_constructor_bundle",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "1099"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Assault/SemiAuto_High/SID_Assault_SemiAuto_Founders_VR_Ore_T01.SID_Assault_SemiAuto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Shotgun/Auto_High/SID_Shotgun_Auto_Founders_VR_Ore_T01.SID_Shotgun_Auto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Sniper/Auto_High/SID_Sniper_Auto_Founders_VR_Ore_T01.SID_Sniper_Auto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Blunt/Tools/Hammer_Heavy_High/SID_Blunt_Hammer_Heavy_Founders_VR_Ore_T01.SID_Blunt_Hammer_Heavy_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Axe_Medium_High/SID_Edged_Axe_Medium_Founders_VR_Ore_T01.SID_Edged_Axe_Medium_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Sword_Heavy_High/SID_Edged_Sword_Heavy_Founders_VR_Ore_T01.SID_Edged_Sword_Heavy_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Sword_Light/SID_Edged_Sword_Light_Founders_VR_Ore_T01.SID_Edged_Sword_Light_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Sniper/Standard_High/SID_Sniper_Standard_Founders_VR_Ore_T01.SID_Sniper_Standard_Founders_VR_Ore_T01'"
                                                ],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/Events/Release/CardPack_Event_Founders.CardPack_Event_Founders'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Founder's Constructor Bundle",
                                        "shortDescription": "",
                                        "description": "Two Legendary Constructor Heroes and one upgradeable weapon!",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_founders_constructor_bundle",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "D2E08EFA731D437B85B7340EB51A5E1D",
                                        "devName": "Always.UpgradePack.02",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_cardpack_bronze",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [
                                            {
                                                "requirementType": "RequireFulfillment",
                                                "requiredId": "63BE689248CAF1251C84B4B3574F90EF",
                                                "minQuantity": 1
                                            }
                                        ],
                                        "metaInfo": [
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "2"
                                            },
                                            {
                                                "key": "bUseUpgradeDisplay",
                                                "value": "True"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Assault/Raygun/SID_Assault_Raygun_VR_Ore_T01.SID_Assault_Raygun_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Blunt/Tools/Hammer_Heavy/SID_Blunt_Hammer_Heavy_R_Ore_T01.SID_Blunt_Hammer_Heavy_R_Ore_T01'",
                                                    "FortWorkerType'/Game/Items/Workers/Managers/ManagerDoctor_R_T01.ManagerDoctor_R_T01'"
                                                ],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze.CardPack_Bronze'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Upgrade Llama",
                                        "shortDescription": "",
                                        "description": "The old faithful llama, packed with a variety of goodies and upgrade materials. Contains at least 4 items, including a rare item or a hero! Has a high chance to upgrade.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_bronze",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "1F6B613D4B7BAD47D8A93CAEED2C4996",
                                        "devName": "Mini Llama Manual Tutorial - high SharedDisplayPriority",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_basicpack",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": 1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [
                                            {
                                                "requirementType": "DenyOnFulfillment",
                                                "requiredId": "82ADCC874CFC2D47927208BAE871CF2B",
                                                "minQuantity": 1
                                            }
                                        ],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "true"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "999999"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [
                                                    "FortWorkerType'/Game/Items/Workers/WorkerBasic_UC_T02.WorkerBasic_UC_T02'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Blunt/Tools/Hammer_Heavy/SID_Blunt_Hammer_Heavy_UC_Ore_T02.SID_Blunt_Hammer_Heavy_UC_Ore_T02'",
                                                    "FortWorkerType'/Game/Items/Workers/Managers/ManagerDoctor_UC_T01.ManagerDoctor_UC_T01'"
                                                ],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Basic.CardPack_Basic'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Mini Reward Llama",
                                        "shortDescription": "",
                                        "description": "A simple llama stuffed with basic goods to get you through your first apocalypse. Contains 3 items.\r\n",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_basic",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "EB6229C230274179912EC61314FFC06F",
                                        "devName": "Always.GenericToken.24",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_generic_weapon_vr",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "20"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze.CardPack_Bronze'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Epic Weapon",
                                        "shortDescription": "",
                                        "description": "One random weapon schematic.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_weapon_vr",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "64314E1350724DCAAD6EC72B518D6F15",
                                        "devName": "Always.GenericToken.08",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_generic_manager_sr",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "30"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze_Personnel.CardPack_Bronze_Personnel'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Legendary Lead Survivor",
                                        "shortDescription": "",
                                        "description": "One random lead survivor.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_manager_sr",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "F84EF576C24849509AA768561FB4FE85",
                                        "devName": "Always.GenericToken.30",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_founders_constructor_weapon_sr",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "1080"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Assault/SemiAuto_High/SID_Assault_SemiAuto_Founders_VR_Ore_T01.SID_Assault_SemiAuto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Shotgun/Auto_High/SID_Shotgun_Auto_Founders_VR_Ore_T01.SID_Shotgun_Auto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Sniper/Auto_High/SID_Sniper_Auto_Founders_VR_Ore_T01.SID_Sniper_Auto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Blunt/Tools/Hammer_Heavy_High/SID_Blunt_Hammer_Heavy_Founders_VR_Ore_T01.SID_Blunt_Hammer_Heavy_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Axe_Medium_High/SID_Edged_Axe_Medium_Founders_VR_Ore_T01.SID_Edged_Axe_Medium_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Sword_Heavy_High/SID_Edged_Sword_Heavy_Founders_VR_Ore_T01.SID_Edged_Sword_Heavy_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Sword_Light/SID_Edged_Sword_Light_Founders_VR_Ore_T01.SID_Edged_Sword_Light_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Sniper/Standard_High/SID_Sniper_Standard_Founders_VR_Ore_T01.SID_Sniper_Standard_Founders_VR_Ore_T01'"
                                                ],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/Events/Release/CardPack_Event_Founders.CardPack_Event_Founders'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Founder's Constructor Weapon ",
                                        "shortDescription": "",
                                        "description": "An Epic Shotgun, with unique properties!",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_founders_constructor_weapon_sr",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "E4D9DCE632C54D1591E88A40A17380AD",
                                        "devName": "Always.GenericToken.06",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_generic_hero_vr",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "20"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze_Personnel.CardPack_Bronze_Personnel'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Epic Hero",
                                        "shortDescription": "",
                                        "description": "One random hero.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_hero_vr",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "69691FBFFBFD47C4B8F4135FEF5EF07F",
                                        "devName": "Always.GenericToken.22",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_generic_weapon_r",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "10"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze.CardPack_Bronze'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Rare Weapon",
                                        "shortDescription": "",
                                        "description": "One random weapon schematic.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_weapon_r",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "9A184F679EA74705894AFFFB01A722E1",
                                        "devName": "Always.GenericToken.07",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_generic_manager_r",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "10"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze_Personnel.CardPack_Bronze_Personnel'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Rare Lead Survivor",
                                        "shortDescription": "",
                                        "description": "One random lead survivor.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_manager_r",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "5F4DC6949B704D6098A39032FAAC2556",
                                        "devName": "Always.GenericToken.32",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_founders_ninja_weapon_sr",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "1080"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Assault/SemiAuto_High/SID_Assault_SemiAuto_Founders_VR_Ore_T01.SID_Assault_SemiAuto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Shotgun/Auto_High/SID_Shotgun_Auto_Founders_VR_Ore_T01.SID_Shotgun_Auto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Sniper/Auto_High/SID_Sniper_Auto_Founders_VR_Ore_T01.SID_Sniper_Auto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Blunt/Tools/Hammer_Heavy_High/SID_Blunt_Hammer_Heavy_Founders_VR_Ore_T01.SID_Blunt_Hammer_Heavy_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Axe_Medium_High/SID_Edged_Axe_Medium_Founders_VR_Ore_T01.SID_Edged_Axe_Medium_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Sword_Heavy_High/SID_Edged_Sword_Heavy_Founders_VR_Ore_T01.SID_Edged_Sword_Heavy_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Sword_Light/SID_Edged_Sword_Light_Founders_VR_Ore_T01.SID_Edged_Sword_Light_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Sniper/Standard_High/SID_Sniper_Standard_Founders_VR_Ore_T01.SID_Sniper_Standard_Founders_VR_Ore_T01'"
                                                ],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/Events/Release/CardPack_Event_Founders.CardPack_Event_Founders'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Founder's Ninja Weapon",
                                        "shortDescription": "",
                                        "description": "An Epic Sword, with unique properties!",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_founders_ninja_weapon_sr",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "01E128D29CD3487688E3048F3A9D134C",
                                        "devName": "Always.GenericToken.03",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_generic_defender_vr",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "20"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze_Personnel.CardPack_Bronze_Personnel'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Epic Defender",
                                        "shortDescription": "",
                                        "description": "One random defender.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_defender_vr",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "6460814C047B42D0B3488DDAE172AAAC",
                                        "devName": "Always.GenericToken.38",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_founders_soldier_weapon_sr",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "1080"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Assault/SemiAuto_High/SID_Assault_SemiAuto_Founders_VR_Ore_T01.SID_Assault_SemiAuto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Shotgun/Auto_High/SID_Shotgun_Auto_Founders_VR_Ore_T01.SID_Shotgun_Auto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Sniper/Auto_High/SID_Sniper_Auto_Founders_VR_Ore_T01.SID_Sniper_Auto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Blunt/Tools/Hammer_Heavy_High/SID_Blunt_Hammer_Heavy_Founders_VR_Ore_T01.SID_Blunt_Hammer_Heavy_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Axe_Medium_High/SID_Edged_Axe_Medium_Founders_VR_Ore_T01.SID_Edged_Axe_Medium_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Sword_Heavy_High/SID_Edged_Sword_Heavy_Founders_VR_Ore_T01.SID_Edged_Sword_Heavy_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Sword_Light/SID_Edged_Sword_Light_Founders_VR_Ore_T01.SID_Edged_Sword_Light_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Sniper/Standard_High/SID_Sniper_Standard_Founders_VR_Ore_T01.SID_Sniper_Standard_Founders_VR_Ore_T01'"
                                                ],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/Events/Release/CardPack_Event_Founders.CardPack_Event_Founders'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Founder's Soldier Weapon",
                                        "shortDescription": "",
                                        "description": "An Epic Assault Rifle, with unique properties!",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_founders_soldier_weapon_sr",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "6F5A32C016B84DEF9C5EAB872C37A130",
                                        "devName": "Always.GenericToken.17",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_generic_schematic_sr",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "30"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze.CardPack_Bronze'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Legendary Schematic",
                                        "shortDescription": "",
                                        "description": "One random weapon schematic.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_schematic_sr",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "3FCD286A3A6F42C299994630D09495C3",
                                        "devName": "Always.GenericToken.13",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_generic_ranged_r",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "10"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze_Ranged.CardPack_Bronze_Ranged'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Rare Ranged Weapon",
                                        "shortDescription": "",
                                        "description": "One random ranged weapon schematic.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_ranged_r",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "73216346454B1B2892DDA381C75E1BCB",
                                        "devName": "Mini Llama Manual Default - Low SharedDisplayPriority",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_basicpack",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [
                                            {
                                                "requirementType": "RequireFulfillment",
                                                "requiredId": "82ADCC874CFC2D47927208BAE871CF2B",
                                                "minQuantity": 1
                                            }
                                        ],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "true"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "1"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [
                                                    "FortWorkerType'/Game/Items/Workers/WorkerBasic_UC_T02.WorkerBasic_UC_T02'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Blunt/Tools/Hammer_Heavy/SID_Blunt_Hammer_Heavy_UC_Ore_T02.SID_Blunt_Hammer_Heavy_UC_Ore_T02'",
                                                    "FortWorkerType'/Game/Items/Workers/Managers/ManagerDoctor_UC_T01.ManagerDoctor_UC_T01'"
                                                ],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Basic.CardPack_Basic'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Mini Reward Llama",
                                        "shortDescription": "",
                                        "description": "A simple llama stuffed with basic goods to get you through your first apocalypse. Contains 3 items.\r\n",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_basic",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "DBA2B01B231942D58B9D0321CAE379A7",
                                        "devName": "Always.GenericToken.23",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_generic_weapon_sr",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "30"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze.CardPack_Bronze'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Legendary Weapon",
                                        "shortDescription": "",
                                        "description": "One random weapon schematic.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_weapon_sr",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "540CBF4FD18B4445BD66E945465F9A2B",
                                        "devName": "Always.GenericToken.27",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_generic_worker_vr",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "20"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze_Personnel.CardPack_Bronze_Personnel'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Epic Survivor",
                                        "shortDescription": "",
                                        "description": "One random survivor.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_worker_vr",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "77AFDC326BC94128BDFE9B7A952646D8",
                                        "devName": "Always.GenericToken.10",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_generic_melee_r",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "10"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/CardPack_Bronze_Melee.CardPack_Bronze_Melee'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Rare Melee Weapon",
                                        "shortDescription": "",
                                        "description": "One random melee weapon schematic.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_melee_r",
                                                "quantity": 1
                                            }
                                        ]
                                    },
                                    {
                                        "offerId": "A9A7E652079446DF9EFA50B631618786",
                                        "devName": "Always.GenericToken.37",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:voucher_founders_soldier_bundle",
                                                "regularPrice": 1,
                                                "finalPrice": 1,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            ""
                                        ],
                                        "requirements": [],
                                        "metaInfo": [
                                            {
                                                "key": "bUseSharedDisplay",
                                                "value": "True"
                                            },
                                            {
                                                "key": "SharedDisplayPriority",
                                                "value": "1099"
                                            }
                                        ],
                                        "metaAssetInfo": {
                                            "structName": "FortCatalogMeta",
                                            "payload": {
                                                "chaseItems": [
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Assault/SemiAuto_High/SID_Assault_SemiAuto_Founders_VR_Ore_T01.SID_Assault_SemiAuto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Shotgun/Auto_High/SID_Shotgun_Auto_Founders_VR_Ore_T01.SID_Shotgun_Auto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Sniper/Auto_High/SID_Sniper_Auto_Founders_VR_Ore_T01.SID_Sniper_Auto_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Blunt/Tools/Hammer_Heavy_High/SID_Blunt_Hammer_Heavy_Founders_VR_Ore_T01.SID_Blunt_Hammer_Heavy_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Axe_Medium_High/SID_Edged_Axe_Medium_Founders_VR_Ore_T01.SID_Edged_Axe_Medium_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Sword_Heavy_High/SID_Edged_Sword_Heavy_Founders_VR_Ore_T01.SID_Edged_Sword_Heavy_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Melee/Edged/Sword_Light/SID_Edged_Sword_Light_Founders_VR_Ore_T01.SID_Edged_Sword_Light_Founders_VR_Ore_T01'",
                                                    "FortSchematicItemDefinition'/Game/Items/Schematics/Ranged/Sniper/Standard_High/SID_Sniper_Standard_Founders_VR_Ore_T01.SID_Sniper_Standard_Founders_VR_Ore_T01'"
                                                ],
                                                "packDefinition": "FortCardPackItemDefinition'/Game/Items/CardPacks/Events/Release/CardPack_Event_Founders.CardPack_Event_Founders'"
                                            }
                                        },
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 0,
                                        "title": "Founder's Soldier Bundle",
                                        "shortDescription": "",
                                        "description": "Two Legendary Soldier Heroes and one rare Weapon.",
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_founders_soldier_bundle",
                                                "quantity": 1
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "name": "PCFounderXboxAccess",
                                "catalogEntries": [
                                    {
                                        "offerId": "67DF5A54446BFFBFA3E04EA200080CCB",
                                        "devName": "FoundersPack_XboxAccessPCCrossplay",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "RealMoney",
                                                "currencySubType": "",
                                                "regularPrice": 0,
                                                "finalPrice": 0,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 0
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "b0e02cfe-8d1e-4aa0-a02b-e64fa7263617",
                                            ""
                                        ],
                                        "requirements": [
                                            {
                                                "requirementType": "RequireItemOwnership",
                                                "requiredId": "Token:campaignaccess",
                                                "minQuantity": 1
                                            }
                                        ],
                                        "metaInfo": [],
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 5,
                                        "title": "Standard Founder's Pack",
                                        "shortDescription": "",
                                        "description": "Purchase the Standard Founder's Pack",
                                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_1.DA_FoundersPack_1",
                                        "itemGrants": []
                                    }
                                ]
                            },
                            {
                                "name": "STWSpecialEventStorefront",
                                "catalogEntries": [
                                    {
                                        "devName": "[VIRTUAL]1 x did_defendermelee_basic_sr_t01 for 1680 GameItem : AccountResource:eventcurrency_scaling",
                                        "offerId": "virtual:/2uu1n2kf9ejcrpeskhd4ja1gu6[0]0/0#5",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:eventcurrency_scaling",
                                                "regularPrice": 1680,
                                                "finalPrice": 1680,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1680
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [],
                                        "offerType": "StaticPrice",
                                        "refundable": false,
                                        "metaInfo": [
                                            {
                                                "key": "PurchaseLimitingEventId",
                                                "value": "2uu1n2kf9ejcrpeskhd4ja1gu6[0]0/0"
                                            },
                                            {
                                                "key": "EventLimit",
                                                "value": "1"
                                            }
                                        ],
                                        "itemGrants": [
                                            {
                                                "templateId": "Defender:did_defendermelee_basic_sr_t01",
                                                "quantity": 1,
                                                "attributes": {
                                                    "Alteration": {
                                                        "LootTierGroup": "AlterationTG.Defender.Melee.SR",
                                                        "Tier": 0
                                                    }
                                                }
                                            }
                                        ],
                                        "sortPriority": 11,
                                        "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": "[VIRTUAL]1 x workerbasic_sr_t01 for 700 GameItem : AccountResource:eventcurrency_scaling",
                                        "offerId": "virtual:/2uu1n2kf9ejcrpeskhd4ja1gu6[0]0/0#4",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:eventcurrency_scaling",
                                                "regularPrice": 700,
                                                "finalPrice": 700,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 700
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [],
                                        "offerType": "StaticPrice",
                                        "refundable": false,
                                        "metaInfo": [
                                            {
                                                "key": "PurchaseLimitingEventId",
                                                "value": "2uu1n2kf9ejcrpeskhd4ja1gu6[0]0/0"
                                            },
                                            {
                                                "key": "EventLimit",
                                                "value": "1"
                                            }
                                        ],
                                        "itemGrants": [
                                            {
                                                "templateId": "Worker:workerbasic_sr_t01",
                                                "quantity": 1
                                            }
                                        ],
                                        "sortPriority": 12,
                                        "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": "[VIRTUAL]1 x Copper Jackal for 1680 GameItem : AccountResource:eventcurrency_scaling",
                                        "offerId": "virtual:/2uu1n2kf9ejcrpeskhd4ja1gu6[0]0/0#1",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:eventcurrency_scaling",
                                                "regularPrice": 1680,
                                                "finalPrice": 1680,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1680
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [],
                                        "offerType": "StaticPrice",
                                        "refundable": false,
                                        "metaInfo": [
                                            {
                                                "key": "PurchaseLimitingEventId",
                                                "value": "2uu1n2kf9ejcrpeskhd4ja1gu6[0]0/0"
                                            },
                                            {
                                                "key": "EventLimit",
                                                "value": "2"
                                            }
                                        ],
                                        "itemGrants": [
                                            {
                                                "templateId": "Schematic:sid_pistol_semiauto_sr_ore_t01",
                                                "quantity": 1,
                                                "attributes": {
                                                    "Alteration": {
                                                        "LootTierGroup": "AlterationTG.Ranged.SR",
                                                        "Tier": 0
                                                    }
                                                }
                                            }
                                        ],
                                        "sortPriority": 15,
                                        "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": "[VIRTUAL]1 x Copper Ranger    for 1680 GameItem : AccountResource:eventcurrency_scaling",
                                        "offerId": "virtual:/2uu1n2kf9ejcrpeskhd4ja1gu6[0]0/0#0",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:eventcurrency_scaling",
                                                "regularPrice": 1680,
                                                "finalPrice": 1680,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1680
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [],
                                        "offerType": "StaticPrice",
                                        "refundable": false,
                                        "metaInfo": [
                                            {
                                                "key": "PurchaseLimitingEventId",
                                                "value": "2uu1n2kf9ejcrpeskhd4ja1gu6[0]0/0"
                                            },
                                            {
                                                "key": "EventLimit",
                                                "value": "2"
                                            }
                                        ],
                                        "itemGrants": [
                                            {
                                                "templateId": "Schematic:sid_assault_doubleshot_sr_ore_t01",
                                                "quantity": 1,
                                                "attributes": {
                                                    "Alteration": {
                                                        "LootTierGroup": "AlterationTG.Ranged.SR",
                                                        "Tier": 0
                                                    }
                                                }
                                            }
                                        ],
                                        "sortPriority": 16,
                                        "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": "[VIRTUAL]1 x Wall Launcher for 1680 GameItem : AccountResource:eventcurrency_scaling",
                                        "offerId": "virtual:/2uu1n2kf9ejcrpeskhd4ja1gu6[0]0/0#3",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:eventcurrency_scaling",
                                                "regularPrice": 1680,
                                                "finalPrice": 1680,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1680
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [],
                                        "offerType": "StaticPrice",
                                        "refundable": false,
                                        "metaInfo": [
                                            {
                                                "key": "PurchaseLimitingEventId",
                                                "value": "2uu1n2kf9ejcrpeskhd4ja1gu6[0]0/0"
                                            },
                                            {
                                                "key": "EventLimit",
                                                "value": "1"
                                            }
                                        ],
                                        "itemGrants": [
                                            {
                                                "templateId": "Schematic:sid_wall_launcher_sr_t01",
                                                "quantity": 1,
                                                "attributes": {
                                                    "Alteration": {
                                                        "LootTierGroup": "AlterationTG.Trap.KnockbackImpact.SR",
                                                        "Tier": 0
                                                    }
                                                }
                                            }
                                        ],
                                        "sortPriority": 13,
                                        "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": "[VIRTUAL]1 x Copper Hydra    for 840 GameItem : AccountResource:eventcurrency_scaling",
                                        "offerId": "virtual:/24bi0o8dme800kh7vf0oufk9ce[0]0/0#0",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:eventcurrency_scaling",
                                                "regularPrice": 1680,
                                                "finalPrice": 840,
                                                "saleType": "Strikethrough",
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 840
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [],
                                        "offerType": "StaticPrice",
                                        "refundable": false,
                                        "metaInfo": [
                                            {
                                                "key": "PurchaseLimitingEventId",
                                                "value": "24bi0o8dme800kh7vf0oufk9ce[0]0/0"
                                            },
                                            {
                                                "key": "EventLimit",
                                                "value": "1"
                                            }
                                        ],
                                        "itemGrants": [
                                            {
                                                "templateId": "Schematic:sid_assault_hydra_sr_ore_t01",
                                                "quantity": 1
                                            }
                                        ],
                                        "sortPriority": 30,
                                        "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": "[VIRTUAL]1 x Swordmaster Ken for 4000 GameItem : AccountResource:eventcurrency_scaling",
                                        "offerId": "virtual:/2uu1n2kf9ejcrpeskhd4ja1gu6[0]0/0#2",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:eventcurrency_scaling",
                                                "regularPrice": 4000,
                                                "finalPrice": 4000,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 4000
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [],
                                        "offerType": "StaticPrice",
                                        "refundable": false,
                                        "metaInfo": [
                                            {
                                                "key": "PurchaseLimitingEventId",
                                                "value": "2uu1n2kf9ejcrpeskhd4ja1gu6[0]0/0"
                                            },
                                            {
                                                "key": "EventLimit",
                                                "value": "1"
                                            }
                                        ],
                                        "itemGrants": [
                                            {
                                                "templateId": "Hero:hid_ninja_swordmaster_sr_t01",
                                                "quantity": 1
                                            }
                                        ],
                                        "sortPriority": 14,
                                        "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": "[VIRTUAL]1 x Rare Schematic for 400 GameItem : AccountResource:eventcurrency_scaling",
                                        "offerId": "virtual:/2uu1n2kf9ejcrpeskhd4ja1gu6[1]0/0#1",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:eventcurrency_scaling",
                                                "regularPrice": 400,
                                                "finalPrice": 400,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 400
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [],
                                        "offerType": "StaticPrice",
                                        "refundable": false,
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_schematic_r",
                                                "quantity": 1
                                            }
                                        ],
                                        "sortPriority": 10,
                                        "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": "[VIRTUAL]1 x Armory Slot for 25 GameItem : AccountResource:eventcurrency_scaling",
                                        "offerId": "virtual:/2uu1n2kf9ejcrpeskhd4ja1gu6[1]0/0#0",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:eventcurrency_scaling",
                                                "regularPrice": 25,
                                                "finalPrice": 25,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 25
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [],
                                        "offerType": "StaticPrice",
                                        "refundable": false,
                                        "metaInfo": [
                                            {
                                                "key": "PurchaseLimitingEventId",
                                                "value": "2uu1n2kf9ejcrpeskhd4ja1gu6[1]0/0"
                                            },
                                            {
                                                "key": "EventLimit",
                                                "value": "100"
                                            }
                                        ],
                                        "itemGrants": [
                                            {
                                                "templateId": "Token:accountinventorybonus",
                                                "quantity": 1
                                            }
                                        ],
                                        "sortPriority": 19,
                                        "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": "[VIRTUAL]1 x Copper Walloper for 1680 GameItem : AccountResource:eventcurrency_scaling",
                                        "offerId": "virtual:/3nhmctsmp6o99p5f6hcplk1nro[0]0/0#0",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:eventcurrency_scaling",
                                                "regularPrice": 1680,
                                                "finalPrice": 1680,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1680
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [],
                                        "offerType": "StaticPrice",
                                        "refundable": false,
                                        "metaInfo": [
                                            {
                                                "key": "PurchaseLimitingEventId",
                                                "value": "3nhmctsmp6o99p5f6hcplk1nro[0]0/0"
                                            },
                                            {
                                                "key": "EventLimit",
                                                "value": "1"
                                            }
                                        ],
                                        "itemGrants": [
                                            {
                                                "templateId": "Schematic:sid_blunt_hammer_flintlock_sr_ore_t01",
                                                "quantity": 1
                                            }
                                        ],
                                        "sortPriority": 28,
                                        "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": "[VIRTUAL]1 x Urban Assault Sledgehammer for 2800 GameItem : AccountResource:eventcurrency_scaling",
                                        "offerId": "virtual:/6r90mi20pfk24hvctsfpna4s98[0]0/0#0",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:eventcurrency_scaling",
                                                "regularPrice": 2800,
                                                "finalPrice": 2800,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 2800
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [],
                                        "offerType": "StaticPrice",
                                        "refundable": false,
                                        "metaInfo": [
                                            {
                                                "key": "PurchaseLimitingEventId",
                                                "value": "6r90mi20pfk24hvctsfpna4s98[0]0/0"
                                            },
                                            {
                                                "key": "EventLimit",
                                                "value": "1"
                                            }
                                        ],
                                        "itemGrants": [
                                            {
                                                "templateId": "Hero:hid_commando_gunheadshot_m_v1_roadtrip_sr_t01",
                                                "quantity": 1
                                            }
                                        ],
                                        "sortPriority": 29,
                                        "catalogGroupPriority": 0
                                    }
                                ]
                            },
                            {
                                "name": "STWRotationalEventStorefront",
                                "catalogEntries": [
                                    {
                                        "devName": "[VIRTUAL]10 x Storm Shard for 200 GameItem : AccountResource:eventcurrency_scaling",
                                        "offerId": "virtual:/2cgr3ctjnm01rjcnqadvpfu6fs_R20180308T000000[1]21/3#10",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": 1,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:eventcurrency_scaling",
                                                "regularPrice": 200,
                                                "finalPrice": 200,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 200
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [],
                                        "offerType": "StaticPrice",
                                        "refundable": false,
                                        "itemGrants": [
                                            {
                                                "templateId": "AccountResource:reagent_c_t04",
                                                "quantity": 10
                                            }
                                        ],
                                        "sortPriority": 0,
                                        "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": "[VIRTUAL]1 x Epic Schematic for 1000 GameItem : AccountResource:eventcurrency_scaling",
                                        "offerId": "virtual:/2cgr3ctjnm01rjcnqadvpfu6fs_R20180308T000000[1]21/3#8",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:eventcurrency_scaling",
                                                "regularPrice": 1000,
                                                "finalPrice": 1000,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1000
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [],
                                        "offerType": "StaticPrice",
                                        "refundable": false,
                                        "itemGrants": [
                                            {
                                                "templateId": "CardPack:cardpack_schematic_vr",
                                                "quantity": 1
                                            }
                                        ],
                                        "sortPriority": 10,
                                        "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": "[VIRTUAL]1 x Armory Slot for 25 GameItem : AccountResource:eventcurrency_scaling",
                                        "offerId": "virtual:/2cgr3ctjnm01rjcnqadvpfu6fs_R20180308T000000[1]21/3#7",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": 10,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:eventcurrency_scaling",
                                                "regularPrice": 25,
                                                "finalPrice": 25,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 25
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [],
                                        "offerType": "StaticPrice",
                                        "refundable": false,
                                        "itemGrants": [
                                            {
                                                "templateId": "Token:accountinventorybonus",
                                                "quantity": 1
                                            }
                                        ],
                                        "sortPriority": 0,
                                        "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": "[VIRTUAL]5 x Legendary Flux for 75 GameItem : AccountResource:eventcurrency_scaling",
                                        "offerId": "virtual:/2cgr3ctjnm01rjcnqadvpfu6fs_R20180308T000000[1]21/3#0",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": 10,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:eventcurrency_scaling",
                                                "regularPrice": 75,
                                                "finalPrice": 75,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 75
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [],
                                        "offerType": "StaticPrice",
                                        "refundable": false,
                                        "itemGrants": [
                                            {
                                                "templateId": "AccountResource:reagent_evolverarity_sr",
                                                "quantity": 5
                                            }
                                        ],
                                        "sortPriority": 0,
                                        "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": "[VIRTUAL]1 x did_defenderpistol_basic_sr_t01 for 1680 GameItem : AccountResource:eventcurrency_scaling",
                                        "offerId": "virtual:/2cgr3ctjnm01rjcnqadvpfu6fs_R20180308T000000[0]21/3#0",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": 3,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:eventcurrency_scaling",
                                                "regularPrice": 1680,
                                                "finalPrice": 1680,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1680
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [],
                                        "offerType": "StaticPrice",
                                        "refundable": false,
                                        "itemGrants": [
                                            {
                                                "templateId": "Defender:did_defenderpistol_basic_sr_t01",
                                                "quantity": 1,
                                                "attributes": {
                                                    "Alteration": {
                                                        "LootTierGroup": "AlterationTG.Defender.Pistol.SR",
                                                        "Tier": 0
                                                    }
                                                }
                                            }
                                        ],
                                        "sortPriority": 0,
                                        "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": "[VIRTUAL]10 x Eye of the Storm for 150 GameItem : AccountResource:eventcurrency_scaling",
                                        "offerId": "virtual:/2cgr3ctjnm01rjcnqadvpfu6fs_R20180308T000000[1]21/3#2",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": 2,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:eventcurrency_scaling",
                                                "regularPrice": 150,
                                                "finalPrice": 150,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 150
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [],
                                        "offerType": "StaticPrice",
                                        "refundable": false,
                                        "itemGrants": [
                                            {
                                                "templateId": "AccountResource:reagent_c_t03",
                                                "quantity": 10
                                            }
                                        ],
                                        "sortPriority": 0,
                                        "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": "[VIRTUAL]1 x Copper Laser Axe   for 600 GameItem : AccountResource:eventcurrency_scaling",
                                        "offerId": "virtual:/2cgr3ctjnm01rjcnqadvpfu6fs_R20180308T000000[0]21/3#1",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": 3,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:eventcurrency_scaling",
                                                "regularPrice": 600,
                                                "finalPrice": 600,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 600
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [],
                                        "offerType": "StaticPrice",
                                        "refundable": false,
                                        "itemGrants": [
                                            {
                                                "templateId": "Schematic:sid_edged_axe_medium_laser_vr_ore_t01",
                                                "quantity": 1,
                                                "attributes": {
                                                    "Alteration": {
                                                        "LootTierGroup": "AlterationTG.Melee.VR",
                                                        "Tier": 0
                                                    }
                                                }
                                            }
                                        ],
                                        "sortPriority": 0,
                                        "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": "[VIRTUAL]1 x Skirmisher Edge for 1000 GameItem : AccountResource:eventcurrency_scaling",
                                        "offerId": "virtual:/2cgr3ctjnm01rjcnqadvpfu6fs_R20180308T000000[0]21/3#2",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": 1,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:eventcurrency_scaling",
                                                "regularPrice": 1000,
                                                "finalPrice": 1000,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 1000
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [],
                                        "offerType": "StaticPrice",
                                        "refundable": false,
                                        "itemGrants": [
                                            {
                                                "templateId": "Hero:hid_ninja_009_vr_t01",
                                                "quantity": 1
                                            }
                                        ],
                                        "sortPriority": 0,
                                        "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": "[VIRTUAL]10 x Rare Flux for 30 GameItem : AccountResource:eventcurrency_scaling",
                                        "offerId": "virtual:/2cgr3ctjnm01rjcnqadvpfu6fs_R20180308T000000[1]21/3#4",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": 20,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:eventcurrency_scaling",
                                                "regularPrice": 30,
                                                "finalPrice": 30,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 30
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [],
                                        "offerType": "StaticPrice",
                                        "refundable": false,
                                        "itemGrants": [
                                            {
                                                "templateId": "AccountResource:reagent_evolverarity_r",
                                                "quantity": 10
                                            }
                                        ],
                                        "sortPriority": 0,
                                        "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": "[VIRTUAL]1 x Brawler Luna for 160 GameItem : AccountResource:eventcurrency_scaling",
                                        "offerId": "virtual:/2cgr3ctjnm01rjcnqadvpfu6fs_R20180308T000000[0]21/3#3",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": 1,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:eventcurrency_scaling",
                                                "regularPrice": 160,
                                                "finalPrice": 160,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 160
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [],
                                        "offerType": "StaticPrice",
                                        "refundable": false,
                                        "itemGrants": [
                                            {
                                                "templateId": "Hero:hid_ninja_007_uc_t01",
                                                "quantity": 1
                                            }
                                        ],
                                        "sortPriority": 0,
                                        "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": "[VIRTUAL]10 x Pure Drop of Rain for 50 GameItem : AccountResource:eventcurrency_scaling",
                                        "offerId": "virtual:/2cgr3ctjnm01rjcnqadvpfu6fs_R20180308T000000[1]21/3#3",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": 4,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:eventcurrency_scaling",
                                                "regularPrice": 50,
                                                "finalPrice": 50,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 50
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [],
                                        "offerType": "StaticPrice",
                                        "refundable": false,
                                        "itemGrants": [
                                            {
                                                "templateId": "AccountResource:reagent_c_t01",
                                                "quantity": 10
                                            }
                                        ],
                                        "sortPriority": 0,
                                        "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": "[VIRTUAL]1 x workerbasic_vr_t01 for 250 GameItem : AccountResource:eventcurrency_scaling",
                                        "offerId": "virtual:/2cgr3ctjnm01rjcnqadvpfu6fs_R20180308T000000[0]21/3#4",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": 2,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:eventcurrency_scaling",
                                                "regularPrice": 250,
                                                "finalPrice": 250,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 250
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [],
                                        "offerType": "StaticPrice",
                                        "refundable": false,
                                        "itemGrants": [
                                            {
                                                "templateId": "Worker:workerbasic_vr_t01",
                                                "quantity": 1
                                            }
                                        ],
                                        "sortPriority": 0,
                                        "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": "[VIRTUAL]10 x Lightning in a Bottle for 100 GameItem : AccountResource:eventcurrency_scaling",
                                        "offerId": "virtual:/2cgr3ctjnm01rjcnqadvpfu6fs_R20180308T000000[1]21/3#6",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": 3,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:eventcurrency_scaling",
                                                "regularPrice": 100,
                                                "finalPrice": 100,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 100
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [],
                                        "offerType": "StaticPrice",
                                        "refundable": false,
                                        "itemGrants": [
                                            {
                                                "templateId": "AccountResource:reagent_c_t02",
                                                "quantity": 10
                                            }
                                        ],
                                        "sortPriority": 0,
                                        "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": "[VIRTUAL]1 x Copper Jackal for 700 GameItem : AccountResource:specialcurrency_daily",
                                        "offerId": "virtual:/2cgr3ctjnm01rjcnqadvpfu6fs_R20180308T000000[0]21/3#5",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": 1,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:specialcurrency_daily",
                                                "regularPrice": 700,
                                                "finalPrice": 700,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 700
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [],
                                        "offerType": "StaticPrice",
                                        "refundable": false,
                                        "itemGrants": [
                                            {
                                                "templateId": "Schematic:sid_pistol_semiauto_sr_ore_t01",
                                                "quantity": 1,
                                                "attributes": {
                                                    "Alteration": {
                                                        "LootTierGroup": "AlterationTG.Ranged.SR",
                                                        "Tier": 0
                                                    }
                                                }
                                            }
                                        ],
                                        "sortPriority": 0,
                                        "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": "[VIRTUAL]10 x Epic Flux for 75 GameItem : AccountResource:eventcurrency_scaling",
                                        "offerId": "virtual:/2cgr3ctjnm01rjcnqadvpfu6fs_R20180308T000000[1]21/3#5",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": 10,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                                "currencyType": "GameItem",
                                                "currencySubType": "AccountResource:eventcurrency_scaling",
                                                "regularPrice": 75,
                                                "finalPrice": 75,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 75
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [],
                                        "offerType": "StaticPrice",
                                        "refundable": false,
                                        "itemGrants": [
                                            {
                                                "templateId": "AccountResource:reagent_evolverarity_vr",
                                                "quantity": 10
                                            }
                                        ],
                                        "sortPriority": 0,
                                        "catalogGroupPriority": 0
                                    }
                                ]
                            },
                            {
                                "name": "FoundersPack",
                                "catalogEntries": [
                                    {
                                        "offerId": "295CC29541839D33661FA691B3DE95FB",
                                        "devName": "FoundersUpgrade_1_3",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "RealMoney",
                                                "currencySubType": "",
                                                "regularPrice": 0,
                                                "finalPrice": 0,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 0
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "f5c0e8ab6c9a4530999041e89e9b6934",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "FNDR130000000000",
                                            "f3fa9d49-0efa-4189-9ed5-a72b8af8caa4",
                                            ""
                                        ],
                                        "requirements": [
                                            {
                                                "requirementType": "DenyOnItemOwnership",
                                                "requiredId": "Token:founderspack_3",
                                                "minQuantity": 1
                                            },
                                            {
                                                "requirementType": "RequireItemOwnership",
                                                "requiredId": "Token:founderspack_1",
                                                "minQuantity": 1
                                            },
                                            {
                                                "requirementType": "DenyOnItemOwnership",
                                                "requiredId": "Token:founderspack_2",
                                                "minQuantity": 1
                                            }
                                        ],
                                        "metaInfo": [],
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 4,
                                        "title": "Super Deluxe",
                                        "shortDescription": "",
                                        "description": "",
                                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_1_3.DA_FoundersPack_1_3",
                                        "itemGrants": []
                                    },
                                    {
                                        "offerId": "EBF511584B4405C031087C99148BB2D8",
                                        "devName": "FoundersUpgrade_1_2",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "RealMoney",
                                                "currencySubType": "",
                                                "regularPrice": 0,
                                                "finalPrice": 0,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 0
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "9aa9f44cd8c24652953a1b204755b193",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "FNDR120000000000",
                                            "c4f3c99f-b7e0-4e21-ab01-131d4b20d720",
                                            ""
                                        ],
                                        "requirements": [
                                            {
                                                "requirementType": "DenyOnItemOwnership",
                                                "requiredId": "Token:founderspack_2",
                                                "minQuantity": 1
                                            },
                                            {
                                                "requirementType": "RequireItemOwnership",
                                                "requiredId": "Token:founderspack_1",
                                                "minQuantity": 1
                                            }
                                        ],
                                        "metaInfo": [],
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 5,
                                        "title": "Deluxe Upgrade",
                                        "shortDescription": "",
                                        "description": "",
                                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_1_2.DA_FoundersPack_1_2",
                                        "itemGrants": []
                                    },
                                    {
                                        "offerId": "48DC9478462A5DCD3D93EBB81D4488AB",
                                        "devName": "FoundersPack_1",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "RealMoney",
                                                "currencySubType": "",
                                                "regularPrice": 0,
                                                "finalPrice": 0,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 0
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "e2f25dae43604a839dd6f2c21b675d5e",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "FNDR010000000001",
                                            "b0e02cfe-8d1e-4aa0-a02b-e64fa7263617",
                                            ""
                                        ],
                                        "requirements": [
                                            {
                                                "requirementType": "DenyOnItemOwnership",
                                                "requiredId": "Token:founderspack_1",
                                                "minQuantity": 1
                                            }
                                        ],
                                        "metaInfo": [],
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 5,
                                        "title": "Standard Founder's Pack",
                                        "shortDescription": "",
                                        "description": "Purchase the Standard Founder's Pack",
                                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_1.DA_FoundersPack_1",
                                        "itemGrants": []
                                    },
                                    {
                                        "offerId": "F46E931F4851F1CFB0E50C805957205A",
                                        "devName": "FoundersUpgrade_2_4",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "RealMoney",
                                                "currencySubType": "",
                                                "regularPrice": 0,
                                                "finalPrice": 0,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 0
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "d2da86026c71429a9cf5e76dfd89a1d3",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "FNDR240000000000",
                                            "6ba13aad-2515-4e51-b8d8-72540863a8bc",
                                            ""
                                        ],
                                        "requirements": [
                                            {
                                                "requirementType": "DenyOnItemOwnership",
                                                "requiredId": "Token:founderspack_4",
                                                "minQuantity": 1
                                            },
                                            {
                                                "requirementType": "RequireItemOwnership",
                                                "requiredId": "Token:founderspack_2",
                                                "minQuantity": 1
                                            },
                                            {
                                                "requirementType": "DenyOnItemOwnership",
                                                "requiredId": "Token:founderspack_3",
                                                "minQuantity": 1
                                            }
                                        ],
                                        "metaInfo": [],
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 4,
                                        "title": "Limited Upgrade",
                                        "shortDescription": "",
                                        "description": "",
                                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_2_4.DA_FoundersPack_2_4",
                                        "itemGrants": []
                                    },
                                    {
                                        "offerId": "AD38CA234B2FA67C83BFD888EA1D2E8D",
                                        "devName": "FoundersUpgrade_4_5",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "RealMoney",
                                                "currencySubType": "",
                                                "regularPrice": 0,
                                                "finalPrice": 0,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 0
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "e852b1940299435884365cec7dc3a608",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "FNDR450000000000",
                                            "b4e5f231-418f-4937-b3e5-f0e014d42ffe",
                                            ""
                                        ],
                                        "requirements": [
                                            {
                                                "requirementType": "DenyOnItemOwnership",
                                                "requiredId": "Token:founderspack_5",
                                                "minQuantity": 1
                                            },
                                            {
                                                "requirementType": "RequireItemOwnership",
                                                "requiredId": "Token:founderspack_4",
                                                "minQuantity": 1
                                            }
                                        ],
                                        "metaInfo": [],
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 5,
                                        "title": "Ultimate Upgrade",
                                        "shortDescription": "",
                                        "description": "",
                                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_4_5.DA_FoundersPack_4_5",
                                        "itemGrants": []
                                    },
                                    {
                                        "offerId": "141F04624351F025DC67E1929B282B50",
                                        "devName": "FoundersUpgrade_2_3",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "RealMoney",
                                                "currencySubType": "",
                                                "regularPrice": 0,
                                                "finalPrice": 0,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 0
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "35759d71512b47e5b2825669f1d9166a",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "FNDR230000000000",
                                            "46c22707-e058-45dd-8d83-fc45b82d65cd",
                                            ""
                                        ],
                                        "requirements": [
                                            {
                                                "requirementType": "DenyOnItemOwnership",
                                                "requiredId": "Token:founderspack_3",
                                                "minQuantity": 1
                                            },
                                            {
                                                "requirementType": "RequireItemOwnership",
                                                "requiredId": "Token:founderspack_2",
                                                "minQuantity": 1
                                            }
                                        ],
                                        "metaInfo": [],
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 5,
                                        "title": "Super Deluxe Upgrade",
                                        "shortDescription": "",
                                        "description": "",
                                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_2_3.DA_FoundersPack_2_3",
                                        "itemGrants": []
                                    },
                                    {
                                        "offerId": "E86A50A14891B241DBA126BE8FCD0C42",
                                        "devName": "FoundersPack_3",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "RealMoney",
                                                "currencySubType": "",
                                                "regularPrice": 0,
                                                "finalPrice": 0,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 0
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "c8319a037f9840e8b7549de480efb9c7",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "FNDR030000000001",
                                            "8b2e873d-4dba-4367-9bb9-0c2b0951918a",
                                            ""
                                        ],
                                        "requirements": [
                                            {
                                                "requirementType": "DenyOnItemOwnership",
                                                "requiredId": "Token:founderspack_1",
                                                "minQuantity": 1
                                            }
                                        ],
                                        "metaInfo": [],
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 3,
                                        "title": "Super Deluxe Founder's Pack",
                                        "shortDescription": "",
                                        "description": "Purchase the Super Deluxe Founder's Pack",
                                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_3.DA_FoundersPack_3",
                                        "itemGrants": []
                                    },
                                    {
                                        "offerId": "906D1C4D4F79D2ECE314E8AA70CDAFE4",
                                        "devName": "FoundersUpgrade_3_4",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "RealMoney",
                                                "currencySubType": "",
                                                "regularPrice": 0,
                                                "finalPrice": 0,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 0
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "f05c43f7c1d24f5fbb1a6fa5a5a60edb",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "FNDR340000000000",
                                            "489759a7-8a97-49bf-90e1-e8a338fdfaf5",
                                            ""
                                        ],
                                        "requirements": [
                                            {
                                                "requirementType": "DenyOnItemOwnership",
                                                "requiredId": "Token:founderspack_4",
                                                "minQuantity": 1
                                            },
                                            {
                                                "requirementType": "RequireItemOwnership",
                                                "requiredId": "Token:founderspack_3",
                                                "minQuantity": 1
                                            }
                                        ],
                                        "metaInfo": [],
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 5,
                                        "title": "Limited Upgrade",
                                        "shortDescription": "",
                                        "description": "",
                                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_3_4.DA_FoundersPack_3_4",
                                        "itemGrants": []
                                    },
                                    {
                                        "offerId": "2A26520F414EC95C944F80A596A284B0",
                                        "devName": "FoundersUpgrade_1_4",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "RealMoney",
                                                "currencySubType": "",
                                                "regularPrice": 0,
                                                "finalPrice": 0,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 0
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "57f0419c4e4a4ea4858b2f37a98d5315",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "FNDR140000000000",
                                            "65691cca-42bb-4528-9065-3926c0057cac",
                                            ""
                                        ],
                                        "requirements": [
                                            {
                                                "requirementType": "DenyOnItemOwnership",
                                                "requiredId": "Token:founderspack_4",
                                                "minQuantity": 1
                                            },
                                            {
                                                "requirementType": "RequireItemOwnership",
                                                "requiredId": "Token:founderspack_1",
                                                "minQuantity": 1
                                            },
                                            {
                                                "requirementType": "DenyOnItemOwnership",
                                                "requiredId": "Token:founderspack_2",
                                                "minQuantity": 1
                                            },
                                            {
                                                "requirementType": "DenyOnItemOwnership",
                                                "requiredId": "Token:founderspack_3",
                                                "minQuantity": 1
                                            }
                                        ],
                                        "metaInfo": [],
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 3,
                                        "title": "Limited Upgrade",
                                        "shortDescription": "",
                                        "description": "",
                                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_1_4.DA_FoundersPack_1_4",
                                        "itemGrants": []
                                    },
                                    {
                                        "offerId": "8F9E54194FBF331A9CCC4BB6FDFB8FC2",
                                        "devName": "FoundersPack_2",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "RealMoney",
                                                "currencySubType": "",
                                                "regularPrice": 0,
                                                "finalPrice": 0,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 0
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "41134f4ff35a45a4923604cbb15e487d",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "FNDR020000000001",
                                            "369267a1-3e63-4b6e-82be-286d741d7370",
                                            ""
                                        ],
                                        "requirements": [
                                            {
                                                "requirementType": "DenyOnItemOwnership",
                                                "requiredId": "Token:founderspack_1",
                                                "minQuantity": 1
                                            }
                                        ],
                                        "metaInfo": [],
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 4,
                                        "title": "Deluxe Founder's Pack",
                                        "shortDescription": "",
                                        "description": "Purchase the Deluxe Founder's Pack",
                                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_2.DA_FoundersPack_2",
                                        "itemGrants": []
                                    },
                                    {
                                        "offerId": "17B3F0D54574684E0B9185A10910E324",
                                        "devName": "FoundersPack_4",
                                        "offerType": "StaticPrice",
                                        "prices": [
                                            {
                                                "currencyType": "RealMoney",
                                                "currencySubType": "",
                                                "regularPrice": 0,
                                                "finalPrice": 0,
                                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                                "basePrice": 0
                                            }
                                        ],
                                        "categories": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "appStoreId": [
                                            "",
                                            "85125898f3914946a9443bcce4667660",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "FNDR040000000001",
                                            "e3c292c9-9337-41e8-ba90-e96b85002f68",
                                            ""
                                        ],
                                        "requirements": [
                                            {
                                                "requirementType": "DenyOnItemOwnership",
                                                "requiredId": "Token:founderspack_1",
                                                "minQuantity": 1
                                            }
                                        ],
                                        "metaInfo": [],
                                        "catalogGroup": "",
                                        "catalogGroupPriority": 0,
                                        "sortPriority": 2,
                                        "title": "Limited Founder's Pack",
                                        "shortDescription": "",
                                        "description": "Purchase the Limited Founder's Pack",
                                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_4.DA_FoundersPack_4",
                                        "itemGrants": []
                                    }
                                ]
                            }
                        ]
                    }
                );
                break;
            default:
                res.json({
                    success: false,
                    error: `Invalid \`rvn\` of \`${req.query.rvn}\``
                });
        }
    } else {
        res.json({
            success: false,
            reason: "We have received invalid data and are unable to process your request."
        });
    }
}