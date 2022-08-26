CREATE TABLE IF NOT EXISTS "user" (
    id SERIAL PRIMARY KEY,
    email VARCHAR(320) UNIQUE NOT NULL,
    password CHAR(60) NOT NULL,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT Now(),
    modified_at TIMESTAMP NOT NULL DEFAULT Now()
);

CREATE TABLE IF NOT EXISTS user_address (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES "user" (id) ON DELETE CASCADE,
    address VARCHAR(40) NOT NULL,
    address2 VARCHAR(40),
    city VARCHAR(17) NOT NULL,
    state VARCHAR(20) NOT NULL,
    zip_code CHAR(5) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT Now(),
    modified_at TIMESTAMP NOT NULL DEFAULT Now()
);

CREATE TABLE IF NOT EXISTS user_payment (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES "user" (id) ON DELETE CASCADE,
    card_number VARCHAR(16) NOT NULL,
    ccv CHAR(3) NOT NULL,
    expiration_date CHAR(5) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT Now(),
    modified_at TIMESTAMP NOT NULL DEFAULT Now()
);


CREATE TABLE IF NOT EXISTS category (
    id SERIAL PRIMARY KEY,
    name VARCHAR(24) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT Now(),
    modified_at TIMESTAMP NOT NULL DEFAULT Now()
);

CREATE TABLE IF NOT EXISTS product (
    id SERIAL PRIMARY KEY,
    category_id INT NOT NULL REFERENCES category (id),
    name VARCHAR(40) NOT NULL,
    description VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    price NUMERIC(5, 2) NOT NULL DEFAULT 0,
    image_url VARCHAR(255) NOT NULL,
    attributes JSONB NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT Now(),
    modified_at TIMESTAMP NOT NULL DEFAULT Now()
);

CREATE TABLE IF NOT EXISTS cart (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES "user" (id) ON DELETE CASCADE,
    total INT NOT NULL DEFAULT 0, 
    created_at TIMESTAMP NOT NULL DEFAULT Now(),
    modified_at TIMESTAMP NOT NULL DEFAULT Now()
);

CREATE TABLE IF NOT EXISTS cart_item (
    id SERIAL PRIMARY KEY,
    cart_id INT NOT NULL REFERENCES cart (id),
    product_id INT NOT NULL REFERENCES product(id),
    quantity INT NOT NULL DEFAULT 1,
    attributes JSONB NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT Now(),
    modified_at TIMESTAMP NOT NULL DEFAULT Now()
);

CREATE TABLE IF NOT EXISTS wishlist (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES "user" (id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT Now(),
    modified_at TIMESTAMP NOT NULL DEFAULT Now()
);

CREATE TABLE IF NOT EXISTS wishlist_item (
    id SERIAL PRIMARY KEY,
    wishlist_id INT NOT NULL REFERENCES wishlist (id),
    product_id INT NOT NULL REFERENCES product (id),
    created_at TIMESTAMP NOT NULL DEFAULT Now(),
    modified_at TIMESTAMP NOT NULL DEFAULT Now()
);

CREATE TABLE IF NOT EXISTS "order" (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES "user" (id) ON DELETE CASCADE,
    payment_id INT NOT NULL,
    address_id INT NOT NULL,
    status VARCHAR(10) NOT NULL DEFAULT 'Pending',
    created_at TIMESTAMP NOT NULL DEFAULT Now(),
    modified_at TIMESTAMP NOT NULL DEFAULT Now()
);

CREATE TABLE IF NOT EXISTS order_item (
    id SERIAL PRIMARY KEY,
    order_id INT NOT NULL REFERENCES "order" (id),
    product_id INT NOT NULL REFERENCES product (id),
    price NUMERIC(7, 2) NOT NULL DEFAULT 0,
    quantity INT NOT NULL DEFAULT 1,
    attributes JSONB NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT Now(),
    modified_at TIMESTAMP NOT NULL DEFAULT Now()
);

INSERT INTO category(name)
VALUES('Women');

INSERT INTO category(name)
VALUES('Men');

INSERT INTO category(name)
VALUES('Gifts For Her');

INSERT INTO category(name)
VALUES('Gifts For Him');

INSERT INTO product(name, category_id, description, quantity, price, image_url, attributes)
VALUES('Poplin Dress', 1,
'Defined by bold lines and masculine-inspired details, this poplin dress has a delicate, feminine character due to the all-over ruching embellishment. The low-cut back is enhanced by the lacing closure and strap with a bow.',
40, 250.00, 'pd1_jdn5oj.webp,pd2_bznfs0.webp,pdt1_uehv4r.webp,pdt2_m3okfc.webp', 
'{
	"colors": ["white", "red", "purple"],
	"sizes": ["xs", "s", "m", "l", "xl"]
}'); 

INSERT INTO product(name, category_id, description, quantity, price, image_url, attributes)
VALUES('Knit Cotton Cardigan', 1,
'Knitwear with sophisticated allure completes the Prada looks this season. This light, soft cotton cardigan features a delicate openwork motif and is embellished with a logo that adds an iconic touch.',
40, 150.00, 'kcc1_gjcrl8.webp,kcc2_emk6yk.webp,kcct1_rs7nt6.webp,kcct2_cthbpj.webp', 
'{
	"colors": ["pink"],
	"sizes": ["xs", "s", "l"]
}'); 

INSERT INTO product(name, category_id, description, quantity, price, image_url, attributes)
VALUES('Gingham Check Shorts', 1,
'Romantic fabric defines the character of these gingham check shorts with an elasticized waistband that recalls loungewear. The fabric triangle logo in a matching color decorates the garment.',
40, 175.00, 'gcs1_nlmqm4.webp,gcs2_vdsjm2.webp,gcst1_wwtoab.webp,gcst2_wsedcj.webp', 
'{
   "colors": ["black", "white"],
   "sizes": ["s", "m", "l", "xl"]
}'); 

INSERT INTO product(name, category_id, description, quantity, price, image_url, attributes)
VALUES('Organic Denim Trousers', 1,
'Straight cut, cropped at the ankle and with a low-rise waist, these five-pocket jeans have a washed finish that gives the organic denim a vintage look.',
0, 150.00, 'odt1_qtfkky.webp,odt2_rnegx6.webp,odtt1_f5hfjg.webp,odtt2_spsifn.webp', 
'{
	"colors": ["blue", "black"],
	"sizes": ["one size"]
}'); 

INSERT INTO product(name, category_id, description, quantity, price, image_url, attributes)
VALUES('Gabardine Shirt', 1,
'This shirt with refined, minimalist allure is made of gabardine and features details that recall the classic mens shirt like the front patch pocket. The elements of lifestyle apparel like the zipper closure meet the elegant lines of formal menswear.',
40, 150.00, 'gs1_jwy0k4.webp,gs2_yavrjp.webp,gst1_bepcih.webp,gst2_dowijf.webp', 
'{
	"colors": ["black", "red"],
	"sizes": ["m", "l", "xl"]
}'); 

INSERT INTO product(name, category_id, description, quantity, price, image_url, attributes)
VALUES('Short-sleeved Cotton Shirt', 2,
'Sleek and refined, this oversized shirt is full of retro allure. The cotton garment is characterized by an interesting contrast of different materials that come together in a tonal palette.',
40, 275.00, 'sscs1_k0ycsa.webp,sscs2_vsvnxp.webp,sscst1_aymiv4.webp,sscst2_qzefy9.webp', 
'{
  "colors": ["black", "white", "gray"],
  "sizes": ["xs", "m", "l", "xl"]
}'); 

INSERT INTO product(name, category_id, description, quantity, price, image_url, attributes)
VALUES('Technical Cotton Parka', 2,
'This parka with straight and geometric lines has sleek allure. The sporty soul of the style meets refined, minimalist design that is enriched with new aesthetic concepts and reflects the dual soul of the brand.',
0, 200.00, 'tp1_rri7d9.webp,tp2_cpt5jk.jpg,tpt1_g85s8g.webp,tpt2_elzdaq.webp', 
'{
  "colors": ["white"],
  "sizes": ["one size"]
}'); 

INSERT INTO product(name, category_id, description, quantity, price, image_url, attributes)
VALUES('Single-breasted Wool Suit', 2,
'Tailored with black soft wool and mohair this suit is an expression of Italian style with a slim fit and a very clean aesthetic. Constructed shoulder for the blazer and slash pockets for the pants.',
0, 325.00, 'sbws1_ijl6rn.webp,sbws2_cxau4m.webp,sbwst1_cxbj6t.webp,sbwst2_j852gu.webp', 
'{
  "colors": ["black"],
  "sizes": ["m", "l", "xl"]
}');

INSERT INTO product(name, category_id, description, quantity, price, image_url, attributes)
VALUES('Cashmere Shorts', 2,
'Metzinger interprets traditional knitwear in an innovative way, with references to the athleisure world. These cashmere shorts with a cable-knit motif re-propose elements and attitudes of sportswear like the elasticized drawstring waistband.',
40, 275.00, 'cs1_p5mhod.webp,cs2_mllv8b.webp,cst1_kojtem,cst2_ds5hbd.webp', 
'{
  "colors": ["black", "beige"],
  "sizes": ["xs", "s", "m", "l", "xl"]
}'); 

INSERT INTO product(name, category_id, description, quantity, price, image_url, attributes)
VALUES('Printed Cotton Shirt', 2,
'In celebration of freedom and individuality, colors and styles mix to create a contemporary and composite collection that recalls archetypes of beach imagery.',
0, 250.00, 'pcs1_hequw7.webp,pcs2_qyqdu6.webp,pcst1_bxmest.webp,pcst2_atpjdq.webp', 
'{
  "colors": ["blue", "yellow"],
  "sizes": ["one size"]
}'); 

INSERT INTO product(name, category_id, description, quantity, price, image_url, attributes)
VALUES('Galaxy Sunglasses', 3,
'Sunglasses with a squared feminine shape. The elegant cat-eyed frame is enhanced by the wide temples that naturally bond with the face.',
40, 175.00, 'gs1_xvt5if.webp,gs2_qbkhfa.webp,gst1_huprkr.webp,gst2_fsb5ov.webp', 
'{
  "colors": ["white"],
  "sizes": ["one size"]
}'); 

INSERT INTO product(name, category_id, description, quantity, price, image_url, attributes)
VALUES('Leather Derby Shoes', 3,
'These derby shoes that reinvent classic formal footwear by adding a modernist, minimalist twist are made of brushed leather, an iconic material of the brand since the 90s that is traditionally tied to the luxury world.',
0, 300.00, 'lds1_tyg32l.jpg,lds2_ni7upz.webp,ldst1_cxvyoi.webp,ldst2_sveuon.webp', 
'{
  "colors": ["white", "black"],
  "sizes": ["one size"]
}'); 

INSERT INTO product(name, category_id, description, quantity, price, image_url, attributes)
VALUES('Leather Bracelet', 3,
'This leather bracelet is an accessory that reinvent classic formal footwear by adding a modernist, minimalist twist are made of brushed leather, an iconic material of the brand since the 90s that is traditionally tied to the luxury world.',
40, 150.00, 'lb1_is4yjd.webp,lb2_ktp2kg.webp,lbt1_dlwxry.webp,lbt2_plkzdw.webp', 
'{
  "colors": ["black"],
  "sizes": ["one size"]
}'); 

INSERT INTO product(name, category_id, description, quantity, price, image_url, attributes)
VALUES('Brushed Leather Bag', 3,
'Presented in a macro version for a bold, contemporary effect, the enameled metal triangle logo stands out on the flap of this shoulder bag made of brushed leather, an iconic and luxurious material of the brand.',
40, 275.00, 'blb1_mdjghb.jpg,blb2_kpqje4.jpg,blbt1_nqwro4.webp,blbt2_rkkbjp.jpg', 
'{
  "colors": ["red"],
  "sizes": ["one size"]
}'); 

INSERT INTO product(name, category_id, description, quantity, price, image_url, attributes)
VALUES('Jacquard Fabric Bag', 3,
'Thanks to the double handle and detachable shoulder strap, the accessory reveals its versatile soul and can be carried by hand or worn over the shoulder.',
40, 350.00, 'jb1_cidets.webp,jb2_fxr9ig.webp,jbt1_nltgkm.webp,jbt2_soydxd.webp', 
'{
  "colors": ["brown"],
  "sizes": ["one size"]
}'); 

INSERT INTO product(name, category_id, description, quantity, price, image_url, attributes)
VALUES('Oversized Cotton T-shirt', 4,
'The Metzinger jersey T-shirt, an essential item of the brand, embodies the luxury of simplicity that becomes an attitude and a search to reinvent the bases and propose new meanings.',
40, 275.00, 'ocs1_d9jot4.webp,ocs2_aegrc8.webp,ocst1_rdfhig.webp,ocst2_fwcuxw.webp', 
'{
  "colors": ["white"],
  "sizes": ["xs", "s", "l", "xl"]
}'); 

INSERT INTO product(name, category_id, description, quantity, price, image_url, attributes)
VALUES('Cashmere Crewneck Sweater', 4,
'Vibrant rust color for this Metzinger soft and warm cashmere sweater. Classic crewneck and ribbed cuffs, collar and waistband in a catchy monochrome hue. An evergreen piece for an upgrade of your knitwear.',
40, 225.00, 'ccs1_onzt5v.webp,ccs2_d7ygl9.jpg,ccst1_wadhl0.webp,ccst2_hbwdn3.webp', 
'{
  "colors": ["blue"],
  "sizes": ["m", "xl"]
}'); 

INSERT INTO product(name, category_id, description, quantity, price, image_url, attributes)
VALUES('Metzinger Spring Glasses', 4,
'Acetate sunglasses from the Metzinger collection. The bold rectangular frame is composed of a refined combination of acetate layers highlighted by contrasting colors on the lens rims.',
40, 175.00, 'mss1_jeoj55.webp,mss2_yzp54r.webp,msst1_bhzupi.webp,msst2_rz3yvt.webp', 
'{
  "colors": ["black"],
  "sizes": ["one size"]
}'); 

INSERT INTO product(name, category_id, description, quantity, price, image_url, attributes)
VALUES('Reversible Leather Belt', 4,
'This classic leather belt has a two-tone design that makes it reversible. It remains a proud staple of the Metzinger brand even after a proud 50 years.',
40, 310.00, 'rlb1_kpajxn.webp,rlbt1_yw8nag.webp,rlb2_kpt5si.webp,rlbt2_gekdmg.webp', 
'{
  "colors": ["black"],
  "sizes": ["one size"]
}'); 

INSERT INTO product(name, category_id, description, quantity, price, image_url, attributes)
VALUES('Saffiano Leather Backpack', 4,
'This roomy backpack with a technical look is made of innovative technical fabric produced from recycled plastic recovered in the ocean. The design of the accessory stands out for its Saffiano leather details.',
40, 245.00, 'slb1_m8kky2.webp,slb2_j6syap.webp,slbt1_xykqak.webp,slbt2_sreotn.webp', 
'{
  "colors": ["blue"],
  "sizes": ["xs", "s", "m", "l", "xl"]
}'); 
