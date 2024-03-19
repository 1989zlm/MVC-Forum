import PopupController from "../../Components/Popup/PopupController";

const ListView = ({ posts, setSelectedUser, selectedUser }) => {
  console.log(selectedUser);
  return (
    <div className="h-screen text-white bg-[#1c1c1c] container-sm px-5 py-5 md:px-40 lg:px-52">
      <h1>
        Gönderi Sayısı <span className="font-bold">{posts.length}</span>
      </h1>

      {posts.length === 0 ? (
        <div>Yükleniyor</div>
      ) : (
        posts?.map((post) => (
          <div
            key={post.id}
            className="bg-black my-5 p-5  w-full rounded-md shadow shadow-gray-400 cursor-pointer transition hover:shadow-yellow-300"
          >
            <div className="flex justify-between">
              <h3>{post.title}</h3>
              <p
                onClick={() => setSelectedUser(post.user)}
                className="text-yellow-500"
              >
                {post.user}
              </p>
            </div>
            <p>{post.text}</p>
          </div>
        ))
      )}
      {/* bir kullanıcı ismi tıklanınca ekrana onun gönderilerini basığımız pencere(modal-popup) */}
      {selectedUser && (
        <PopupController
          user={selectedUser}
          close={() => setSelectedUser(null)} //burada kısaltma için setselcteduserin adını close yaptık
        />
      )}
    </div>
  );
};

export default ListView;

//handle clicki burada tanımlamadık cçnki bu mvc dosyası
