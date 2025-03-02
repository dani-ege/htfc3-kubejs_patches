// priority: 0

console.info('Registering KJS Items...')

onEvent('item.registry', event => {
	event.create('metal/double_sheet/electrum')   // display names are in kubejs/assets/kubejs/en_us.json
	event.create('metal/double_sheet/constantan')
	event.create('metal/double_sheet/aluminum')
	event.create('metal/double_sheet/lead')
	event.create('metal/double_sheet/uranium')

	event.create('misc_mats/andesite_alloy/rod')
	event.create('misc_mats/andesite_alloy/sheet')
	event.create('misc_mats/netherite/rod')

	event.create('prop_foods/cookie').texture('minecraft:item/cookie')

	//event.create('soup_base').displayName('Soup Base').food(food => {food.hunger(1).saturation(0).eaten(ctx => {ctx.player.tell(Text.gold('Hhmmm!'))})})
	event.create('raw_cookie')		.food(food => {food.hunger(1).saturation(0) })//.eaten(ctx => {ctx.player.tell(Text.gold('Yummy Yummy!'))})})
	event.create('silver_carrot')	.food(food => {food.hunger(1).saturation(0).alwaysEdible() })//.eaten(ctx => {ctx.player.tell(Text.gold('Silver works - Zombie - not today!'))})})
	event.create('silver_apple')	.food(food => {food.hunger(1).saturation(0).alwaysEdible() })//.eaten(ctx => {ctx.player.tell(Text.gold('Silver works - Zombie - not today!'))})})
	event.create('raw_pancake')		.food(food => {food.hunger(1).saturation(0) })//.eaten(ctx => {ctx.player.tell(Text.gold('Mniaam Miaammm!'))})})
	event.create('pancake')			.food(food => {food.hunger(3).saturation(0.6) })//.eaten(ctx => {ctx.player.tell(Text.gold('Mniaam Miaammm!'))})})
	event.create('boiled_grass')	.food(food => {food.hunger(1).saturation(0.25) })//.eaten(ctx => {ctx.player.tell(Text.gold('hmmm boiled grass? Not Bad!'))})})
	event.create('shark_meat')			.displayName('Raw Shark Meat')		.food(food => {food.hunger(3).saturation(0.5) })//.eaten(ctx => {ctx.player.tell(Text.gold('Bleee Raw Shark!'))})})
	event.create('shark_cooked_meat')	.displayName('Cooked Shark Meat')	.food(food => {food.hunger(7).saturation(1.0) })//.eaten(ctx => {ctx.player.tell(Text.gold('Mniaam Cooked Shark!'))})})
	event.create('crumbled_rock')
	event.create('andesite_rock_powder')
	event.create('clean_amethyst_powder')
	event.create('cut_tea_leaves')
	event.create('dry_tea_leaves')
	event.create('cut_cattail')
	event.create('tree_seed_paste')
	event.create('seed_paste')
	event.create('primitive_glass_pane')
	event.create('raw_platinum')
	event.create('seed_biomass')
	event.create('vulcanized_rubber')
	event.create('pile_carbon_waste')			.displayName('Pile of Carbon Waste')
	event.create('pile_sulfur_waste')			.displayName('Pile of Sulfur Waste')
	event.create('sulfur_waste')				.displayName('Dirty Sulfur Waste Dust')
	event.create('nutrimix')					.displayName('Nutritional Mix')
	event.create('feed_hay')					.displayName('Hay Feed')
	event.create('feed_meat')					.displayName('Meat Feed')
	event.create('feed_seed')					.displayName('Seed Feed')
	event.create('feed_vege')					.displayName('Vegetable Feed')
	event.create('feed_fruit')					.displayName('Fruit Feed')
	event.create('slot_pocket')					.displayName('Additional Slot Pocket')
	event.create('medical_white_powder')		.displayName('Medicinal White Powder')
	event.create('medical_red_powder')			.displayName('Medicinal Red Powder')
	event.create('medical_green_powder')		.displayName('Medicinal Green Powder')
	event.create('chisel_stone_head')			.displayName('Stone Bit Chisel Head')
	event.create('chisel_iron_head')			.displayName('Wrought Iron Bit Chisel Head')
	event.create('chisel_rose_gold_head')		.displayName('Rose Gold Bit Chisel Head')
	event.create('chisel_blue_steel_head')		.displayName('Blue Steel Bit Chisel Head')
	event.create('chisel_compressed_iron_head')	.displayName('Compressed Iron Bit Chisel Head')
	event.create('spool_wire')					.displayName('Spool')
	event.create('sq_tieless')					.displayName('Incomplete Tieless Train Track')
	event.create('sq_ins_copp')					.displayName('Incomplete Insulated LV Wire Coil')
	event.create('sq_ins_elec')					.displayName('Incomplete Insulated MV Wire Coil')
	event.create('sq_spool_copper')				.displayName('Incomplete Copper Spool')
	event.create('sq_spool_gold')				.displayName('Incomplete Gold Spool')
	event.create('sq_wire_copp')				.displayName('Incomplete LV Wire Coil')
	event.create('sq_wire_elec')				.displayName('Incomplete MV Wire Coil')
	event.create('sq_wire_reds')				.displayName('Incomplete Redstone Wire Coil')
	event.create('sq_wire_steel')				.displayName('Incomplete Steel Cable Coil')
	event.create('sq_fluidpipecr')				.displayName('Incomplete Fluid Pipe')
	event.create('sq_fluidpipeie')				.displayName('Incomplete Fluid Pipe')
	event.create('sq_presstube')				.displayName('Incomplete Pressure Tube')
	event.create('sq_embpipe')					.displayName('Incomplete Embedded Pipe')
	event.create('stack_treated_wood')			.displayName('Stack of Treated Wood')
	event.create('big_stack_treated_wood')		.displayName('Large Stack of Treated Wood')
	event.create('press_head')					.displayName('Mechanical Press Head')
	event.create('hardened_press_head')			.displayName('Hardened Steel Press Head')
	event.create('canoe')						.displayName('Canoe - First Boat')
	event.create('un_casing')					.displayName('Incomplete Technic Block')
	event.create('un_sheet')					.displayName('Incomplete Technic Item')
	event.create('sugar_mass')					.displayName('Raw Sugar Mass')
	event.create('hemp_stack')					.displayName('Stack of Hemp Fibers')
	event.create('compressed_double_ingot')		.displayName('Compressed Iron Double Ingot')
	event.create('compressed_sheet')			.displayName('Compressed Iron Sheet')
	event.create('compressed_double_sheet')		.displayName('Compressed Iron Double Sheet')
	event.create('compressed_rod')				.displayName('Compressed Iron Rod')
	event.create('compressed_mesh')				.displayName('Compressed Iron Mesh')
	event.create('compressed_wire')				.displayName('Compressed Iron Wire')
	event.create('hide_tanned_s')				.displayName('Small Tanned Hide')
	event.create('hide_tanned_m')				.displayName('Medium Tanned Hide')
	event.create('hide_tanned_l')				.displayName('Large Tanned Hide')
	event.create('hide_oiled_s')				.displayName('Small Oiled Hide')
	event.create('hide_oiled_m')				.displayName('Medium Oiled Hide')
	event.create('hide_oiled_l')				.displayName('Large Oiled Hide')
	event.create('hide_finish_s')				.displayName('Small Leather')
	event.create('hide_finish_m')				.displayName('Medium Leather')
	event.create('hide_finish_l')				.displayName('Large Leather')
	event.create('medical_paste')				.displayName('Medicinal Herb Paste')
	event.create('magic_crystal')				.displayName('Magic Twilight Crystal')
	event.create('fuel_component')				.displayName('Rocket Fuel Component')
	event.create('img_arcfurnace')				.displayName('img_arcfurnace')
	event.create('img_cokker')					.displayName('img_cokker')
	event.create('img_crusher')					.displayName('img_crusher')
	event.create('img_derrik')					.displayName('img_derrik')
	event.create('img_destillation')			.displayName('img_destillation')
	event.create('img_diesel')					.displayName('img_diesel')
	event.create('img_excavator')				.displayName('img_excavator')
	event.create('img_metalpress')				.displayName('img_metalpress')
	event.create('img_oiltank')					.displayName('img_oiltank')
	event.create('img_pumpjack')				.displayName('img_pumpjack')
	event.create('img_refinery')				.displayName('img_refinery')
	event.create('img_sawmill')					.displayName('img_sawmill')
	event.create('img_squezzer')				.displayName('img_squezzer')
	event.create('img_ores')					.displayName('img_ores')
	event.create('img_wiki')					.displayName('img_wiki')
	event.create('img_book')					.displayName('img_book')
	// long stick
	//event.create('long_stick').displayName('Long Stick').tool('sword').tier('stone').attackDamageBaseline(6.0)
})

//onEvent('item.registry.long_stick', event => {
//	event.add('long_stick', tier => {
//	  tier.uses = 250
//	  tier.speed = 6.0
//	  tier.attackDamageBonus = 2.0
//	  tier.level = 2
//	  tier.enchantmentValue = 14
//	  tier.repairIngredient = '#forge:ingots/iron'
//	})
//  })