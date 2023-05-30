--
-- PostgreSQL database dump
--

-- Dumped from database version 14.7 (Homebrew)
-- Dumped by pg_dump version 15.1

-- Started on 2023-05-30 17:06:17 EEST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: user
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO "user";

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 16447)
-- Name: customers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customers (
    customer_id integer NOT NULL,
    customer_name character varying(100) NOT NULL,
    customer_email character varying(100) NOT NULL,
    customer_phone character varying(15) NOT NULL,
    customer_address character varying(150) NOT NULL
);


ALTER TABLE public.customers OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16446)
-- Name: customers_customer_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.customers_customer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.customers_customer_id_seq OWNER TO postgres;

--
-- TOC entry 3649 (class 0 OID 0)
-- Dependencies: 215
-- Name: customers_customer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.customers_customer_id_seq OWNED BY public.customers.customer_id;


--
-- TOC entry 218 (class 1259 OID 16461)
-- Name: order_details; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.order_details (
    order_detail_id integer NOT NULL,
    order_id integer NOT NULL,
    prod_id integer NOT NULL,
    prod_quantity integer NOT NULL
);


ALTER TABLE public.order_details OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16460)
-- Name: order_details_order_detail_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.order_details_order_detail_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.order_details_order_detail_id_seq OWNER TO postgres;

--
-- TOC entry 3650 (class 0 OID 0)
-- Dependencies: 217
-- Name: order_details_order_detail_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.order_details_order_detail_id_seq OWNED BY public.order_details.order_detail_id;


--
-- TOC entry 214 (class 1259 OID 16437)
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    order_id integer NOT NULL,
    customer_id integer NOT NULL,
    order_total numeric(7,2) NOT NULL
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 16436)
-- Name: orders_order_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_order_id_seq OWNER TO postgres;

--
-- TOC entry 3651 (class 0 OID 0)
-- Dependencies: 213
-- Name: orders_order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_order_id_seq OWNED BY public.orders.order_id;


--
-- TOC entry 212 (class 1259 OID 16422)
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    prod_id bigint NOT NULL,
    prod_name character varying(80) NOT NULL,
    prod_image character varying(200) NOT NULL,
    prod_price numeric NOT NULL,
    quantity_in_storage integer DEFAULT 100 NOT NULL,
    shop_id integer NOT NULL
);


ALTER TABLE public.products OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16421)
-- Name: products_prod_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_prod_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_prod_id_seq OWNER TO postgres;

--
-- TOC entry 3652 (class 0 OID 0)
-- Dependencies: 211
-- Name: products_prod_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_prod_id_seq OWNED BY public.products.prod_id;


--
-- TOC entry 210 (class 1259 OID 16413)
-- Name: shops; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.shops (
    shop_id integer NOT NULL,
    shop_name character varying(100) NOT NULL,
    shop_address text,
    shop_phone character varying(15)
);


ALTER TABLE public.shops OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16412)
-- Name: shops_shop_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.shops_shop_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.shops_shop_id_seq OWNER TO postgres;

--
-- TOC entry 3653 (class 0 OID 0)
-- Dependencies: 209
-- Name: shops_shop_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.shops_shop_id_seq OWNED BY public.shops.shop_id;


--
-- TOC entry 3476 (class 2604 OID 16450)
-- Name: customers customer_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers ALTER COLUMN customer_id SET DEFAULT nextval('public.customers_customer_id_seq'::regclass);


--
-- TOC entry 3477 (class 2604 OID 16464)
-- Name: order_details order_detail_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_details ALTER COLUMN order_detail_id SET DEFAULT nextval('public.order_details_order_detail_id_seq'::regclass);


--
-- TOC entry 3475 (class 2604 OID 16440)
-- Name: orders order_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders ALTER COLUMN order_id SET DEFAULT nextval('public.orders_order_id_seq'::regclass);


--
-- TOC entry 3473 (class 2604 OID 16425)
-- Name: products prod_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN prod_id SET DEFAULT nextval('public.products_prod_id_seq'::regclass);


--
-- TOC entry 3472 (class 2604 OID 16416)
-- Name: shops shop_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shops ALTER COLUMN shop_id SET DEFAULT nextval('public.shops_shop_id_seq'::regclass);


--
-- TOC entry 3640 (class 0 OID 16447)
-- Dependencies: 216
-- Data for Name: customers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customers (customer_id, customer_name, customer_email, customer_phone, customer_address) FROM stdin;
\.


--
-- TOC entry 3642 (class 0 OID 16461)
-- Dependencies: 218
-- Data for Name: order_details; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.order_details (order_detail_id, order_id, prod_id, prod_quantity) FROM stdin;
\.


--
-- TOC entry 3638 (class 0 OID 16437)
-- Dependencies: 214
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (order_id, customer_id, order_total) FROM stdin;
\.


--
-- TOC entry 3636 (class 0 OID 16422)
-- Dependencies: 212
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (prod_id, prod_name, prod_image, prod_price, quantity_in_storage, shop_id) FROM stdin;
1	Big Burger	/images/burger.jpg	3.45	100	1
2	Big Cheeseburger	/images/burger.jpg	4.60	100	1
6	Nuggets 6pc	/images/burger.jpg	4.20	100	1
7	Nuggets 10pc	/images/burger.jpg	5.20	100	1
8	Cola Standard	/images/burger.jpg	3.40	100	1
9	Cola Large	/images/burger.jpg	4.00	100	1
34	Big Cheeseburger	/images/burger.jpg	4.60	100	6
38	Nuggets 6pc	/images/burger.jpg	4.20	100	6
10	Tulip White	/images/tulip.jpg	2.00	100	2
11	Tulip Red	/images/tulip.jpg	2.50	100	2
12	Tulip Pink	/images/tulip.jpg	2.50	100	2
13	Tulip Yellow	/images/tulip.jpg	3.50	100	2
14	Rose Red	/images/rose.jpg	3.20	100	2
15	Rose White	/images/rose.jpg	3.20	100	2
16	Rose Orange	/images/rose.jpg	3.80	100	2
29	Rose Orange	/images/rose.jpg	4.80	100	5
30	Rose Red	/images/rose.jpg	3.80	100	5
31	Rose Yellow	/images/rose.jpg	5.80	100	5
32	Peony Rose	/images/rose.jpg	3.80	100	5
33	Peony Maroon	/images/rose.jpg	4.80	100	5
19	Pizza 4 meat	/images/pizza.jpg	12.80	100	3
20	Pizza 4 cheese	/images/pizza.jpg	14.80	100	3
21	Pizza Salami	/images/pizza.jpg	10.50	100	3
22	Pizza Pepperoni	/images/pizza.jpg	9.90	100	3
23	Pizza DorBlue	/images/pizza.jpg	12.90	100	3
24	Gone with the wind	/images/book.jpg	20.50	100	4
25	Breakfast at Tiffany	/images/book.jpg	18.50	100	4
26	Red Hat	/images/book.jpg	11.50	100	4
27	Cinderella	/images/book.jpg	11.50	100	4
28	Harry Porter and the Philosopher Stone	/images/book.jpg	25.50	100	4
17	Сhrysanthemum White	/images/flower.jpg	2.20	100	2
18	Сhrysanthemum Yellow	/images/flower.jpg	2.50	100	2
3	Fries Small	/images/fries.jpg	2.50	100	1
4	Fries Medium	/images/fries.jpg	3.50	100	1
5	Fries Large	/images/fries.jpg	4.50	100	1
35	Fries Small	/images/fries.jpg	2.50	100	6
36	Fries Medium	/images/fries.jpg	3.50	100	6
37	Fries Large	/images/fries.jpg	3.50	100	6
\.


--
-- TOC entry 3634 (class 0 OID 16413)
-- Dependencies: 210
-- Data for Name: shops; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.shops (shop_id, shop_name, shop_address, shop_phone) FROM stdin;
1	MoBurger	Spring Str. 18	(067) 222-98-98
2	Sparkle	Stepana Bandery Ave 1	(067) 222-58-00
3	LidlProd	Parkova Str. 7	(067) 442-58-07
4	Bookva	Zbarazka Str. 78	(097) 552-78-01
5	Kvitochka	Stepana Bandery Ave 25	(097) 777-71-01
6	KCF	Shevchenko Str. 9	(097) 999-51-01
7	Silpo	Sheptiskogo 14	078 677-78-67
\.


--
-- TOC entry 3654 (class 0 OID 0)
-- Dependencies: 215
-- Name: customers_customer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.customers_customer_id_seq', 22, true);


--
-- TOC entry 3655 (class 0 OID 0)
-- Dependencies: 217
-- Name: order_details_order_detail_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.order_details_order_detail_id_seq', 42, true);


--
-- TOC entry 3656 (class 0 OID 0)
-- Dependencies: 213
-- Name: orders_order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_order_id_seq', 24, true);


--
-- TOC entry 3657 (class 0 OID 0)
-- Dependencies: 211
-- Name: products_prod_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_prod_id_seq', 38, true);


--
-- TOC entry 3658 (class 0 OID 0)
-- Dependencies: 209
-- Name: shops_shop_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.shops_shop_id_seq', 7, true);


--
-- TOC entry 3485 (class 2606 OID 16454)
-- Name: customers customers_customer_email_customer_phone_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_customer_email_customer_phone_key UNIQUE (customer_email, customer_phone);


--
-- TOC entry 3487 (class 2606 OID 16452)
-- Name: customers customers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (customer_id);


--
-- TOC entry 3489 (class 2606 OID 16466)
-- Name: order_details order_details_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT order_details_pkey PRIMARY KEY (order_detail_id);


--
-- TOC entry 3483 (class 2606 OID 16444)
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (order_id);


--
-- TOC entry 3481 (class 2606 OID 16430)
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (prod_id);


--
-- TOC entry 3479 (class 2606 OID 16420)
-- Name: shops shops_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shops
    ADD CONSTRAINT shops_pkey PRIMARY KEY (shop_id);


--
-- TOC entry 3490 (class 2606 OID 16431)
-- Name: products fk_shop_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT fk_shop_id FOREIGN KEY (shop_id) REFERENCES public.shops(shop_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3492 (class 2606 OID 16467)
-- Name: order_details order_details_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT order_details_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(order_id);


--
-- TOC entry 3493 (class 2606 OID 16472)
-- Name: order_details order_details_prod_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT order_details_prod_id_fkey FOREIGN KEY (prod_id) REFERENCES public.products(prod_id);


--
-- TOC entry 3491 (class 2606 OID 16455)
-- Name: orders orders_customer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customers(customer_id);


--
-- TOC entry 3648 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: user
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2023-05-30 17:06:18 EEST

--
-- PostgreSQL database dump complete
--

