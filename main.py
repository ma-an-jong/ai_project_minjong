import streamlit as st


st.set_page_config(page_title="First Streamlit App")

st.title("AI 협업 개발 실습")
st.write("첫 번째 Streamlit 앱입니다.")

st.divider()
st.write("이 화면은 이름을 입력하고 실습 시작 버튼을 눌러보는 간단한 예제입니다.")

name = st.text_input("이름 입력")

if st.button("실습 시작"):
    if name:
        st.success(f"{name}님, 실습을 시작합니다!")
    else:
        st.info("이름을 입력한 뒤 버튼을 눌러주세요.")
