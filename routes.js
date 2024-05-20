import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { PageSkeleton } from "@/components";
import Home from "@view/home";
import { motion } from "framer-motion";
import App from "@view/app";
import CreditRecharge from "@view/creditRecharge";
import UsdtRecharge from "@view/creditRecharge/usdtRecharge";
import GameHistory from "@view/lowerLevelUser/gameHistory";
import GameHistoryCardDetail from "@view/lowerLevelUser/gameHistory/detail.js";
import HelpUserRecharge from "@view/lowerLevelUser/helpUserRecharge";
import HelpUserRechargeRecord from "@view/lowerLevelUser/helpUserRecharge/record";
import BrokerageScheme from "@view/brokerageScheme";
import DealDetails from "@view/dealDetails";
import DealDetailsDetail from "@view/dealDetails/detail.js";
import AgentTransferRecord from "@view/agentTransfer/record";
import RechargeResult from "@view/creditRecharge/rechargeResult";
import CommissionWithdrawal from "@view/commissionWithdrawal";
import AgencyStatistics from "@view/agencyStatistics";
import AgencyStatisticsDetail from "@view/agencyStatistics/detail";
import AgencyStatisticsDetailMonth from "@view/agencyStatistics/detail/month.js";
import AgencyStatisticsDetailDaily from "@view/agencyStatistics/detail/daily.js";
import RechargeRecord from "@view/lowerLevelUser/rechargeRecord";
import ChargeRecord from "@view/lowerLevelUser/chargeRecord";

import UserStatistics from "@view/userStatistics";
import UserStatisticsDetail from "@view/userStatistics/detail";
import UserStatisticsDetailMonth from "@view/userStatistics/detail/month.js";
import UserStatisticsDetailDaily from "@view/userStatistics/detail/daily.js";
import PromotionUrl from "@view/promotionUrl";
import PromotionMaterial from "@view/promotionMaterial";
import MaterialDetails from "@view/promotionMaterial/materialDetails";
import MaterialEdit from "@view/promotionMaterial/materialEdit";

import Search from "@view/search";
import Rebate from '@/view/rebate/index/index'
import RebatePay from '@/view/rebate/pay'
import Agent from '@/view/agent/index'
import AgentAdd from '@/view/agent/add'
import AgentRegister from '@/view/agent/register'
import AgentCreatePassword from '@/view/agent/createPassword'
import Contract from '@/view/contract/index'
import ContractRules from '@/view/contract/rules'
import Reuse from '@/view/contract/reuse'

import UserList from '@view/lowerLevelUser/userList';
import AgentTransfer from "@view/agentTransfer";
import AddUser from "@view/lowerLevelUser/addUser";
import OverFlowApply from "@view/lowerLevelUser/overflowApply";
import JoinUs from "@view/joinUs";

export default [
    { index: true, element: <App /> },
    {
        path: "home", element: <Home />
    },
    {
        path: "creditRecharge", element: <CreditRecharge />
    },
    { path: "userList", element: <UserList /> },
    { path: "usdtRecharge", element: <UsdtRecharge /> },
    {
        path: "rebate",
        children: [
            { index: true, element: <Rebate />, },
            { path: 'pay', element: <RebatePay />, },
        ]
    },
    {
        path: "agent",
        children: [
            { index: true, element: <Agent /> },
            {
                path: ":uid",
                element: <Agent />,
                children: [
                    {
                        path: ":uid",
                        element: <Agent />,
                        children: [
                            {
                                path: ":uid",
                                element: <Agent />,
                                children: [
                                    { path: ":uid", element: <Agent /> },
                                ]
                            },
                        ]
                    },
                ]
            },
            { path: "add", element: <AgentAdd /> },
            { path: "register", element: <AgentRegister /> },
            { path: "createPassword", element: <AgentCreatePassword /> },
        ]
    },
    {
        path: "contract",
        children: [
            { path: ":status", element: <Contract /> },
            { path: "rules/:user", element: <ContractRules /> },
            { path: "reuse/:user", element: <Reuse /> },
        ]
    },
    { path: "gameHistory", element: <GameHistory /> },
    { path: "gameHistoryCardDetail", element: <GameHistoryCardDetail /> },
    { path: "helpUserRecharge", element: <HelpUserRecharge /> },
    {
        path: "helpUserRechargeRecord",
        element: <HelpUserRechargeRecord />,
    },
    { path: "brokerageScheme", element: <BrokerageScheme /> },
    { path: "dealDetails", element: <DealDetails /> },
    { path: "dealDetailsCardDetail", element: <DealDetailsDetail /> },
    { path: "agentTransfer", element: <AgentTransfer /> },
    { path: "addUser", element: <AddUser /> },
    { path: "overFlowApply", element: <OverFlowApply /> },
    { path: "agentTransferRecord", element: <AgentTransferRecord /> },
    { path: "rechargeResult", element: <RechargeResult /> },
    { path: "commissionWithdrawal", element: <CommissionWithdrawal /> },
    { path: "agencyStatistics", element: <AgencyStatistics /> },
    { path: "agencyStatisticsDetail", element: <AgencyStatisticsDetail /> },
    { path: "agencyStatisticsDetailMonth", element: <AgencyStatisticsDetailMonth /> },
    { path: "agencyStatisticsDetailDaily", element: <AgencyStatisticsDetailDaily /> },
    { path: "rechargeRecord", element: <RechargeRecord /> },
    { path: "userStatistics", element: <UserStatistics /> },
    { path: "userStatisticsDetail", element: <UserStatisticsDetail /> },
    { path: "userStatisticsDetailMonth", element: <UserStatisticsDetailMonth /> },
    { path: "userStatisticsDetailDaily", element: <UserStatisticsDetailDaily /> },
    { path: "search", element: <Search /> },
    { path: "joinUs", element: <JoinUs /> },
    { path: "chargeRecord", element: <ChargeRecord /> },
    { path: "promotionUrl", element: <PromotionUrl /> },
    { path: "promotionMaterial", element: <PromotionMaterial /> },
    { path: "materialDetails", element: <MaterialDetails /> },
    { path: "materialEdit", element: <MaterialEdit /> },
];
