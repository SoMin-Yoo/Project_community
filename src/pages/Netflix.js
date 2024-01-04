import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "../db";
import { collection, orderBy, query, onSnapshot } from 'firebase/firestore'
import { DateTime } from "luxon";
export default function Netflix() {
  const [list, setList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    onSnapshot(query(collection(db, 'users'), orderBy('created_at', 'desc')), results => {
      const newList = [];
      results.forEach(doc => {
        const data = doc.data();
        data.id = doc.id;
        newList.push(data);
      });
      setList(newList);
      // 처음에는 전체 목록을 보여주기 위해 filteredItems를 초기화
      setFilteredItems(newList);
    })
  }, []);

  // 검색어에 따라 필터링된 목록
  const handleSearch = () => {
    const filtered = list.filter(item =>
      item.subject.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
    setCurrentPage(1); 
  };

  // 현재 페이지의 데이터 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="netflixLogo">
        넷플릭스
      </div>
      <div>
        <input
          type="text"
          className="search_input"
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input type="button" value="검색" className="search_submit" onClick={handleSearch} />
      </div>

      <ul>
        <li className="listContainer">
          <div className="list">제목</div>
          <div className="list">작성자</div>
          <div className="list">작성일시</div>
        </li>

        {currentItems.map(item => (
          <li key={item.id} className="listContainer">
            <div className="list">
              <Link to={`/users/${item.id}`}>
                {item.subject}
              </Link>
            </div>
            <div className="list">{item.author}</div>
            <div className="list">{DateTime.fromMillis(item.created_at).toFormat('yyyy-LL-dd HH:mm:ss')}</div>
          </li>
        ))}

        {searchTerm !== '' && filteredItems.length === 0 && (
          <li className="listContainer">
            <div className="list">검색 결과가 없습니다.</div>
          </li>
        )}
      </ul>

      <div>
        {/* 페이지네이션 컴포넌트 */}
        <ul className="pagination">
          {Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }).map((_, index) => (
            <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button onClick={() => paginate(index + 1)} className="page-link">
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <button className="writeButton">
          <Link className="writePage" to="/Write">
            글쓰기
          </Link>
        </button>
      </div>

    </div>
  );
}