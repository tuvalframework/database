
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/tuvalframework/database/blob/main/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/@tuval/database/latest.svg)](https://www.npmjs.com/package/@tuval/database)
[![npm next package](https://img.shields.io/npm/v/@tuval/database/next.svg)](https://www.npmjs.com/package/@tuval/database)
[![npm downloads](https://img.shields.io/npm/dm/@tuval/database.svg)](https://www.npmjs.com/package/@tuval/database)
[![Follow on Twitter](https://img.shields.io/twitter/follow/tuvalframework.svg?label=follow+tuvalframework)](https://twitter.com/tuvalframework)
[![Follow on Youtube](https://img.shields.io/youtube/channel/views/UCIvOMAYBuLllvPIJp0o-opQ?style=social)](https://www.youtube.com/channel/UCIvOMAYBuLllvPIJp0o-opQ)

### Kavramlar

tuval/database kavramlarının bir listesi ve farklı adaptörler kullanılarak ilgili karşılıkları:

- **Veritabanı (Database)** - tuval/database kütüphanesinin bir örneği olup, desteklenen adaptörlerden birini soyutlar ve belirli bir şema veya altında yatan veritabanı içindeki izole kapsam üzerinde CRUD işlemleri ve sorgular için birleşik bir API sağlar.
- **Adaptör (Adapter)** - Bu kütüphanenin destekleyebileceği altındaki bir veritabanı motorunun bir uygulamasıdır - aşağıda [desteklenen veritabanları](#supported-databases) ve her Veritabanı için desteklenen özelliklerin listesi bulunmaktadır.
- **Koleksiyon (Collection)** - Aynı adaptör kapsamındaki belgelerin bir kümesidir. SQL tabanlı adaptörler için bu, bir tabloya eşdeğerdir. No-SQL adaptörler için bu, yerel bir koleksiyona eşdeğerdir.
- **Belge (Document)** - Bir tuval/database koleksiyonunda saklanacak basit bir JSON nesnesidir. SQL tabanlı adaptörler için bu, bir satıra eşdeğerdir. No-SQL adaptörler için bu, yerel bir belgeye eşdeğerdir.
- **Öznitelik (Attribute)** - Basit bir belge özniteliği. SQL tabanlı adaptörler için bu, bir sütuna eşdeğerdir. No-SQL adaptörler için bu, yerel bir belge alanına eşdeğerdir.
- **İndeks (Index)** - Veritabanı sorgularınızın performansını artırmak için kullanılan basit bir koleksiyon indeksidir.
- **İzinler (Permissions)** - İzinleri kullanarak, belirli bir belge için hangi rollerin okuma, oluşturma, güncelleme ve silme erişimine sahip olacağını belirleyebilirsiniz. Özel öznitelik `$permissions`, koleksiyondaki her belge için izin meta verilerini depolamak için kullanılır. Bir izin rolü istediğiniz herhangi bir dize olabilir. Kullanıcılarınıza ` $authorization->addRole()` kullanarak yeni roller devredebilirsiniz; bir kullanıcı yeni bir rol kazandığında ilgili belge için okuma, oluşturma, güncelleme veya silme erişimine sahip olurlar.

### Filtreler

Öznitelik filtreleri, öznitelikleri veritabanına kaydetmeden önce ve veritabanından alırken manipüle eden işlevlerdir. `Database::addFilter($name, $encode, $decode)` kullanarak filtre ekleyebilirsiniz; burada `$name` daha sonra öznitelik `filters` dizisine ekleyebileceğimiz filtre adıdır. `$encode` ve `$decode`, özniteliği kodlamak ve kod çözmek için kullanılan işlevlerdir. Ayrıca `Database` örneği oluşturulurken tanımlanabilen örnek düzeyi filtreler de vardır. Örnek düzeyi filtreler aynı ada sahipsa statik filtrelerin üzerine yazar.

### Rezerve Edilmiş Öznitelikler

- `$id` - belgenin benzersiz ID'si, kendi özel ID'nizi ayarlayabilir veya kütüphane tarafından rastgele bir UID oluşturulabilir.
- `$createdAt` - belgenin oluşturulma tarihi, belge oluşturulduğunda otomatik olarak ayarlanır.
- `$updatedAt` - belgenin güncellenme tarihi, belge güncellendiğinde otomatik olarak ayarlanır.
- `$collection` - belgenin saklandığı koleksiyonun adını içeren bir öznitelik.
- `$permissions` - her biri belirli bir eylem ve rolü temsil eden dizgeler içeren bir öznitelik. Kullanıcınız bu belge için o eylem için bu rolü elde ederse, belgeye erişimleri olur.

### Öznitelik Türleri

Veritabanı belge arayüzü yalnızca ilkel türleri (`string`, `integer`, `float` ve `boolean`) destekler; bunlar her ilgili veritabanı adaptörü için yerel veritabanı türlerine çevrilir. Diziler veya nesneler gibi karmaşık türler, saklanırken JSON dizgilerine şifrelenir ve uyumlu adaptörlerden alındığında tekrar çözülür.

### Desteklenen Veritabanları

Aşağıda desteklenen veritabanlarının ve onların uyumlu olarak test edilmiş sürümlerinin yanı sıra desteklenen özelliklerin ve ilgili limitlerin bir listesi bulunmaktadır.

| Adaptör | Durum | Sürüm |
|---------|---------|---|
| MariaDB | ✅ | 10.5 |
| MySQL | ✅ | 8.0 |
| Postgres | ✅ | 13.0 |
| MongoDB | ✅ | 5.0 |
| SQLite | ✅ | 3.38 |

` ✅  - destekleniyor `

` 🛠  - çalışma aşamasında `

### Kısıtlamalar 

#### MariaDB, MySQL, Postgres, SQLite
- ID maksimum boyutu 255 bayt olabilir
- ID yalnızca [^A-Za-z0-9] ve semboller `_` `-` içerebilir
- Belge maksimum boyutu 65535 bayttır
- Koleksiyonda maksimum 1017 öznitelik olabilir
- Koleksiyonda maksimum 64 indeks olabilir
- İndeks değeri maksimum boyutu 768 bayttır. 768 bayttan büyük değerler kesilir
- Dize maksimum boyutu 4294967295 karakterdir
- Tam sayı maksimum boyutu 4294967295'tir

#### MongoDB
- ID maksimum boyutu 255 bayt olabilir
- ID yalnızca [^A-Za-z0-9] ve semboller `_` `-` içerebilir
- Belge sınırsız boyutta olabilir
- Koleksiyonda sınırsız sayıda öznitelik olabilir 
- Koleksiyonda maksimum 64 indeks olabilir
- İndeks değeri sınırsız boyutta olabilir
- Dize maksimum boyutu 2147483647 karakterdir 
- Tam sayı maksimum boyutu 4294967295'tir 

## Kullanım

### Veritabanına Bağlanma 

#### MariaDB
