export type Cabins = {
    images: string[],
    name: string,
    price: number,
    description: string
  }

  
export const listCabins: Cabins[] = [
    {
      images: [
        'cf_cab_int.webp',
        'cabinas/cf_cab_int1.webp',
        'cabinas/cf_cab_int2.webp',
        'cabinas/cf_cab_int3.webp',
        'cabinas/cf_cab_int4.webp',
        'cabinas/cf_cab_int5.webp',
        'cabinas/cf_cab_int6.webp',
        'cabinas/cf_cab_int7.webp'
    ],
      name: 'Interna - Rodo’s Rave',
      price: 913,
      description: ' Disfruta de la emoción de la vida nocturna en este camarote interior. Perfecto para los amantes de la música y la fiesta, su diseño moderno y acogedor te invitará a relajarte durante el día y a prepararte para las noches llenas de diversión y baile en el festival. Una experiencia inolvidable te espera en Rodo’s Rave. Puedes escoger entre single, doble, triple, y cuádruple.'
    },
    {
      images: [
        'cf_cab_ext.webp',
        'cabinas/cf_cab_ext1.webp',
        'cabinas/cf_cab_ext2.webp',
        'cabinas/cf_cab_ext3.webp',
        'cabinas/cf_cab_ext4.webp',
        'cabinas/cf_cab_ext5.webp',
    ],
      name: 'Externa - Cimopolia’s Bonanza',
      price: 984,
      description: 'Admira las vistas panorámicas del océano en este camarote exterior. La cabina "Cimopolia’s Bonanza" te sumergirá en la serenidad del mar con su decoración inspirada en los tonos azules y blancos. Descubre la calma del océano mientras te relajas en la comodidad de tu camarote y te deleitas con la belleza del mar en todo su esplendor. Puedes escoger entre single, doble, triple, y cuádruple'
    },
    {
      images: [
        'cf_cab_balc.webp',
        'cabinas/cf_cab_balcon1.webp',
        'cabinas/cf_cab_balcon2.webp',
        'cabinas/cf_cab_balcon3.webp'
    ],
      name: 'Externa con Balcón - Deep Blue Triton',
      price: 1066,
      description: 'Conecta con la naturaleza y la música en este camarote con balcón. Disfruta de la brisa marina mientras te relajas en tu balcón privado, y prepárate para sumergirte en las olas de la música electrónica que te esperan en el festival.” "Deep Blue Triton” te brindará una experiencia única y emocionante en alta mar.  Puedes escoger entre single, doble, triple, y cuádruple.'
    },
    {
      images: [
        'cf_cab_suite.webp',
        'cabinas/cf_cab_suite1.webp',
        'cabinas/cf_cab_suite2.webp',
        'cabinas/cf_cab_suite3.webp',
        'cabinas/cf_cab_suite4.webp',
        'cabinas/cf_cab_suite5.webp',
        'cabinas/cf_cab_suite6.webp'
    ],
      name: 'VIP - Poseidon’s Wave',
      price: 1818,
      description: 'Eleva tu experiencia en esta lujosa suite. La cabina "Poseidon’s wave " te cautivará con su elegancia y comodidades de primera clase. Disfruta del lujo y la tranquilidad en este exclusivo refugio, donde cada detalle está cuidadosamente diseñado para ofrecerte una experiencia inigualable a bordo del crucero. En la suite no tienes que pensar en nada, vas a tener drinks all inclusive y spa.  Puedes escoger entre single, doble y triple.'
    },
]