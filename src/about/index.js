import "../pages/about.css";

import swiperInit from '../js/utils/Swiper';
import { GITCOMMITS } from "../js/constants/const";
import GithubApi from "../js/modules/GithubApi";
import CommitCardList from "../js/components/CommitCardList";
import CommitCard from "../js/components/CommitCard";

const container = document.querySelector('.commit__cards');

const githubApi = new GithubApi(GITCOMMITS);

const commitCard = (...arg) => new CommitCard(...arg);

const commitCardList = new CommitCardList(container, commitCard, githubApi, swiperInit);

