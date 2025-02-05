import { IPost } from '../interfaces/ipost.interface';
import { ICategory } from './../interfaces/icategory.interface';
export const Posts: IPost[] = [
    {
        id: 1,
        titulo: 'Explorando las mejores playas del mundo',
        texto: 'Descubre las playas más impresionantes del mundo, desde arenas blancas hasta aguas cristalinas. Un paraíso para los amantes del sol y el mar. En este artículo, te llevaremos a un recorrido por las playas más hermosas y exóticas que debes visitar al menos una vez en la vida. Desde las playas de Maldivas hasta las costas de Australia, cada destino ofrece una experiencia única y memorable.',
        autor: 'Juan Pérez',
        imagen: '',
        fecha: '2023-01-01',
        categoria: { id: 1, titulo: 'Playa' }
    },
    {
        id: 2,
        titulo: 'Aventuras en las montañas más altas',
        texto: 'Sumérgete en la aventura de escalar las montañas más altas y desafiantes. Una experiencia única para los amantes del senderismo y la naturaleza. En este artículo, exploraremos las montañas más icónicas del mundo, desde el Everest hasta los Andes. Conocerás las rutas de senderismo más populares, los desafíos que enfrentarás y los paisajes impresionantes que te esperan en la cima.',
        autor: 'María López',
        imagen: '',
        fecha: '2023-02-02',
        categoria: { id: 2, titulo: 'Montaña' }
    },
    {
        id: 3,
        titulo: 'Descubriendo las ciudades más vibrantes',
        texto: 'Explora las ciudades más vibrantes y llenas de vida. Desde la arquitectura hasta la cultura, cada ciudad tiene su propia historia que contar. En este artículo, te llevaremos a un recorrido por las ciudades más emocionantes del mundo, como Nueva York, Tokio y París. Descubrirás los lugares más emblemáticos, los eventos culturales más destacados y los mejores lugares para disfrutar de la gastronomía local.',
        autor: 'Carlos García',
        imagen: '',
        fecha: '2023-03-03',
        categoria: { id: 3, titulo: 'Ciudad' }
    },
    {
        id: 4,
        titulo: 'La tranquilidad de la vida rural',
        texto: 'Experimenta la paz y la tranquilidad de la vida rural. Un escape perfecto del bullicio de la ciudad, rodeado de naturaleza y serenidad. En este artículo, exploraremos los encantos de la vida en el campo, desde las actividades agrícolas hasta las tradiciones locales. Conocerás los beneficios de vivir en un entorno rural y descubrirás los mejores destinos para disfrutar de unas vacaciones relajantes en plena naturaleza.',
        autor: 'Ana Martínez',
        imagen: '',
        fecha: '2023-04-04',
        categoria: { id: 4, titulo: 'Rural' }
    },
    {
        id: 5,
        titulo: 'Festivales alrededor del mundo',
        texto: 'Sumérgete en la alegría y la celebración de los festivales más famosos del mundo. Una experiencia cultural única llena de música, danza y tradición. En este artículo, te llevaremos a un recorrido por los festivales más vibrantes y coloridos, desde el Carnaval de Río de Janeiro hasta el Festival de Diwali en India. Conocerás la historia y el significado de cada festival, así como los eventos y actividades que no te puedes perder.',
        autor: 'Luis Fernández',
        imagen: '',
        fecha: '2023-05-05',
        categoria: { id: 5, titulo: 'Festivales' }
    },
    {
        id: 6,
        titulo: 'Las playas más escondidas para descubrir',
        texto: 'Encuentra las playas más escondidas y menos conocidas. Un paraíso secreto para aquellos que buscan tranquilidad y belleza natural. En este artículo, te revelaremos las playas más remotas y vírgenes del mundo, donde podrás disfrutar de la naturaleza en su estado más puro. Desde pequeñas calas en el Mediterráneo hasta islas desiertas en el Pacífico, cada playa ofrece una experiencia única y exclusiva.',
        autor: 'Sofía Rodríguez',
        imagen: '',
        fecha: '2023-06-06',
        categoria: { id: 1, titulo: 'Playa' }
    },
    {
        id: 7,
        titulo: 'Rutas de senderismo en montañas',
        texto: 'Descubre las mejores rutas de senderismo en las montañas. Perfecto para los aventureros que buscan desafíos y vistas impresionantes. En este artículo, te presentaremos las rutas de senderismo más espectaculares del mundo, desde el Camino Inca en Perú hasta el Tour del Mont Blanc en Europa. Conocerás los detalles de cada ruta, los paisajes que podrás disfrutar y los consejos para preparar tu aventura.',
        autor: 'Miguel Hernández',
        imagen: '',
        fecha: '2023-07-07',
        categoria: { id: 2, titulo: 'Montaña' }
    },
    {
        id: 8,
        titulo: 'Las ciudades más históricas del mundo',
        texto: 'Explora las ciudades con más historia y patrimonio cultural. Un viaje a través del tiempo y la historia de la humanidad. En este artículo, te llevaremos a un recorrido por las ciudades más antiguas y llenas de historia, como Roma, Atenas y Jerusalén. Descubrirás los monumentos históricos más importantes, los museos más destacados y las historias fascinantes que han dado forma a estas ciudades.',
        autor: 'Laura González',
        imagen: '',
        fecha: '2023-08-08',
        categoria: { id: 3, titulo: 'Ciudad' }
    },
    {
        id: 9,
        titulo: 'Viviendo la vida rural en su máxima expresión',
        texto: 'Conoce la vida rural en su máxima expresión. Desde la agricultura hasta la vida en comunidad, una experiencia auténtica y enriquecedora. En este artículo, exploraremos las diferentes facetas de la vida en el campo, desde la producción de alimentos hasta las festividades locales. Conocerás las ventajas de vivir en un entorno rural y descubrirás cómo puedes disfrutar de una vida más simple y conectada con la naturaleza.',
        autor: 'Pedro Sánchez',
        imagen: '',
        fecha: '2023-09-09',
        categoria: { id: 4, titulo: 'Rural' }
    },
    {
        id: 10,
        titulo: 'Los festivales más coloridos y vibrantes',
        texto: 'Participa en los festivales más coloridos y vibrantes del mundo. Una celebración de la cultura y la tradición en su forma más pura. En este artículo, te llevaremos a un recorrido por los festivales más espectaculares, desde el Holi en India hasta el Mardi Gras en Nueva Orleans. Conocerás las tradiciones y costumbres de cada festival, así como los eventos y actividades que hacen de cada celebración una experiencia inolvidable.',
        autor: 'Elena Ruiz',
        imagen: '',
        fecha: '2023-10-10',
        categoria: { id: 5, titulo: 'Festivales' }
    },
    {
        id: 11,
        titulo: 'Playas paradisíacas para relajarse',
        texto: 'Relájate en las playas más paradisíacas del mundo. Un lugar perfecto para desconectar y disfrutar del sol y el mar. En este artículo, te presentaremos las playas más hermosas y tranquilas, donde podrás relajarte y recargar energías. Desde las playas de Bora Bora hasta las costas de Seychelles, cada destino ofrece un entorno idílico y sereno para disfrutar de unas vacaciones perfectas.',
        autor: 'Fernando Torres',
        imagen: '',
        fecha: '2023-11-11',
        categoria: { id: 1, titulo: 'Playa' }
    },
    {
        id: 12,
        titulo: 'Montañas y sus secretos',
        texto: 'Descubre los secretos que esconden las montañas. Desde cuevas hasta lagos escondidos, una aventura para los más curiosos. En este artículo, te llevaremos a explorar los rincones más misteriosos y fascinantes de las montañas, desde las cuevas de hielo en Islandia hasta los lagos ocultos en los Alpes. Conocerás las historias y leyendas que rodean estos lugares y descubrirás cómo puedes visitarlos y disfrutar de su belleza.',
        autor: 'Isabel Ramírez',
        imagen: '',
        fecha: '2023-12-12',
        categoria: { id: 2, titulo: 'Montaña' }
    },
    {
        id: 13,
        titulo: 'Ciudades modernas y su arquitectura',
        texto: 'Explora la arquitectura moderna de las ciudades más avanzadas. Un recorrido por los edificios más impresionantes y futuristas. En este artículo, te llevaremos a un recorrido por las ciudades más innovadoras y sus obras arquitectónicas más destacadas, desde los rascacielos de Dubái hasta los edificios sostenibles de Copenhague. Conocerás los arquitectos más influyentes y las tendencias que están dando forma a las ciudades del futuro.',
        autor: 'Javier Morales',
        imagen: '',
        fecha: '2023-01-13',
        categoria: { id: 3, titulo: 'Ciudad' }
    },
    {
        id: 14,
        titulo: 'La vida rural y sus encantos',
        texto: 'Descubre los encantos de la vida rural. Desde la gastronomía hasta las tradiciones, una experiencia auténtica y enriquecedora. En este artículo, exploraremos los aspectos más encantadores de la vida en el campo, desde la producción de alimentos orgánicos hasta las festividades locales. Conocerás las ventajas de vivir en un entorno rural y descubrirás cómo puedes disfrutar de una vida más simple y conectada con la naturaleza.',
        autor: 'Patricia Vega',
        imagen: '',
        fecha: '2023-02-14',
        categoria: { id: 4, titulo: 'Rural' }
    },
    {
        id: 15,
        titulo: 'Festivales de música alrededor del mundo',
        texto: 'Vive la experiencia de los festivales de música más famosos del mundo. Una celebración de la música y la cultura en su máxima expresión. En este artículo, te llevaremos a un recorrido por los festivales de música más icónicos, desde Coachella en Estados Unidos hasta Glastonbury en Reino Unido. Conocerás los artistas más destacados, los escenarios más impresionantes y los momentos más memorables de cada festival.',
        autor: 'Ricardo Díaz',
        imagen: '',
        fecha: '2023-03-15',
        categoria: { id: 5, titulo: 'Festivales' }
    }
]
export const category: ICategory[] = [
    { id: 1, titulo: 'Playa' },
    { id: 2, titulo: 'Montaña' },
    { id: 3, titulo: 'Ciudad' },
    { id: 4, titulo: 'Rural' },
    { id: 5, titulo: 'Festivales' }
];